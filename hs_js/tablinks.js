$(function() {
    // Activate the first tab on load
    $('#myTab a:first').tab('show');

    // Switch tabs on click
    $('#myTab a').on('click', function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });