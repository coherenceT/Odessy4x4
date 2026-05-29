// Search functionality
let searchTimeout;

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });
}

function performSearch(query) {
    const searchResults = document.getElementById('search-results');

    const results = products.filter(product => {
        return product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query);
    });

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>No products found for "${query}"</p>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }

    searchResults.innerHTML = results.slice(0, 5).map(product => `
        <div class="search-result-item" onclick="applyFilter('category', '${product.category}')">
            <img src="${product.image}" alt="${product.name}" class="search-result-img" 
                 onerror="this.src='assets/images/placeholder.webp'">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-category">${product.brand.toUpperCase()} | ${formatCategory(product.category)}</div>
            </div>
            <div class="search-result-price">R ${product.price.toLocaleString()}</div>
        </div>
    `).join('');

    searchResults.classList.add('active');
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
});
