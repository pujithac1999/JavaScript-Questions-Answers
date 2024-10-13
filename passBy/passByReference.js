 // In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument.
 // So changing the value inside the function also change the original value.
 
 // * in Passby ref we pass array or object 

 
function PassbyReference(obj) {
    let tmp = obj.a;  // 10
    obj.a = obj.b;  // 20 
    obj.b = tmp;    // 10

    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
    a: 10,
    b: 20
}


console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
