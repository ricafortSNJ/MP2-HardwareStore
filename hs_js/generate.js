
const storedObjects01 = localStorage.getItem("productsBASE");
const products01 = JSON.parse(storedObjects01);


function pageGenerate(productID) {
  localStorage.setItem("currentProduct", productID);
  console.log(localStorage.getItem("currentProduct"));
  window.open("productpage.html");
  
}


$(document).ready(function() {
  let prodID = localStorage.getItem("currentProduct");
  console.log("Current ID: " +prodID);
  var prodLink = $("#generateLink").html();
  var prodImage = $("#productImage").html();
  var prodName = $("#productName").html();
  var prodBrand = $("#productBrand").html();
  var prodCategory = $("#productCategory").html();
  var prodAvailability = $("#productAvailability").html();
  var prodPrice = $("#productPrice").html();
  var prodDescription = $("#productDescription").html();
  var prodInfo = $("#productInfo").html();
   $.each(products01, function(i, products01) {
    console.log(products01.product_id);
      if (prodID == Number(products01.product_id)) {
        console.log(products01.product_name);
        prodName = products01.product_name;
        prodBrand = products01.product_brand;
        prodCategory = products01.product_category;
        prodAvailability = "In Stock";
        prodPrice = "₱ " + (products01.product_price*55).toFixed(2);
        prodDescription = products01.product_description;
        prodInfo = products01.product_info;
        prodImage = '<img src="' + products01.product_image + '"  class="m-4 img-fluid prodcard_shadow"/>';
        prodLink =  '<h1 class="text-main py-5">Our Product Selections / <a href="shop.html" class="text-main">Shop<a> / ' + products01.product_name; + '</h1>'
      }
    
  });


// Add new content to the existing content

// Update the HTML of the div with the new content
  $('#productName').html(prodName);
  $('#productBrand').html(prodBrand);
  $('#productCategory').html(prodCategory);
  $('#productAvailability').html(prodAvailability);
  $('#productPrice').html(prodPrice);
  $('#productDescription').html(prodDescription);
  $('#productInfo').html(prodInfo);
  $('#productImage').html(prodImage);
  $('#generateLink').html(prodLink);

});



