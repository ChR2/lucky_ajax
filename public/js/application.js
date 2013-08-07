$(document).ready(function () {

  $("form").submit(function(event){
    event.preventDefault();

    $.post("/rolls", function(server_response){
      console.log(server_response);
      $('#die').html(server_response);
    });
  });
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery - x
  //   2- prevent the default action for that event from happening -x
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
