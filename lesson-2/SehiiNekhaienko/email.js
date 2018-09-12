function validateEmail(mail) {
  const expression = /^([\w\-\_\.]+)\@([\w\-\.\_]+)\.([\w]{1,3})$/;
  return expression.test(mail);
}


console.log(validateEmail('http://google.com')); // false
console.log(validateEmail('h^&')); // false
console.log(validateEmail('petya')); // false
console.log(validateEmail('serhii.nekhaienko@dev-pro.net')); // true
console.log(validateEmail('test@google.com')); // true
console.log(validateEmail('test@i.ua')); // true
