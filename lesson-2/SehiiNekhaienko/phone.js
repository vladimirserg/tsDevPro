function validatePhone(phone) {
  const expression = /^(\()?([0-9]{3})(\))?(\-)?([0-9]{3})(\-)?([0-9]{4})$/;
  return expression.test(phone);
}

console.log(validatePhone('(123)-123-1231')); // true
console.log(validatePhone('2331231234')); // true
console.log(validatePhone('123-123-1231')); // true
console.log(validatePhone('+380(12)3-123-1231')); // false
