"use strict";
//How to Write Varilable
//No Space In the Name 
//Example Giving

var myName:string = "Ahmad";
console.log(myName);

//Dollars And Underscores Are Applicable

var $myName:string = "Ali";
console.log($myName);

//Camel Case

var itIs:string = "bottle";
console.log(itIs);

//Pascal Case

var ItIs2:string = "bottle2";
console.log(ItIs2);

//Template Literals

var $1:string = `meow`;
var $2:string = "bark";
var $3:string = 'hiss';
console.log($1);
console.log($2);
console.log($3);

//if you wanna know the type of variable we use 'typeof'

var _example:string = "tablets";
console.log(typeof _example);

//Operators

  //Arthematic
   
var num1:number = 10; 
var num2:number = 20;
var result:number = num1 + num2;
console.log(result);

//modulus 

var n1:number = 9;
var n2:number= 5;
var result2 = n1 % n2;
console.log(result2);

//Comaparison

var $A:number = 2;
var $B:number = 5;
var $C:number = 7;
var result = $A + $B - $C;

//Assignment 

var n1:number = 10;
var n1:number = n1 + 5.;
console.log(n1);

//Comparison

var $5:number = 2;
var $6:number = 5;
var $7:number = 7;
var $result:number = $5 + $6 - $7 * $5 / $7;
console.log($result);

//Boolean

var output:boolean = 5 == 5 && 2 == 2;
console.log(output);

//If we have to make specific group lines to console then we use boolean  

if (true) {
    console.log("hello");
    console.log("its me ahmad");
    console.log("i am 18");
}
if (false) {
    console.log("i have 3 hacking degrees from udemy");
    console.log("i am noob at talking");
    console.log("i love to cook");
}
// Assignamet finished fr (Khushi ke ansu) ;)  <-----
///online class




///assmigment one one 16agu
1.// To create a function that inserts a value at a specific index in an array, you can use the splice method. Here's an example:

te(index, 0, value);
  return array;
}
https://git-scm.com/downloads
1. To insert a value at a specific index in an array, you can use the `splice` method. Here's an example function:
javascript
function insertValue(arr, index, value) {
  arr.splice(index, 0, value);
  return arr;
}


2. For the shopping cart program, you can create functions to add items, remove items, and update quantities using the `splice` method. Here's a basic example:
javascript
let cart = [];

function addItem(item) {
  cart.push(item);
  console.log("Item added:", item);
  console.log("Cart:", cart);
}

function removeItem(index) {
  let removedItem = cart.splice(index, 1);
  console.log("Item removed:", removedItem);
  console.log("Cart:", cart);
}

function updateQuantity(index, quantity) {
  cart[index] = quantity;
  console.log("Quantity updated:…
Thank you for contacting um20882! Please let us know how we can help you.
1. //To create a function that inserts a value at a specific index in an array, you can use the splice method. Here's an example:


function insertValue(array, index, value) {
  array.splice(index, 0, value);
  return array;
}


2. //For the shopping cart program, you can use an array to store the items. Here are some functions you can create:


let shoppingCart = [];

function addItem(item) {
  shoppingCart.push(item);
  console.log("Item added:", item);
  console.log("Cart contents:", shoppingCart);
}

function removeItem(index) {
  let removedItem = shoppingCart.splice(index, 1);
  console.log("Item removed:", removedItem);
  console.log("Cart contents:", shoppingCart);
}

function updateQuantity(index, newQuantity) {
  shoppingCart[index].quantity = newQuantity;
  console.log("Quantity updated for item at index", index);
  console.log("Cart contents:", shoppingCart);
}


3. //To print the first 25 integers using a while loop:


let count = 1;
while (count <= 25) {
  console.log(count);
  count++;
}


4. //To print the first 10 even numbers using a while loop:


let count = 2;
let numEven = 0;
while (numEven < 10) {
  console.log(count);
  count += 2;
  numEven++;
}


5. //To calculate the factorial of a positive integer using a while loop:


function factorial(n) {
  let result = 1;
  let count = 1;
  while (count <= n) {
    result *= count;
    count++;
  }
  return result;
}


6. //To remove negative numbers from an array:


let numbers = [1, -2, 3, -4, 5];
let positiveNumbers = [];

let index = 0;
while (index < numbers.length) {
  if (numbers[index] >= 0) {
    positiveNumbers.push(numbers[index]);
  }
  index++;
}

console.log("Positive numbers:", positiveNumbers);


7. //To calculate the sum of numbers in an array using a while loop:

```
function calculateSum(numbers) {
  let sum = 0;
  let index = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }
  