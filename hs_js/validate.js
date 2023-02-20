


//localStorage.setItem("productsBASE", JSON.stringify(productsBASE));


function validateBulk() {
    // Get the form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var order = document.getElementById("order").value;
  
    // Validate name field
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Validate email field
    if (email == "") {
      //alert("Please enter your email.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate phone number field
    if (phone == "") {
     // alert("Please enter your phone number.");
      return false;
    } else if (!/^\d{11}$/.test(phone)) {
      //alert("Please enter a valid 11-digit phone number.");
      return false;
    }
  
    // Validate order field
    if (order == "") {
      //alert("Please enter your order details.");
      return false;
    }
  
    // If all validations pass, return true to submit the form
    return true;
  }
  
  // Function to submit the form
  function submitBulk() {
    // Perform form validation
    if (validateBulk()) {
      // Replace this code with your own form submission code
      // Here, we just alert the user that the form was submitted successfully
      $('#successModal').modal('show');
      //alert("Form submitted successfully!");
      //console.log("Sucess");
      
      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("order").value = "";
    }
  }

  function closeModal() {
    $('#successModal').modal('hide');
  }



  //Newsletter



  function validateNewsletter() {
    // Get the form input values
    var email = document.getElementById("newsletter").value;
  
    // Validate email field
    if (email == "") {
      //alert("Please enter your email.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // If all validations pass, return true to submit the form
    return true;
  }
  
  // Function to submit the form
  function submitNewsletter() {
    // Perform form validation
    if (validateNewsletter()) {
      // Replace this code with your own form submission code
      // Here, we just alert the user that the form was submitted successfully
      $('#subscribeModal').modal('show');
      //alert("Form submitted successfully!");
      c//onsole.log("Sucess");
      
      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("order").value = "";
    }
  }

  function closeModalSubscribe() {
    $('#subscribeModal').modal('hide');
  }

// Registration Login

$(document).ready(function() {
  $('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });
  
  $('#register-form').submit(function(e) {
    e.preventDefault();
    // Do register logic here
    $('#loginModal').modal('hide');
  });
});


  function registerLogin() {
    
    $('#loginModal').modal('show');

  }

  function closeRegisterModal() {
    $('#successRegister').modal('hide');
  }

  function validateRegister() {
    // Get the form input values
    var name = document.getElementById("register-name").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
  
    // Validate name field
    if (name == "") {
      //alert("Please enter your name.");
      return false;
    }
  
    // Validate email field
    if (email == "") {
      //alert("Please enter your email.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      //alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate phone number field
    if (password == "") {
     // alert("Please enter your phone number.");
      return false;
    }
  
  
    // If all validations pass, return true to submit the form
    return true;
  }
  
  // Function to submit the form
  function submitRegister() {
    // Perform form validation
    if (validateRegister()) {
      // Replace this code with your own form submission code
      // Here, we just alert the user that the form was submitted successfully

      $('#successRegister').modal('show');

      //alert("Form submitted successfully!");
      //console.log("Sucess");
      
      // Clear the form fields
      document.getElementById("regsiter-name").value = "";
      document.getElementById("register-email").value = "";
      document.getElementById("register-password").value = "";
    }
  }