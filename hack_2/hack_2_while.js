/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let arr = [1,2,3,4,5];
let len = arr.length - 1;
let i = 0;

while (i <= len) {
    result.push(arr[i])
    i++;
}

//export result
module.exports = result;