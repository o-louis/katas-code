// Short one
function getSum(a,b) {
    let total = 0;
    const min = (a <= b) ? a : b;
    const max = (a <= b) ? b : a;
    for (var i = min; i <= max; i++) total += i;
    return total;
}

// Long one with reduce
function getSum(a,b) {
    let arrayOfNumbers = [];

    const min = (a <= b) ? a : b;
    const max = (a <= b) ? b : a;

    for (var item = min; item <= max; item++) {
        arrayOfNumbers = [...arrayOfNumbers, item];
    }

    const sum = arrayOfNumbers.reduce((total, item) => total + item);
    return sum;
}

/* TEST */
// Test.assertEquals(getSum(0,-1),-1);
// Test.assertEquals(getSum(0,1),1);