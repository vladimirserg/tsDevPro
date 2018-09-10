function validateFullName(phone) {
    let expression = /^([\w\-]+) ([\w\- ]+)$/;
    return expression.test(phone);
}

console.log(validateFullName('(123)-123-1231')); // false
console.log(validateFullName('Vasua Petrov')); // true
console.log(validateFullName('Vasua')); // false
console.log(validateFullName('Igor Ibn Rashid')); //true
