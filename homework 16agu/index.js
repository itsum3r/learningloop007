"use strict";
//MAKE A PROGRAMME THAT IS DIVISIBLE BY FIVE AND COLLECT THEM WITH THE ....
let sum = 2;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0)
        sum = sum + 1;
}
console.log(sum);
