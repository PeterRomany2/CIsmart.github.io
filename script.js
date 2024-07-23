window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const products = document.querySelectorAll('.pro');
    
    products.forEach(product => {
        if (category === 'all' || !category || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
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









