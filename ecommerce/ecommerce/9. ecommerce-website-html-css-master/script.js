document.addEventListener("DOMContentLoaded", function() {

  const priceRangeInput = document.getElementById('price-range');
  const priceValueSpan = document.getElementById('price-value');
  
  if (priceRangeInput && priceValueSpan) {
    priceRangeInput.addEventListener('input', function() {
      priceValueSpan.textContent = priceRangeInput.value;
      filterProducts();
    });
  }

  function filterProducts() {
    const maxPrice = parseInt(priceRangeInput.value, 10);
    const selectedSize = document.getElementById('size').value;
    const products = document.querySelectorAll('.product-cart');

    products.forEach(product => {
      const productPrice = parseInt(product.getAttribute('data-price'), 10);
      const productSize = product.getAttribute('data-size');

      if ((productPrice <= maxPrice) && (selectedSize === 'all' || productSize === selectedSize)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }

  const sizeSelect = document.getElementById('size');
  if (sizeSelect) {
    sizeSelect.addEventListener('change', function() {
      filterProducts();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
    
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});