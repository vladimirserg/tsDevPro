function isInArray(arr, ...arg) {

    return arr.every(function(elem){
        arr.includes(elem);
    });
}

console.log(isInArray([1, 8, 20, 3, 6, 9], 1,3));