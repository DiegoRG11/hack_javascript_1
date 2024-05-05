/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];
let arr = [0,1,2,3,4,5];
let len = arr.length - 1;
let i = 0;

while (i <= len) {
    result.push(arr[i])
    i++;
}

//export result
module.exports = result;