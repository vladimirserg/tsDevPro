(() => {
    const isInArr = (arr, ...args) => {

        if(!Array.isArray(arr) || args.length === 0) {
            console.log('Wrong arguments');
            return false;
        }

        let result = args.every(arg => arr.includes(arg));
            
        return result;  
    }

    console.log(isInArr([1,2,3,5], 1, 2));
})();