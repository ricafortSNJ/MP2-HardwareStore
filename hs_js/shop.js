// Javascript to Sort Products on Shop Page

const storedObjects = localStorage.getItem("productsBASE");
const products = JSON.parse(storedObjects);


// const sorter = [
//     {
//         "product_categories": ["Power Drill", "Saws", "Sanders", "Hammers", "Screwdrivers", "Wrenches", "Pliers", "Measuring tools", "Tool Storage", "Workbenches", "Safety equipment"],
//         "product_brands": ["DeWalt", "Milwaukee", "Makita", "Bosch", "Stanley", "Black+Decker", "Craftsman", "Ryobi", "Snap-On"]
//     }
// ];

const sorters = [
    {
        "product_categories": ["Power Drill", "Saws", "Sanders", "Hammers", "Screwdrivers", "Wrenches", "Pliers", "Measuring tools", "Tool Storage", "Workbenches", "Safety equipment"],
        "product_brands": ["DeWalt", "Milwaukee", "Makita", "Bosch", "Stanley", "Black+Decker", "Craftsman", "Ryobi", "Snap-On"]
    }
];

const sorters01 = [
    {
        "product_categories": [],
        "product_brands": []
    }
];

function chooseCat(categoryCurrent) {
    // Check if a string is in the product_categories array
if (sorters01.some(sorter => sorter.product_categories.includes(categoryCurrent))) {
    console.log(categoryCurrent+ ' is in the product_categories array');
    sorters01[0].product_categories = sorters01[0].product_categories.filter(category => category !== categoryCurrent);
    console.log(`Removed ${categoryCurrent} from the product_categories array`);
    console.log("Success");
  }  else {
    // Add the new category to the product_categories array
    sorters01[0].product_categories.push(categoryCurrent);
    console.log(`Added ${categoryCurrent} to the product_categories array`);
    console.log("Added");
  }
  
  //console.log(sorters01);
  reSort02();
    
}

function chooseBrand(brandCurrent) {
// Check if a string is in the product_brands array
if (sorters01.some(sorter => sorter.product_brands.includes(brandCurrent))) {
    console.log(brandCurrent+ ' is in the product_brands array');
    sorters01[0].product_brands = sorters01[0].product_brands.filter(brands => brands !== brandCurrent);
    console.log(`Removed ${brandCurrent} from the product_categories array`);
    console.log("Success");
  }  else {
    // Add the new category to the product_categories array
    sorters01[0].product_brands.push(brandCurrent);
    console.log(`Added ${brandCurrent} to the product_brands array`);
    console.log("Added");
  }

  //console.log(sorters01);
  reSort02();
}

// For Checkbox

function reSort(pCategory) {
    localStorage.setItem("currentCategory", pCategory);
    console.log(localStorage.getItem("currentCategory"));
    window.open("shop.html");
    
}

$(document).ready(function() {
    //let productPrice;
    // Get the content of the div with the ID "myDiv"
    var content = $("#productGallery").html();
    console.log(content);
    $.each(products, function(i, product) {
        // Output the product name and price
        let productName = product.product_name;
        let productBrand = product.product_brand;
        let productCategory = product.product_category;
        let productPrice = product.product_price * 55;
        let productImage = product.product_image;
        let productID = product.product_id;
        let currentCategory = localStorage.getItem("currentCategory");
        if (currentCategory == productCategory) {
            console.log(productName);
            console.log(productBrand);
            console.log(productPrice);
            console.log(productImage);
            console.log("===============");
            content += '<a href="#" class="text-center px-3 m-2 border-rounded prodcard_shadow prodcard_bg" onclick="pageGenerate('+ productID +')" style="width: 210px; font-size: fit-content;">';
            content += '<div>';
            content += '<img src="' + productImage +'" style="width: 180px" class="rounded-top p-3"/>';
            content += '</div>';
            content += '<div class="text-start prodcard">';
            content += '<h6>'+ product.product_name + '</h6>';
            content += '<h6 class="text-muted">' + product.product_brand + '</h6>';
            content += '<h5>⭐⭐⭐☆☆</h5>';
            content += '<div class="col-lg-12 d-flex justify-content-around">';
            content += '<h5>₱' + productPrice.toFixed(2); + '</h5>';
            content += '</div>';
            content += '</div>';
            content += '<div class="m-1">';
            content += '<button type="button" class="btn btn-lg btn-block btn-primary btn-sm add_to_cart prodcard_btn" data-name="'+ product.product_id +'">Add to Cart</button>';
            content += '</div>';
            content += '</a>';
        }
        
    });
    $('#productGallery').html(content);
    
    localStorage.setItem("currentCategory", "");
});  




function reSort02() {
    $(document).ready(function() {
    //let productPrice;
    // Get the content of the div with the ID "myDiv"
    var content = "";
    console.log(content);

    $.each(products, function(i, product) {
        // Output the product name and price
        let productName = product.product_name;
        let productBrand = product.product_brand;
        let productCategory = product.product_category;
        let productPrice = product.product_price * 55;
        let productImage = product.product_image;
        let productID = product.product_id;

        if (sorters01.some(sorter => sorter.product_brands.includes(productBrand))) {
            console.log(productBrand+ ' is in the product_brands array');
            content += '<a href="#" class="text-center px-3 m-2 border-rounded prodcard_shadow prodcard_bg" onclick="pageGenerate('+ productID +')" style="width: 210px; font-size: fit-content;">';
            content += '<div>';
            content += '<img src="' + productImage +'" style="width: 180px" class="rounded-top p-3"/>';
            content += '</div>';
            content += '<div class="text-start prodcard">';
            content += '<h6>'+ product.product_name + '</h6>';
            content += '<h6 class="text-muted">' + product.product_brand + '</h6>';
            content += '<h5>⭐⭐⭐☆☆</h5>';
            content += '<div class="col-lg-12 d-flex justify-content-around">';
            content += '<h5>₱' + productPrice.toFixed(2); + '</h5>';
            content += '</div>';
            content += '</div>';
            content += '<div class="m-1">';
            content += '<button type="button" class="btn btn-lg btn-block btn-primary btn-sm add_to_cart prodcard_btn" data-name="'+product.product_id+'">Add to Cart</button>';
            content += '</div>';
            content += '</a>';         

          }  else if (sorters01.some(sorter => sorter.product_categories.includes(productCategory))) {
              console.log(productCategory+ ' is in the product_categories array');
              content += '<a href="#" class="text-center px-3 m-2 border-rounded prodcard_shadow prodcard_bg" onclick="pageGenerate('+ productID +')" style="width: 210px; font-size: fit-content;">';
              content += '<div>';
              content += '<img src="' + productImage +'" style="width: 180px" class="rounded-top p-3"/>';
              content += '</div>';
              content += '<div class="text-start prodcard">';
              content += '<h6>'+ productName + '</h6>';
              content += '<h6 class="text-muted">' + product.product_brand + '</h6>';
              content += '<h5>⭐⭐⭐☆☆</h5>';
              content += '<div class="col-lg-12 d-flex justify-content-around">';
              content += '<h5>₱' + productPrice.toFixed(2); + '</h5>';
              content += '</div>';
              content += '</div>';
              content += '<div class="m-1">';
              content += '<button type="button" class="btn btn-lg btn-block btn-primary btn-sm add_to_cart prodcard_btn" data-name="'+ product.product_id +'">Add to Cart</button>';
              content += '</div>';
              content += '</a>';         
        
          }
        
          console.log(sorters01);
        
    });
    // Add new content to the existing content
    
    // Update the HTML of the div with the new content
    $('#productGallery').html(content);
});

}

   


//           console.log(sorters01);
//           reSort02();
        
//         console.log(productName + " - " + productBrand);
//         for (j = 0; j < sorters01[0].product_brands.length; j++) {
//             if (sorters[0].product_brands[j] == productBrand) {
//                 // console.log(productName);
//                 // console.log(productBrand);
//                 // console.log(productPrice);
//                 // console.log(productImage);
//                 // console.log("===============");
//                 content += '<a href="#" class="text-center px-3 m-2 border-rounded prodcard_shadow prodcard_bg" onclick="pageGenerate('+ productID +')" style="width: 210px; font-size: fit-content;">';
//                 content += '<div>';
//                 content += '<img src="' + productImage +'" style="width: 180px" class="rounded-top p-3"/>';
//                 content += '</div>';
//                 content += '<div class="text-start prodcard">';
//                 content += '<h6>'+ product.product_name + '</h6>';
//                 content += '<h6 class="text-muted">' + product.product_brand + '</h6>';
//                 content += '<h5>⭐⭐⭐☆☆</h5>';
//                 content += '<div class="col-lg-12 d-flex justify-content-around">';
//                 content += '<h5>₱' + productPrice.toFixed(2); + '</h5>';
//                 content += '</div>';
//                 content += '</div>';
//                 content += '<div class="m-1">';
//                 content += '<button type="button" class="btn btn-lg btn-block btn-primary btn-sm add_to_cart prodcard_btn" data-name="product_1">Add to Cart</button>';
//                 content += '</div>';
//                 content += '</a>';
//             }

//         }
        
//     });
//     // Add new content to the existing content
    
//     // Update the HTML of the div with the new content
//     $('#productGallery').html(content);
// });

// }


$(document).ready(function () {

    const currentCart = [
        {
          name: "product_1",
          price: 19.99
        },
        {
          name: "product_2",
          price: 29.99
        },
        {
          name: "product_3",
          price: 39.99
        }
      ];


    $(".add_to_cart").click(function (x) {
        let productNameID = $(this).data('name');
        var cartContent = $("#offCanvas_table").html();

        $.each(products, function(i, product) {
            // Output the product name and price
            let productName = product.product_name;
            let productPrice = product.product_price * 55;

            if (product.product_id == productNameID) {
                //console.log(productBrand+ ' is in the product_brands array');
                cartContent += '<tr>';
                cartContent += '<td>'+ productName +'</td>';
                cartContent += '<td>₱'+ productPrice.toFixed(2) +'</td>';
                cartContent += '<td>₱'+ productPrice.toFixed(2) +'</td>';
                cartContent += '</tr>';   

            }
            
        });
        // Add new content to the existing content
    
    // Update the HTML of the div with the new content
    $('#offCanvas_table').html(cartContent);

    

    // Function to print to Account Page
    // Function to print to Cart
    });

    
    
    
});

