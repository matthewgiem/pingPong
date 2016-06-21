//  front-end Logic
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    $(".toDelete").remove();
    var userInput = parseInt($('input#number').val());
    pingPong(userInput);
    for (var i = 0; i < userInput; i++) {
      $('#result').append("<li style='margin-left: -20px;' class='toDelete'>" + array[i] + "</li>");
    }
  });
});
//  back-end Logic
var pingPong = function(number) {
  array=[];
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
