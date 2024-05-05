/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let arr = [7,5,3,1];
let len = arr.length;
let i = 0;


for (i = 0; i <= len - 1; i++) {
    result.push(arr[i]);
}

//export result
module.exports = result;