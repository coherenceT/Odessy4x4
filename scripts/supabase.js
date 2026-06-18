/* =========================================
   ODYSSEY 4x4 - SUPABASE DATA LAYER
   =========================================
   
   Uses direct fetch() calls to the Supabase REST API.
   No SDK dependency needed — works out of the box.
   
   HOW TO ACTIVATE SUPABASE:
   1. Create a free Supabase project at https://supabase.com
   2. Go to Project Settings → API → copy your Project URL and anon key
   3. Open the Supabase SQL Editor and run the SQL from the comment block below
   4. Set ENABLED = true and paste your keys below
   5. Deploy — all data will now sync to Supabase!
   ========================================= */

/* =========================================
   SQL SCHEMA — Run this in Supabase SQL Editor:
   
CREATE TABLE IF NOT EXISTS customer_data (
  id BIGINT PRIMARY KEY,
  type TEXT NOT NULL DEFAULT 'community',
  name TEXT,
  surname TEXT,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  brand TEXT,
  model TEXT,
  region TEXT,
  products JSONB DEFAULT '[]',
  discount_code TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  date TEXT
);

CREATE TABLE IF NOT EXISTS analytics_page_views (
  id BIGSERIAL PRIMARY KEY,
  path TEXT,
  title TEXT,
  url TEXT,
  referrer TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  session_id TEXT
);

CREATE TABLE IF NOT EXISTS analytics_clicks (
  id BIGSERIAL PRIMARY KEY,
  path TEXT,
  label TEXT,
  category TEXT,
  tag TEXT,
  element_id TEXT,
  class_name TEXT,
  href TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  session_id TEXT
);

CREATE TABLE IF NOT EXISTS analytics_form_submissions (
  id BIGSERIAL PRIMARY KEY,
  path TEXT,
  form_id TEXT,
  form_name TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  session_id TEXT
);

CREATE TABLE IF NOT EXISTS analytics_sessions (
  id BIGSERIAL PRIMARY KEY,
  session_id TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS geo_tracking (
  id BIGSERIAL PRIMARY KEY,
  source TEXT,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  city TEXT,
  region TEXT,
  country TEXT,
  ip TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Allow anon key access
ALTER TABLE customer_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE geo_tracking ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_all_customer_data" ON customer_data FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_page_views" ON analytics_page_views FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_clicks" ON analytics_clicks FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_form_submissions" ON analytics_form_submissions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_sessions" ON analytics_sessions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all_geo" ON geo_tracking FOR ALL TO anon USING (true) WITH CHECK (true);
   ========================================= */

(function() {
    'use strict';

    /* =========================================
       CONFIGURATION
       =========================================
       Set ENABLED to true and fill in your keys
       to activate Supabase. Until then, all
       data uses localStorage (current behavior).
       ========================================= */
    var CONFIG = {
        ENABLED: false,        // ← Set to true when you have your keys
        SUPABASE_URL: '',      // ← Your project URL (e.g. https://xxx.supabase.co)
        SUPABASE_ANON_KEY: ''  // ← Your anon public key
    };

    /* =========================================
       SUPABASE REST API HELPER
       ========================================= */
    function apiUrl(table) {
        return CONFIG.SUPABASE_URL.replace(/\/+$/, '') + '/rest/v1/' + table;
    }

    function apiHeaders() {
        return {
            'apikey': CONFIG.SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + CONFIG.SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        };
    }

    function doFetch(url, options) {
        return fetch(url, options).then(function(resp) {
            if (!resp.ok) {
                return resp.text().then(function(text) {
                    throw new Error('Supabase API error ' + resp.status + ': ' + text);
                });
            }
            // For SELECT queries, parse JSON; for INSERT, return empty
            var ct = resp.headers.get('content-type') || '';
            if (ct.indexOf('json') !== -1) {
                return resp.json();
            }
            return resp.text().then(function() { return null; });
        });
    }

    function apiInsert(table, data) {
        return doFetch(apiUrl(table), {
            method: 'POST',
            headers: apiHeaders(),
            body: JSON.stringify(data)
        });
    }

    function apiSelect(table, orderColumn) {
        var url = apiUrl(table) + '?select=*';
        if (orderColumn) {
            url += '&order=' + encodeURIComponent(orderColumn + '.desc');
        }
        return doFetch(url, {
            method: 'GET',
            headers: apiHeaders()
        });
    }

    var isReady = false;

    function init() {
        if (isReady) return true;
        if (!CONFIG.ENABLED || !CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_ANON_KEY) {
            return false;
        }
        // Validate URL format
        if (CONFIG.SUPABASE_URL.indexOf('supabase') === -1 && CONFIG.SUPABASE_URL.indexOf('supabase.co') === -1) {
            console.warn('[Supabase] URL does not look like a Supabase project URL');
            return false;
        }
        isReady = true;
        console.log('[Supabase] Connected via REST API');
        return true;
    }

    /* =========================================
       GENERIC HELPERS
       ========================================= */
    function now() {
        return new Date().toISOString();
    }

    /* =========================================
       LOCALSTORAGE FALLBACK HELPERS
       ========================================= */
    function lsGet(key) {
        try {
            var stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : null;
        } catch(e) { return null; }
    }

    function lsSet(key, data) {
        try { localStorage.setItem(key, JSON.stringify(data)); }
        catch(e) {}
    }

    function lsPush(key, item, maxItems) {
        var arr = lsGet(key) || [];
        arr.push(item);
        if (maxItems && arr.length > maxItems) arr = arr.slice(-maxItems);
        lsSet(key, arr);
        return arr;
    }

    /* =========================================
       PUBLIC API — CUSTOMER DATA
       ========================================= */
    window.db = window.db || {};

    db.saveCustomerData = function(data) {
        if (init()) {
            return apiInsert('customer_data', data).catch(function(err) {
                console.warn('[Supabase] insert customer_data error:', err.message);
                lsPush('odyssey_customer_data', data);
            });
        } else {
            lsPush('odyssey_customer_data', data);
            return Promise.resolve();
        }
    };

    db.getCustomerData = function() {
        if (init()) {
            return apiSelect('customer_data', 'id').then(function(supabaseData) {
                var result = supabaseData || [];
                // Merge with localStorage fallback
                var localData = lsGet('odyssey_customer_data');
                if (localData && localData.length > 0) {
                    // Deduplicate by id
                    var existingIds = {};
                    result.forEach(function(d) { existingIds[d.id] = true; });
                    localData.forEach(function(d) {
                        if (!existingIds[d.id]) result.push(d);
                    });
                }
                return result;
            }).catch(function(err) {
                console.warn('[Supabase] select customer_data error:', err.message);
                return lsGet('odyssey_customer_data') || [];
            });
        } else {
            return Promise.resolve(lsGet('odyssey_customer_data') || []);
        }
    };

    /* =========================================
       PUBLIC API — ANALYTICS
       ========================================= */

    db.trackPageView = function(data) {
        if (init()) {
            return apiInsert('analytics_page_views', data).catch(function(err) {
                console.warn('[Supabase] insert page_view error:', err.message);
                var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
                fallback.pageViews.push(data);
                lsSet('odyssey_analytics_data', fallback);
            });
        } else {
            var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
            fallback.pageViews.push(data);
            if (fallback.pageViews.length > 2000) fallback.pageViews = fallback.pageViews.slice(-2000);
            lsSet('odyssey_analytics_data', fallback);
            return Promise.resolve();
        }
    };

    db.trackClick = function(data) {
        if (init()) {
            return apiInsert('analytics_clicks', data).catch(function(err) {
                console.warn('[Supabase] insert click error:', err.message);
                var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
                fallback.clicks.push(data);
                lsSet('odyssey_analytics_data', fallback);
            });
        } else {
            var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
            fallback.clicks.push(data);
            if (fallback.clicks.length > 2000) fallback.clicks = fallback.clicks.slice(-2000);
            lsSet('odyssey_analytics_data', fallback);
            return Promise.resolve();
        }
    };

    db.trackFormSubmit = function(data) {
        if (init()) {
            return apiInsert('analytics_form_submissions', data).catch(function(err) {
                console.warn('[Supabase] insert form_submit error:', err.message);
                var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
                fallback.formSubmissions.push(data);
                lsSet('odyssey_analytics_data', fallback);
            });
        } else {
            var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
            fallback.formSubmissions.push(data);
            if (fallback.formSubmissions.length > 2000) fallback.formSubmissions = fallback.formSubmissions.slice(-2000);
            lsSet('odyssey_analytics_data', fallback);
            return Promise.resolve();
        }
    };

    db.trackSession = function(data) {
        if (init()) {
            return apiInsert('analytics_sessions', data).catch(function() {});
        } else {
            var fallback = lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
            fallback.sessions.push(data);
            if (fallback.sessions.length > 2000) fallback.sessions = fallback.sessions.slice(-2000);
            lsSet('odyssey_analytics_data', fallback);
            return Promise.resolve();
        }
    };

    db.getAnalytics = function() {
        if (init()) {
            return Promise.all([
                apiSelect('analytics_page_views', 'id'),
                apiSelect('analytics_clicks', 'id'),
                apiSelect('analytics_form_submissions', 'id'),
                apiSelect('analytics_sessions', 'id')
            ]).then(function(results) {
                var data = {
                    pageViews: results[0] || [],
                    clicks: results[1] || [],
                    formSubmissions: results[2] || [],
                    sessions: results[3] || []
                };
                // Merge with localStorage fallback
                var localData = lsGet('odyssey_analytics_data');
                if (localData) {
                    data.pageViews = data.pageViews.concat(localData.pageViews || []);
                    data.clicks = data.clicks.concat(localData.clicks || []);
                    data.formSubmissions = data.formSubmissions.concat(localData.formSubmissions || []);
                    data.sessions = data.sessions.concat(localData.sessions || []);
                }
                return data;
            }).catch(function(err) {
                console.warn('[Supabase] getAnalytics error:', err.message);
                return lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] };
            });
        } else {
            return Promise.resolve(lsGet('odyssey_analytics_data') || { pageViews: [], clicks: [], formSubmissions: [], sessions: [] });
        }
    };

    /* =========================================
       PUBLIC API — GEOLOCATION
       ========================================= */

    db.saveGeoData = function(data) {
        if (init()) {
            return apiInsert('geo_tracking', data).catch(function(err) {
                console.warn('[Supabase] insert geo error:', err.message);
                lsPush('odyssey_geo_tracking', data, 1000);
            });
        } else {
            lsPush('odyssey_geo_tracking', data, 1000);
            return Promise.resolve();
        }
    };

    db.getGeoData = function() {
        if (init()) {
            return apiSelect('geo_tracking', 'id').then(function(supabaseData) {
                var result = supabaseData || [];
                // Merge with localStorage fallback, deduplicate by timestamp
                var localData = lsGet('odyssey_geo_tracking') || [];
                var timestamps = {};
                result.forEach(function(d) { timestamps[d.timestamp] = true; });
                localData.forEach(function(d) {
                    if (!timestamps[d.timestamp]) result.push(d);
                });
                return result;
            }).catch(function(err) {
                console.warn('[Supabase] getGeoData error:', err.message);
                return lsGet('odyssey_geo_tracking') || [];
            });
        } else {
            return Promise.resolve(lsGet('odyssey_geo_tracking') || []);
        }
    };

    /* =========================================
       EXPOSE CONFIG (for admin to check status)
       ========================================= */
    db.isSupabaseEnabled = function() {
        return CONFIG.ENABLED && CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY;
    };

    db.getConfig = function() {
        return {
            enabled: CONFIG.ENABLED,
            hasUrl: !!CONFIG.SUPABASE_URL,
            hasKey: !!CONFIG.SUPABASE_ANON_KEY,
            ready: isReady
        };
    };

    console.log('[Supabase] Data layer loaded (enabled: ' + CONFIG.ENABLED + ')');
})();
