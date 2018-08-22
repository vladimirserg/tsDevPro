// Task 1
function isInArray() {
    let check = arguments[0];
    let arg = [];
    for (a = 1; a < arguments.length; a++) {
            if(check.indexOf(arguments[a]) === -1) {
                arg.push(arguments[a]);
            }
    }

    if(arg.length == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isInArray([3,7,8],3,7,8));

// Task 2
function summator() {
    let zero = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(isNaN(arguments)) {
            zero += Number(arguments[i]);
        } else {
            zero += arguments[i];
        }
    }
    return zero;
}

console.log(summator(4,5,8,9));

// Task 3
function getUnique() {
    let uniq = [];
    for (j = 0; j < arguments.length; j++) {
        uniq.push(arguments[j]);
    }

    return new Set(uniq);
}

console.log(getUnique(4,5,6,6,4,2,1));

// Task 4
function converting() {
    
}