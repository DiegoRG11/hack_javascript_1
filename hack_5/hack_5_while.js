/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let arr = [7,5,3,1];
let len = arr.length - 1;
let i = 0;

while (i <= len) {
    result.push(arr[i])
    i++;
}

//export result
module.exports = result;