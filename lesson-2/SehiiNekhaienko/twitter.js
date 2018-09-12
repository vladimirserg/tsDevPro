function validateTwitter(nickname) {
  const expression = /^(\@)?([\w_\.]+)$/;
  return expression.test(nickname);
}


console.log(validateTwitter('http://google.com')); // false
console.log(validateTwitter('h^&')); // false
console.log(validateTwitter('petya')); // true
console.log(validateTwitter('@vasua.pro_2')); // true
console.log(validateTwitter('@vasua.pro_2 petya')); // false
