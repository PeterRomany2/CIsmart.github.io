window.onload = function() {
    const products = Array.from(document.querySelectorAll('#productContainer .pro'));
    const itemsPerPage = 10;
    let currentPage = 1;
    let currentCategory = 'all';

    // Function to parse URL parameters and set the current category
    function getCategoryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('category') || 'all';
    }

    currentCategory = getCategoryFromURL();

    function showProducts(page) {
        const filteredProducts = products.filter(product => 
            currentCategory === 'all' || product.dataset.category === currentCategory
        );
        
        // Calculate the start and end index for the current page
        let startIndex = (page - 1) * itemsPerPage;
        let endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);

        // Hide all products
        products.forEach(product => product.style.display = 'none');

        // Show only the products for the current page
        filteredProducts.slice(startIndex, endIndex).forEach(product => product.style.display = 'block');

        updatePagination(filteredProducts.length);
    }

    function updatePagination(totalProducts) {
        const totalPages = Math.ceil(totalProducts / itemsPerPage);
        const paginationContainer = document.getElementById('pagination');
        
        // Clear previous pagination buttons
        paginationContainer.innerHTML = '';

        // Create pagination buttons
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.onclick = () => changePage(i);
            if (i === currentPage) {
                button.classList.add('active');
            }
            paginationContainer.appendChild(button);
        }
    }

    function changePage(pageNumber) {
        currentPage = pageNumber;
        showProducts(currentPage);
    }

    function filterProducts(category) {
        currentCategory = category;
        currentPage = 1; // Reset to first page when filtering
        showProducts(currentPage);
    }

    // Initial display of products
    showProducts(currentPage);

    // Expose functions to global scope
    window.changePage = changePage;
    window.filterProducts = filterProducts;
};









document.getElementById('whatsappIcon').onclick = function() {
    window.open('https://wa.me/1234567890', '_blank');
};
document.getElementById('telephoneIcon').onclick = function() {
    window.location.href = 'tel:+201234567890';
};
document.getElementById('emailIcon').onclick = function() {
    window.location.href = 'mailto:someone@example.com';
};




document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#navbar a');
    const currentPage = window.location.pathname.split('/').pop(); // Gets the current page filename

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});









