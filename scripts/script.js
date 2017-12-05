document.getElementsByClassName('plus')[0].addEventListener('click',
function()  {
  var first_input = +(document.getElementsByClassName('first-number')[0]['value']);
  var second_input = +(document.getElementsByClassName('second-number')[0]['value']);
  var result =  (first_input + second_input);
  var text = document.getElementsByTagName('span')[0];
  console.log(text);
  text.innerHTML = result;
});
document.getElementsByClassName('subtraction')[0].addEventListener('click',
function()  {
  var first_input = +(document.getElementsByClassName('first-number')[0]['value']);
  var second_input = +(document.getElementsByClassName('second-number')[0]['value']);
  var result =  (first_input - second_input);
  var text = document.getElementsByTagName('span')[0];
  console.log(text);
  text.innerHTML = result;
});
document.getElementsByClassName('multiplication')[0].addEventListener('click',
function()  {
  var first_input = +(document.getElementsByClassName('first-number')[0]['value']);
  var second_input = +(document.getElementsByClassName('second-number')[0]['value']);
  var result =  (first_input * second_input);
  var text = document.getElementsByTagName('span')[0];
  console.log(text);
  text.innerHTML = result;
});
document.getElementsByClassName('multiplication')[0].addEventListener('click',
function()  {
  var first_input = +(document.getElementsByClassName('first-number')[0]['value']);
  var second_input = +(document.getElementsByClassName('second-number')[0]['value']);
  var result =  (first_input * second_input);
  var text = document.getElementsByTagName('span')[0];
  console.log(text);
  text.innerHTML = result;
});
document.getElementsByClassName('division')[0].addEventListener('click',
function()  {
  var first_input = +(document.getElementsByClassName('first-number')[0]['value']);
  var second_input = +(document.getElementsByClassName('second-number')[0]['value']);
  var result =  (first_input / second_input);
  var text = document.getElementsByTagName('span')[0];
  console.log(text);
  text.innerHTML = result;
});
