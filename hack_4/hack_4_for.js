/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let arr = [1,3,5,7];
let len = arr.length;
let i = 0;


for (i = 0; i <= len - 1; i++) {
    result.push(arr[i]);
}

//export result
module.exports = result;