function testReg(reg, str) {
    let answer;
    if (reg.test(str)) {
      answer = 'подходит под';
    } else {
      answer = 'не подходит под';
    }
    console.log(`${str} ${answer} ${reg.source}`);
}

// Telephone
let phoneReg = /\(?\d{3}\)?-?\d{3}-?\d{4}/g;
let phoneStr = '(123)-222-2222';
testReg(phoneReg, phoneStr);

// URL
let domainReg = /^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,3})+$/i;
let domain = 'https://thesaurus.net';
testReg(domainReg, domain);

// Twitter or Telegram
let nickNameReg = /^@?(\w+)$/;
let nickName = '@Dimas2908';
testReg(nickNameReg, nickName);

// Email
let emailReg = /[^\s@]+@[^\s@.]+\.[^\s@]+/;
let email = 'yodimec2908@mail.com.ua';
testReg(emailReg, email);

// Name Lastname
let personReg = /^(\S+) (\S*) ?\b(\S+)$/;
let personData = 'Nikolaienko Dmytro Mykolayovich';
testReg(personReg, personData);