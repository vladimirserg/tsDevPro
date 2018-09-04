(() => {
    const isInArr = (arr, ...args) => {

        if(!Array.isArray(arr) || args.length === 0) {
            throw new Error('Wrong arguments');
        }
    
        return args.every(arg => arr.includes(arg));
    }

    console.log(isInArr([1,2,3,5], 1, 2));
})();