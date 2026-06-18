/* =========================================
   ODYSSEY 4x4 - CLICK & PAGE TRACKING ANALYTICS
   Tracks page views, clicks, and user interactions
   Routes through the Supabase data layer (with localStorage fallback)
   ========================================= */

(function() {
    'use strict';

    /* =========================================
       HELPERS
       ========================================= */
    function now() {
        return new Date().toISOString();
    }

    function pageName() {
        var path = window.location.pathname.split('/').pop() || 'index.html';
        var title = document.title || path;
        return { path: path, title: title };
    }

    function getSessionId() {
        var sid = sessionStorage.getItem('odyssey_session_id');
        if (!sid) {
            sid = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
            sessionStorage.setItem('odyssey_session_id', sid);
        }
        return sid;
    }

    /* =========================================
       TRACK PAGE VIEW
       ========================================= */
    function trackPageView() {
        var pg = pageName();
        db.trackPageView({
            type: 'pageview',
            path: pg.path,
            title: pg.title,
            url: window.location.href,
            referrer: document.referrer || '(direct)',
            timestamp: now(),
            sessionId: getSessionId()
        });
    }

    /* =========================================
       TRACK CLICK
       ========================================= */
    function trackClick(element, label, category) {
        var pg = pageName();
        db.trackClick({
            type: 'click',
            path: pg.path,
            label: label || element.textContent || element.tagName,
            category: category || 'interaction',
            tag: element.tagName,
            id: element.id || '',
            className: element.className || '',
            href: element.href || '',
            timestamp: now(),
            sessionId: getSessionId()
        });
    }

    /* =========================================
       TRACK FORM SUBMISSION
       ========================================= */
    function trackFormSubmit(formId, formName) {
        var pg = pageName();
        db.trackFormSubmit({
            type: 'form_submit',
            path: pg.path,
            formId: formId || '',
            formName: formName || '',
            timestamp: now(),
            sessionId: getSessionId()
        });
    }

    /* =========================================
       EXPOSE GLOBALLY
       ========================================= */
    window.odysseyAnalytics = {
        trackClick: trackClick,
        trackFormSubmit: trackFormSubmit,
        trackPageView: trackPageView
    };

    /* =========================================
       AUTO-TRACK PAGE VIEW
       ========================================= */
    // Don't track on admin page to avoid noise
    var pg = pageName();
    if (pg.path !== 'admin.html') {
        // Small delay to let page fully load
        setTimeout(trackPageView, 300);
    }

    /* =========================================
       AUTO-TRACK CLICKS (delegated listener)
       ========================================= */
    document.addEventListener('click', function(e) {
        var target = e.target;
        
        // Traverse up to find the meaningful clicked element
        var el = target;
        var maxDepth = 5;
        var label = '';
        var category = '';

        while (el && el !== document.body && maxDepth > 0) {
            // Track links
            if (el.tagName === 'A' && el.href) {
                var href = el.href;
                var text = (el.textContent || '').trim().slice(0, 60);
                
                // Categorize
                if (href.includes('wa.me') || href.includes('whatsapp')) {
                    category = 'whatsapp';
                    label = 'WhatsApp: ' + text || 'WhatsApp Link';
                } else if (href.includes('mailto:')) {
                    category = 'email';
                    label = 'Email: ' + text || 'Email Link';
                } else if (href.includes('tel:')) {
                    category = 'phone';
                    label = 'Phone: ' + text || 'Phone Link';
                } else if (el.classList.contains('header-logo') || el.classList.contains('slide-menu-logo') || el.closest('.header-logo')) {
                    break; // Skip logo clicks
                } else if (el.classList.contains('filter-card') || el.closest('.filter-card')) {
                    category = 'filter';
                    label = text || 'Filter Click';
                } else if (el.classList.contains('product-card') || el.closest('.product-card')) {
                    category = 'product';
                    label = text || 'Product Card';
                } else if (href.includes('category-') || href.includes('vehicle-')) {
                    category = 'navigation';
                    label = text || 'Category Link';
                } else if (href.endsWith('.html')) {
                    category = 'navigation';
                    label = text || 'Page Link';
                }

                if (label) {
                    trackClick(el, label, category);
                }
                break;
            }

            // Track buttons
            if (el.tagName === 'BUTTON' || el.type === 'button' || el.type === 'submit') {
                var btnText = (el.textContent || '').trim().slice(0, 60);
                if (el.id) category = 'button:' + el.id;
                else category = 'button';
                label = btnText || 'Button';
                trackClick(el, label, category);
                break;
            }

            // Skip logo images
            if (el.tagName === 'IMG' && el.alt && el.alt.toLowerCase().includes('logo')) {
                break;
            }

            el = el.parentElement;
            maxDepth--;
        }
    }, true); // Use capture phase to catch events early

    console.log('[Odyssey Analytics] Tracking initialized');
})();
