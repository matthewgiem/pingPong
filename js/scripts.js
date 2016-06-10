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
    if (i % 3 === 0) {
      array.push("ping");
    }
    else if (i % 5 === 0) {
      array.push("pong");
    }
    else {
          array.push(i)
    }
  }
  console.log(array);

}
