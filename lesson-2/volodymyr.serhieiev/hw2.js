/* Регулярку
1)  телефон (123)-123-1231, 2331231234, 123-123-1231
*/
function validatePhone(str) {
    const regex = /(^\(?\d{3}\)?-\d{3}-\d{4}$)|(^\d{10}$)|(^\d{3}-\d{3}-\d{4}$)/;
    return regex.test(str);
  }
  
  console.log(validatePhone('1231231231'), validatePhone('(123)-123-1231'), validatePhone('23u1231234'), validatePhone('123-123-1231'));
  
  /* 2)  url */
  function validateUrl(str) {
    const regex = /^(https?:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regex.test(str);
  }
  
  console.log(validateUrl('https://develper.mozilla.org/en-US/docs/Web/'), validateUrl('http://html5pattern.com/Names'));
  
  /* 3)  twitter name */
  function validateTwitterName(str) {
    const regex = /^@?(\w){1,15}$/;
    return regex.test(str);
  }
  
  console.log(validateTwitterName('@myTwitName'));
  
  
  /* 4) email  */
  function validateEmail(str) {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    return regex.test(str);
  }
  
  console.log(validateEmail('my_mail@gmail.com'));
  
  /* 5) Name Surname (Name Surname SecondName) */
  function validateFullName(str) {
    const regex = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+(\s[A-Z]{1}[a-z]+)?$/;
    return regex.test(str);
  }
  
  console.log(validateFullName('Petrov Vladimir Ivanovich'), validateFullName('Petrov Vladimir'));