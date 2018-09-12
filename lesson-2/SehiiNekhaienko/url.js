function validateUrl(url) {
  const expression = /^(https?)\:\/\/([\w\.]+)([\/\w_\-]+)?$/;
  return expression.test(url);
}


console.log(validateUrl('http://google.com')); // true
console.log(validateUrl('https://developer.mozilla.org')); // true
console.log(validateUrl('https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp')); // true
console.log(validateUrl('123-123-1231')); // false
