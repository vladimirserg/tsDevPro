(() => {
    const getUnique = arr => Array.isArray(arr) ? Array.from(new Set(arr)) : false;
    
    const arr = [1, 1, 2, 2, 3, 4, 5, 5, 4];
    console.log(getUnique(arr));
})();