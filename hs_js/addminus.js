$(document).ready(function() {
    // Get the quantity input and minus/plus buttons
    var quantityInput = $('.quantity-input');
    var minusBtn = $('.minus-btn');
    var plusBtn = $('.plus-btn');
  
    // Handle minus button click
    minusBtn.click(function() {
      var currentQuantity = parseInt(quantityInput.val());
      if (currentQuantity > 1) {
        quantityInput.val(currentQuantity - 1);
      }
    });
  
    // Handle plus button click
    plusBtn.click(function() {
      var currentQuantity = parseInt(quantityInput.val());
      quantityInput.val(currentQuantity + 1);
    });
  });
  