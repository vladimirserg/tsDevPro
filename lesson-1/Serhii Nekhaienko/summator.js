function summator(...numbers) {
    let sum = 0;
    for (let iterator = 0; iterator < numbers.length; iterator++) {
        let argument = numbers[iterator];
        if (typeof argument === 'string' || typeof argument === 'number') {
            sum += Number(argument);
        }
    }
    return sum;
};

console.log(summator(1,2,3,4,5,6)); // 21
console.log(summator(1,2,true)); // 3
console.log(summator(1,5,undefined)); // 6
console.log(summator(3,5, {test: 1})); // 8