/** 
*
*
*/

console.log(declaration);
console.log(expression);

console.log(typeof declaration);
console.log(typeof expression);

function declaration(){
    console.log("function declaration");
}

// let give different result
var expression = function(){
    console.log("function Expression");
}

console.log(typeof expression);

// ======================================================

let a = function(x){
    console.log(x);
    x();
};

a(function anon(){
    console.log("Running Anonymous function");
});

function declaration1(){
    return true
}
let expression1 = function(){
    return "variable"
};

console.log(declaration1());
console.log(expression1());