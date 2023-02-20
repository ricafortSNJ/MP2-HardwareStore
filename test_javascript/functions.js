// Author: Jonas Ricafort
// Greetings fellow mortal!


var adminUsername;
var adminPassword;
var userName;
var userPass;

$(document).ready(function () {

    $("#login_form").submit(function (x) {
        userName = $("#username").val();
        userPass = $("#password").val();
        changeName();
        if ($("#remember").prop("checked")) {
            localStorage.setItem("username1", userName);
            localStorage.setItem("password1", userPass);
            console.log("Credentials saved to Local Storage");
        }
        console.log("Username: " + userName);
        console.log("Password: " + userPass);
        console.log("===================================");
        x.preventDefault();
    })

    function changeName() {
        let name = userName;
        document.getElementById("customerName1").innerHTML = name;
    }

    $("#order_form").submit(function (x) {
        let name1 = $("#name").val();
        let email1 = $("#email1").val();
        let contactNumber1 = $("#contact-number").val();
        let orderList1 = $("#order-list").val();
        if ($("#sendCopy").prop("checked")) {
            // Code to send message copy to email
            console.log("Bulk Order Copy Sent to User Email");
        }
        console.log("Name: " + name1);
        console.log("Email: " + email1);
        console.log("Contact Number: " + contactNumber1);
        console.log("Order List: " + orderList1);
        console.log("===================================");
        x.preventDefault();
    })

    $("#newsletter").submit(function (x) {
        let email2 = $("#email2").val();
        // Function to send welcome letter to email of user
        console.log("User subscribed to our Newsletter");
        console.log("Email: " + email2);
        console.log("===================================");
        x.preventDefault();
    })

    const products = [
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
        let productName = $(this).data('name');
        let productAmount = 1;
        let productPrice = 0;
        for (let i = 0; i < products.length; i++) {
          if (products[i].name == productName) {
            productPrice = products[i].price;
          }
        }
        let productTotal = productAmount * productPrice;
        console.log("Product Name:" + productName);
        console.log("Product Price: ₱" + productPrice);
        console.log("Product Amount:" + productAmount);
        console.log("Product Total:" + productTotal);
        console.log("===================================");
        x.preventDefault();
    })

    // Function to print to Account Page
    // Function to print to Cart
    
    
})
