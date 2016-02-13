var calculate = function(compute){
    var numOne = parseInt(compute.numOne);
    var numTwo = parseInt(compute.numTwo);
    switch(compute.type){
        case 'add':
            return numOne + numTwo;
            break;
        case 'subtract':
            return numOne - numTwo;
            break;
        case 'multiply':
            return numOne * numTwo;
            break;
        case 'divide':
            return numOne / numTwo;
            break;
    }
};

module.exports = calculate;