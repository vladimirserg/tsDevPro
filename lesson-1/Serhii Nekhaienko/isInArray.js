function isInArray(array, ...list) {
    if (typeof array !== 'object') {
        return false;
    }
    let check = [];
    let Set = {
        list: [],
        has: function (value) {
            for (let item of this.list) {
                if (value === item) {
                    return true;
                }
            }
            return false;
        },
        push: function (value) {
            if (!this.has(value)) {
                this.list.push(value);
            }
        },
        init: function (array) {
            if (typeof array !== 'object') {
                return null;
            }
            for (item of array) {
                this.push(item);
            }
        }
    };

    for (let iterator = 1; iterator < list.length; iterator++) {
        let argument = list[iterator];
        if (typeof argument === 'string' || typeof argument === 'number' || typeof argument === 'boolean') {
            check.push(argument);
        }
    }
    Set.init(array);
    for (item of check) {
        if (!Set.has(item)) {
            return false;
        }
    }
    return true;
};

const list = [0, 2, 3, 4, 5, true, 'Hello', 'World', 'Serhii', {name: 'Serhii', lastName: 'Nekhaienko'}];

console.log(isInArray(list, 0, 2, 3, 'Serhii', true)); // true
console.log(isInArray(true, 0, 2, 3, 'Serhii', true)); // false
console.log(isInArray(true, 0, 2, 3, 'Serhii', 'Nekhaienko')); // false

