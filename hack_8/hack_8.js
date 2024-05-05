/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let len = arr.length - 2;
let result = [];

for (let i = 0; i < len ;i++) {
    result.push(arr[1].replace("a","@"), arr[2].replace("a","@"), arr[3].toUpperCase())
    if (result.length = 3) {
        break
    }
}

//export result
module.exports = result;