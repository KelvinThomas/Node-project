// add
function add(a,b){
    return a + b;
}

// substract
function substract(a,b){
    return a - b;
}

//multiply
function multiply(a,b){
    return a * b;
}

//divide
function divide(a,b){
    return a / b;
}

//factorial
function fact(a){
    if(a===0){
        return 1;
    }
    return a * fact(a - 1);
}




// export all the functions
module.exports = {add, substract, multiply, divide, fact};   // dont forget the s in exports.