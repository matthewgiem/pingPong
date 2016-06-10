$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#number').val());
    console.log(userInput);
    pingPong(userInput);
    // $('#result').text("<li>" + pingPong() "</li>");
  });
});
var pingPong = function(number) {
  var array=[];
  for (var i = 1; i <= number; i++) {
    array.push(i)
  }
  console.log(array);

}
