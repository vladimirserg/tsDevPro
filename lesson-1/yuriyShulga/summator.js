(() => {
    const allStrings = args => args.every(arg => typeof arg === 'string');
    const allNumbers = args => args.every(arg => !Number.isNaN(parseInt(arg)));
    const reducer = (acum, nextVal) => acum + nextVal;
    const getSum = args => args.reduce(reducer);
    const summator = (...args) => allStrings(args) || allNumbers(args) ? getSum(args) : false;

    console.log(summator(2, 2, 1)); // 5
    console.log(summator('3', '8', ' ', 'parrots')); //38 parrots
})();