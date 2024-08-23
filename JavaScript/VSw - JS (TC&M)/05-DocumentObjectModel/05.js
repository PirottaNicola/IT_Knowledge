//ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0]; //get the <ul> element

//ADDING NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li'); //create element
var newTextLast = document.createTextNode('cream'); //create text node
newItemLast.appendChild(newTextLast); //add text node to element
list.appendChild(newItemLast); //add element end of list

//ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li'); //create element
var newTextFirst = document.createTextNode('cake'); //create text node
newItemFirst.appendChild(newTextFirst); //add text node to element
list.insertBefore(newItemFirst, list.firstChild); //add element to list

var listItems = document.getElementsByClassName('hot'); //elements with 'hot' class
//ADD A CLASS OF COOL TO ALL LIST ITEMS
var i; //counter variable
for (let i = 0; i < listItems.length; i++) { //loop through elements
    listItems[i].className = 'cool'; //change class to cool
}

//ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); //h2 element
var headingText = heading.firstChild.nodeValue; //h2 text
var totalItems = listItems.length; //N° of <li> elements
var newHeading = headingText + ' : ' + totalItems; //content
heading.textContent = newHeading; //update h2