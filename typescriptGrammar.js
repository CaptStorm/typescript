//standard ECMA2015 function 

function addNum (n1, n2, n3){
  var result = n1 + n2 + n3;
  var msg = 'sum is ' + result;
  alert(msg);
}

addNum(3, 5, 5);


// Typescript style 

var num1 = 100;
var num2: number = 90;

function addNumber1 (num1: number, num2: number, num3: number){
  var result = num1 + num2 + num3;
  var sum = "The sum is : " + result;
  console.log(sum);
};
addNumber1(num1, num2, 90)



