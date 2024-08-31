document.addEventListener("DOMContentLoaded", function() {
  // Update the price range display
  const priceRangeInput = document.getElementById('price-range');
  const priceValueSpan = document.getElementById('price-value');
  
  if (priceRangeInput && priceValueSpan) {
    priceRangeInput.addEventListener('input', function() {
      priceValueSpan.textContent = priceRangeInput.value;
      filterProducts();
    });
  }

  // Function to filter products
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

  // Handle size selection change
  const sizeSelect = document.getElementById('size');
  if (sizeSelect) {
    sizeSelect.addEventListener('change', function() {
      filterProducts();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      // Get the target element's id
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});