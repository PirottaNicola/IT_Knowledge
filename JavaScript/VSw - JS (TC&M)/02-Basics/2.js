//create variables for the welcome message
var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order:';

//concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//create variable to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get the element that has an id of greeting
var el = document.getElementById('greeting');
//replace the content of that element with the personalized welcome message 
el.textContent = welcome;

//get the element that has an id of userSign the update its contents
var elSign = Document.getElementById('userSign');
elSign.textContent = tiles;

//get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//get the element that has an id of shipping then update its contents
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + grandTotal;

//get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;