function testReg(reg, str) {
  let answer; // инициализируем ответ
  if (reg.test(str)) { // проверяем входящую строку, на соответсвие входящему рег. выражению
    answer = 'подходит под';
  } else {
    answer = 'не подходит под';
  }
  console.log(`${str} ${answer} ${reg.source}`);
}

// Telephone
const phoneReg = /\(?\d{3}\)?-?\d{3}-?\d{4}/g; // рег. выражение для телефона
const phoneStr = '(123)-222-2222';
testReg(phoneReg, phoneStr);

// URL
const domainReg = /^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,3})+$/i; // рег. выражение для домена
const domain = 'https://thesaurus.net';
testReg(domainReg, domain);

// Twitter or Telegram
const nickNameReg = /^@?(\w+)$/; // рег.выражение для пользователя телеграма или твитера
const nickName = '@Dimas2908';
testReg(nickNameReg, nickName);

// Email
const emailReg = /[^\s@]+@[^\s@.]+\.[^\s@]+/; // рег. выражение для электронной почты
const email = 'yodimec2908@mail.com.ua';
testReg(emailReg, email);

// Name Lastname
const personReg = /^(\S+) (\S*) ?\b(\S+)$/; // рег. выражение для персональных данных
const personData = 'Nikolaienko Dmytro Mykolayovich';
testReg(personReg, personData);
