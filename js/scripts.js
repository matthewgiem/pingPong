$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    console.log(userInput);
    $('#result').text();
  });
});
