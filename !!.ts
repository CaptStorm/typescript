var isBald = function (){
  return 'Yes';
}
var hasHair = !!isBald();
console.log(hasHair);
//output true


var isBald = function (){
  return 'Yes';
}
var hasHair = !isBald();
console.log(hasHair);
//output false
