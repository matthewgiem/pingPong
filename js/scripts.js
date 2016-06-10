$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('input#number').val());
    pingPong(userInput);
    for (var i = 0; i < userInput; i++) {
      $('#result').append("<li>" + array[i] + "</li>");
    }
  });
});
var array=[];
var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      array.push("pingpong");
    }
    else if (i % 3 === 0) {
      array.push("ping");
    }
    else if (i % 5 === 0) {
      array.push("pong");
    }
    else {
      array.push(i)
    }
  }
  return array;
}
