(() => {
    const getUnique = (...arr) => arr.lenght !== 0 ? Array.from(new Set(arr)) : new Error('Wrong args.');
    
    console.log(getUnique(1, 1, 2, 2, 3, 4, 5, 4));
})();