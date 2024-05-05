/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let arr = [0, 1, 2, 3, 4, 5];
let len = arr.length;
let i = 0;
let result = [];

for (i = 0; i <= len - 1; i++) {
    result.push(arr[i]);
}


//export result
module.exports = result;