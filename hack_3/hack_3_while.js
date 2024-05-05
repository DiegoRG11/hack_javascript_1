/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let arr = [5,4,3,2,1];
let len = arr.length - 1;
let i = 0;

while (i <= len) {
    result.push(arr[i])
    i++;
}

//export result
module.exports = result;