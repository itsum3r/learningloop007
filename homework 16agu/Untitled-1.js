
1.// To create a function that inserts a value at a specific index in an array, you can use the splice method. Here's an example:


function insertValue(array, index, value) {
  array.splice(index, 0, value);
  return array;
}


2.// For the shopping cart program, you can use an array to store the items. Here are some functions you can create:


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


let conting = 1;
while (conting <= 25) {
  console.log(cont);
  conting++;
}


4. To print the first 10 even numbers using a while loop:


let count = 2;
let numEven = 0;
while (numEven < 10) {
  console.log(count);
  count += 2;
  numEven++;
}


5. To calculate the factorial of a positive integer using a while loop:


function factorial(n) {
  let result = 1;
  let count = 1;
  while (count <= n) {
    result *= count;
    count++;
  }
  return result;
}


6. To remove negative numbers from an array:


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


7. To calculate the sum of numbers in an array using a while loop:

```
function calculateSum(numbers) {
  let sum = 0;
  let index = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }
  re