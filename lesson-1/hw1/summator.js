(() => {
    const summator = (...args) => {

        if(args.length === 0) throw new Error('Args are empty!');

        const allStrings = args => args.every(arg => typeof arg === 'string');
        const allNumbers = args => args.every(arg => !Number.isNaN(parseInt(arg)));
        const reducer = (acum, nextVal) => acum + nextVal;
        const getSum = args => args.reduce(reducer);

        return allStrings(args) || allNumbers(args) ? getSum(args) : new Error('Wrong args!');
    }

    console.log(summator(1, 2, 2)); // 5
    console.log(summator('3', '8', ' ', 'parrots')); //38 parrots
})();