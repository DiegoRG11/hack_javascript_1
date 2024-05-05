/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];
let arr = [5,4,3,2,1];
let len = arr.length;
let i = 0;


for (i = 0; i <= len - 1; i++) {
    result.push(arr[i]);
}


//export result
module.exports = result;