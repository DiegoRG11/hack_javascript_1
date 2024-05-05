/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let arr = [1,3,5,7];
let len = arr.length - 1;
let i = 0;

while (i <= len) {
    result.push(arr[i])
    i++;
}

//export result
module.exports = result;