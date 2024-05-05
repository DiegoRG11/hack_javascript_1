/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let ls = arr.map((el) =>{
    return result.push(el[0].toUpperCase() + el.substring(1));
})

//export result
module.exports = result;