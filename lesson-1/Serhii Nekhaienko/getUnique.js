function getUnique(...array) {
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

    Set.init(array);
    return Set.list;
}

console.log(getUnique(1, 2, 3, 4, 10, 1, 3, 5)); // 1, 2, 3, 4, 10, 5
console.log(getUnique(1, 2, 3, 4, 1, 3, 5, null )); // 1, 2, 3, 4, 5, null

