/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let arr = [1, 2, 3, 4, 5];
let len = arr.length;
let i = 0;


for (i = 0; i <= len - 1; i++) {
    result.push(arr[i]);
}

//export result
module.exports = result;