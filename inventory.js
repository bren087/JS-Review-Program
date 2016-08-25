console.log("Inventory.js is sourced");
//end handshake
//global vars
var inventory = [];
var selectedColor = 'none';
var selectedSize = 'none';
var selectedName = 'none';


var addItem = function(color, name, size){
  console.log( 'adding item: ' +name + ' ' + color + ' '+ size);
  var newItem = {
    color: color,
    name: name,
    size: size,
  };
  inventory.push(newItem);
}; //end addItem

var searchInventory= function(){
  console.log('In searchInventory');
  // get size from user
  selectedSize = document.getElementById('sizeIn').value;
  //get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  console.log( 'looking for something ' + selectedColor + " and " + selectedSize);
  // check if item fits description
  for( var i =0; i<inventory.length; i++){
    if(inventory[i].size.toUpperCase() == selectedSize.toUpperCase() && inventory[i].color.toUpperCase() == selectedColor.toUpperCase()){
      console.log( "You want the", inventory[i].name);
    }
}
};  //end searchInventory

var searchColor = function(){
console.log('in searchColor');
selectedColor = document.getElementById( 'colorIn' ).value;
var results = [];
for ( var i =0; i<inventory.length; i++ ) {
  if( inventory[ i ].color.toUpperCase() == selectedColor.toUpperCase()) {
    results.push(inventory[ i ] );
  }
}
  console.log( "We have "+ results.length + " items that are " + selectedColor +".");
};//end searchColor

var searchSize = function(){
console.log('in searchSize');
selectedSize = document.getElementById( 'sizeIn' ).value;
var results = [];
for ( var i =0; i<inventory.length; i++ ) {
  if( inventory[ i ].size.toUpperCase() == selectedSize.toUpperCase()) {
    results.push(inventory[ i ] );
  }
}
  console.log( "We have "+ results.length + " items that are " + selectedSize +".");
};//end searchSize

var searchName = function(){
console.log('in searchName');
selectedName = document.getElementById( 'nameIn' ).value;
var results = [];
for ( var i =0; i<inventory.length; i++ ) {
  if( inventory[ i ].name.toUpperCase() == selectedName.toUpperCase()) {
    results.push(inventory[ i ] );
  }
}
  console.log( "We have "+ results.length + "  " + selectedName +".");
};//end searchName

var userItem = function () {
console.log("inside the userItem");
var userColor = document.getElementById('colorInput').value;
var sel = document.getElementById('colorIn');
var opt = document.createElement('option');
opt.innerHTML = userColor;
sel.appendChild(opt);
//end color
var userName = document.getElementById("nameInput").value;
 sel = document.getElementById('nameIn');
 opt = document.createElement('option');
opt.innerHTML = userName;
sel.appendChild(opt);
//end name
var userSize = document.getElementById('sizeInput').value;
 sel = document.getElementById('sizeIn');
 opt = document.createElement('option');
opt.innerHTML = userSize;
sel.appendChild(opt);
addItem( userColor, userName , userSize);
console.log(inventory);
  };// end submitItem

// addItem section
addItem( 'blue', 'Smurf', 'Small' );
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem('bus seat green', 'Baby Banner', 'Medium');
addItem('purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');
