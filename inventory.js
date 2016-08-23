console.log("Inventory.js is sourced");
//end handshake
//global vars
var inventory = [];
var selectedColor = 'none';
var selectedSize = 'none';


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
    if(inventory[i].size == selectedSize && inventory[i].color == selectedColor){
      console.log( "You want the", inventory[i].name);
    }
}
};  //end searchInventory
addItem( 'blue', 'Smurf', 'Small' );
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem('bus seat green', 'Baby Banner', 'Medium');
addItem('purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');
