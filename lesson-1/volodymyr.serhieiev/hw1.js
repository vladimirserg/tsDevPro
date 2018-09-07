/* 1 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.
*/
function isInArray(arr, ...args) {
    return args.every(elem => arr.includes(elem));
  }
  
  console.log(isInArray([1, 8, 20, 3, 6, 9], 1, 20, 9));
  
  /* 2
      Написать функцию summator(), которая сумирует переданые ей аргументы.
      Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
  */
  function summator(...args) {
    return args.reduce((prev, curr) => prev + curr);
  }
  
  console.log(summator(1, 8, 20, 3, 6, 9));
  
  /* 3
      Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
      и возвращает массив уникальных элементов. Аргумент не должен изменяться.
      Порядок элементов результирующего массива должен совпадать с порядком,
      в котором они встречаются в оригинальной структуре.
  */
  function getUnique(...args) {
    return [...new Set(args)];
  }
  
  console.log(getUnique(1, 8, 20, 3, 6, 9, 1, 9, 22));
  
  /* 4
  Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
  цифры и специальные символы должны остаться на месте
  s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
  s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^lehs1tar3t 2   low5  ->  t1rat3s 2   wol5
  */
  
  function unfoldLetters(str) {
    const arr = str.split(/\s/);
    const res = [];
  
    for (let i = 0; i < arr.length; i++) {
      const letters = [];
      const reverted = [];
  
      if (/^[a-zA-Z]+$/.test(arr[i])) {
        res.push(arr[i].split('').reverse().join(''));
        continue;
      }
  
      if (/^\d+$/.test(arr[i])) {
        res.push(arr[i]);
        continue;
      }
  
      arr[i].split('').forEach((el) => {
        if (/^[a-zA-Z]+$/.test(el)) {
          letters.push(el);
        }
      });
  
      letters.reverse();
  
      let j = 0;
      arr[i].split('').forEach((val) => {
        if (/^[a-zA-Z]+$/.test(val)) {
          reverted.push(letters[j]);
          j++;
        } else {
          reverted.push(val);
        }
      });
  
      res.push(reverted.join(''));
    }
  
    return res.join(' ');
  }
  
  // console.log(unfoldLetters('s1tar3t 2 hellow'));
  // console.log(unfoldLetters('s1ta$%r3t 2 hel^low'));
  console.log(unfoldLetters('s1tar3t 2   low5'));
  
  function lettersEntry(str) {
    let res = '';
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        counter++;
        res += counter + str[i];
      } else {
        counter = 1;
        res += counter + str[i];
      }
    }
  
    return res;
  }
  
  console.log(lettersEntry('aaabbcdddd'));
  