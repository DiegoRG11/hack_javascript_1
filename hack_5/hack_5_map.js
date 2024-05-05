/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let arr = [7,5,3,1];

let ls = arr.map((el) =>{
    return result.push(el);
})

//export result
module.exports = result;