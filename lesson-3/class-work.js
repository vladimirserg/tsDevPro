/****Maps ***/
// const u1 = { name: 'Cynthia' };
// const u2 = { name: 'Jackson' };
// const u3 = { name: 'Olive' };
// const u4 = { name: 'James' };
// const userRoles = new Map();
//
// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');
//
// const userRoles = new Map([
//   [u1, 'User'],
//   [u2, 'User'],
//   [u3, 'Admin'],
// ]);
//
// console.log(userRoles.get(u2));
// console.log(userRoles.size);
// for(let u of userRoles.keys()) {
//   console.log(u.name)
// }
//   ;
// for(let r of userRoles.values())
//   console.log(r);
// for(let ur of userRoles.entries()) {
//   console.log(`${ur[0].name}: ${ur[1]}`);
// }
//
// for(let [user, role] of userRoles.entries()){
//   console.log(`${user.name}: ${role}`);
// }
//
//  userRoles.delete(u2);
//  userRoles.size;
// userRoles.clear();
// userRoles.size;

/****Weak Maps ***/
// const SecretHolder = (function() {
//   const secrets = new WeakMap();
//   return class {
//     setSecret(secret) {
//       secrets.set(this, secret);
//     }
//     getSecret() {
//       return secrets.get(this);
//     }
//   }
// })();
// const a = new SecretHolder();
// const b = new SecretHolder();
// a.setSecret('secret A');
// b.setSecret('secret B');
// console.log(a.getSecret()); // "secret A"
// console.log(b.getSecret()); // "secret B"


/****Set ***/
// const roles = new Set();
// roles.add("User");
// roles.add("Admin");
// console.log(roles.size);
// roles.add("User");
// console.log(roles.size);
// roles.delete("Admin");
// console.log(roles);
// roles.delete("Admin");

/****Weak Set ***/

// const naughty = new WeakSet();
// const children = [
//   { name: "Suzy" },
//   { name: "Derek" },
// ];
// naughty.add(children[1]);
// for (let child of children) {
//   if (naughty.has(child)) {
//     console.log(`Coal for ${child.name}!`);
//   } else {
//     console.log(`Presents for ${child.name}!`);
//   }
// }

/****Iterators ***/
// const book = [
//   "Twinkle, twinkle, little bat!",
//   "How I wonder what you're at!",
//   "Up above the world you fly,",
//   "Like a tea tray in the sky.",
//   "Twinkle, twinkle, little bat!",
//   "How I wonder what you're at!",
// ];
// const it = book.values();
// console.log(it.next())
//
// const it = book.values();
// let current = it.next();
// while(!current.done) {
//   console.log(current.value);
//   current = it.next();
// }

/****Iterators protocol***/
// class Log {
//   constructor() {
//     this.messages = [];
//   }
//
//   add(message) {
//     this.messages.push({ message, timestamp: Date.now() });
//   }
//
//   [Symbol.iterator]() {
//     return this.messages.values();
//   }
// }

// class Log {
//   constructor() {
//     this.messages = [];
//   }
//
//   add(message) {
//     this.messages.push({ message, timestamp: Date.now() });
//   }
//
//   [Symbol.iterator]() {
//     let i = 0;
//     const messages = this.messages;
//     return {
//       next() {
//         if (i >= messages.length) {
//           return { value: undefined, done: true };
//         }
//         return { value: messages[i++], done: false };
//       }
//     }
//   }
// }

// const log = new Log();
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");
// for (let entry of log) {
//   console.log(`${entry.message} @ ${entry.timestamp}`);
// }


/***/
// const phoneReg = /\(?\d{3}\)?-?\d{3}-?\d{4}/g;
// console.log(phoneReg.test('(123)-222-2222'));
// console.log(phoneReg.test('123-222-2222'));  // need to check
// console.log(phoneReg.test('1232222222'));
//  const  reg = /^(\S+) (\S*) ?\b(\S+)$/;
//  console.log(reg.test('asda'));
//  console.log(reg.test('asda asdas'));
//  console.log(reg.test('asda asdas asdasda'));
//  console.log(reg.test('asda asdas asd asasd '));
// /[^\s@]+@[^\s@.]+\.[^\s@]+/
// /^@?(\w+)$/
// /^(?:https?:\/\/)?\w+(?:\.\w+)?(?:\.[A-Z]{2,3})+$/i

/***/
// function revertSentence(sentence) {
//   let wordsArr = sentence.replace(/\d*/g, '').split(' ');
//   let revertLettersArr = wordsArr.map((word) => {
//     return word ? word.replace(/\W*/g, '').split('').reverse().join('') : word;
//   }).join('').split('');
//   let j = 0;
//   return Array.prototype.map.call(sentence, (w) => {
//     if (!isNaN(parseInt(w, 10)) || /\W/.test(w)) {
//       return w;
//     }
//     j++;
//     return revertLettersArr[j - 1];
//   }).join('');
// }
// let s1 = 's1tar3t 2 hellow';
// let s2 = 's1ta$%r3t 2 hel^low';
// let s3 = 's1tar3t 2   low5';
// console.log(s1, ' -> ', revertSentence(s1));
// console.log(s2, ' -> ', revertSentence(s2));
// console.log(s3, ' -> ', revertSentence(s3));