// // `Написать функцию toMatrix(data, rowSize), которая принимает
// // аргументом массив и число,
// // возвращает новый массив. Число показывает количество элементов
// // в подмассивах,
// // элементы подмассивов беруться из массива data.
// //  Оригинальный массив не должен быть изменен.``Написать
// // функцию createCachable(func),
// // принимающую аргументом функцию. createCachable(func)
// // возвращает новую функцию, которая возвращает результат вызова func и запоминает его,
// //  или возвращает уже запомненный результат для текущего аргумента.
// //   Функция func может иметь только один аргумент. createCachable(func)
// //  может создавать какое угодно количество кешированных версий функций.`;
//
// /** callback* */
//
// const cities = ['Tokyo', 'London', 'Boston', 'Berlin', 'Chicago', 'New York'];
// // cities.forEach((city) => {
// //   console.log(city);
// // });
//
//
// // function callback(city) {
// //   console.log(city);
// // }
// // cities.forEach(callback);
//
// // function repositionElement() {
// //   console.log('repositioning!');
// // }
// //
// // window.requestAnimationFrame(repositionElement);
// // console.log('I am the last line of the script');
//
// // const start = new Date();
// // let i=0;
// // const intervalId = setInterval(function() {
// //   let now = new Date();
// //   if(now.getMinutes() !== start.getMinutes() || ++i>10) {
// //     return clearInterval(intervalId);
// //   }
// //   console.log(`${i}: ${now}`);
// // }, 5*1000);
//
//
// // const fs = require('fs');
//
// // const fname = 'lesson-7/a.txt';
// // fs.readFile(fname, (err, data) => {
// //   if (err) {
// //     return console.error(`error reading file ${fname}: ${err.message}`);
// //   }
// //   return console.log(`${fname} contents: ${data}`);
// // });
//
// // const fs = require('fs');
// //
// // fs.readFile('lesson-7/a.txt', function(err, dataA) {
// //   if(err) {
// //     console.error(err);
// //   }
// //   console.log(dataA.toString())
// //   fs.readFile('b.txt', function(err, dataB) {
// //     if(err) console.error(err);
// //     fs.readFile('c.txt', function(err, dataC) {
// //       if(err) console.error(err);
// //       setTimeout(function() {
// //         fs.writeFile('d.txt', dataA+dataB+dataC, function(err) {
// //           if(err) console.error(err);
// //         });
// //       }, 60*1000);
// //     });
// //   });
// // });
//
// // var fs = require('fs');
// // var timestamp = new Date().toString();
// // var contents;
// // fs.writeFileSync('date.txt', timestamp);
// // contents = fs.readFileSync('date.txt');
// // console.log('Checking the contents'); // 1
// // console.assert(contents == timestamp); // 2
// // console.log('I am the last line of the script'); // 3
//
// // var fs = require('fs');
// // var timestamp = new Date().toString();
// // fs.writeFile('date.txt', timestamp, function (err) {
// //   if (err) throw err;
// //   fs.readFile('date.txt', function (err, contents) {
// //     if (err) throw err;
// //     console.log('Checking the contents'); // 2
// //     console.assert(contents == timestamp); // 3
// //   });
// // });
// // console.log('I am the last line of the script');
//
// /** Promise* */
//
// // function countdown(seconds) {
// //   return new Promise((resolve) => {
// //     for (let i = seconds; i >= 0; i -= 1) {
// //       setTimeout(() => {
// //         if (i > 0) {
// //           console.log(`${i}...`);
// //         } else {
// //           resolve(console.log('GO!'));
// //         }
// //       }, (seconds - i) * 1000);
// //     }
// //   });
// // }
//
//
// // function countdown(seconds) {
// //   return new Promise(function(resolve, reject) {
// //     for (let i = seconds; i >= 0; i--) {
// //       setTimeout(function() {
// //         if (i === 13) {
// //           return reject(new Error('DEFINITELY NOT COUNTING THAT'));
// //         }
// //         if (i > 0) {
// //           console.log(i + '...');
// //         } else {
// //           resolve(console.log('GO!'));
// //         }
// //       }, (seconds - i) * 1000);
// //     }
// //   });
// // }
// //
// // countdown(14)
// //   .then(
// //     () => {
// //       console.log('countdown completed successfully');
// //     },
// //     (err) => {
// //       console.log(`countdown experienced an error:  ${err.message}`);
// //     },
// //   )
// //   .then();
//
//
// // loadImage('shadowfacts.png',
// //   function onsuccess(img) {
// //     // Add the image to the current web page
// //     document.body.appendChild(img);
// //   },
// //   function onerror(e) {
// //     console.log('Error occurred while loading image');
// //     console.log(e);
// //   }
// // );
// // function loadImage(url, success, error) {
// //   var img = new Image();
// //   img.src = url;
// //   img.onload = function () {
// //     success(img);
// //   };
// //   img.onerror = function (e) {
// //     error(e);
// //   };
// // }
//
// // Promise.resolve('ta-da!').then(
// //   function step2(result) {
// //     console.log('Step 2 received ' + result);
// //     return 'Greetings from step 2'; // Explicit return value
// //   }
// // ).then(
// //   function step3(result) {
// //     console.log('Step 3 received ' + result); // No explicit return value
// //   }
// // ).then(
// //   function step4(result) {
// //     console.log('Step 4 received ' + result);
// //     return Promise.resolve('fulfilled value'); // Return a promise
// //   }
// // ).then(
// //   function step5(result) {
// //     console.log('Step 5 received ' + result);
// //   }
// // );
//
//
// /** Generator* */
// const fs = require('fs');
//
// function nfcall(f, ...args) {
//   return new Promise((resolve, reject) => {
//     f.call(null, ...args, (err, ...args) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(args.length < 2 ? args[0] : args);
//     });
//   });
// }
//
// //
// function ptimeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }
//
// //
// function grun(g) {
//   const it = g();
//   (function iterate(val) {
//     const x = it.next(val);
//     if (!x.done) {
//       if (x.value instanceof Promise) {
//         x.value.then(iterate)
//           .catch(err => it.throw(err));
//       } else {
//         setTimeout(iterate, 0, x.value);
//       }
//     }
//   }());
// }
//
// //
// function* theFutureIsNow() {
//   const dataA = yield nfcall(fs.readFile, 'lesson-7/a.txt');
//   console.log(dataA);
//   const dataB = yield nfcall(fs.readFile, 'lesson-7/b.txt');
//   console.log(dataB);
//   const dataC = yield nfcall(fs.readFile, 'lesson-7/c.txt');
//   console.log(dataC);
//   yield ptimeout(6 * 1000);
//   yield nfcall(fs.writeFile, 'lesson-7/d.txt', dataA + dataB + dataC);
// }
//
// //
// grun(theFutureIsNow);
//
//
// /** Async* */
//
//
// // const fs = require('fs');
// // const { promisify } = require('util');
// //
// // const readFileAsync = promisify(fs.readFile);
// // const writeFileAsync = promisify(fs.writeFile);
//
//
// // async function theFutureIsNow() {
// //   try {
// //     const dataA = await readFileAsync('lesson-7/a1.txt');
// //     console.log(dataA.toString());
// //     const dataB = await readFileAsync('lesson-7/b.txt');
// //     console.log(dataB.toString());
// //     const dataC = await readFileAsync('lesson-7/c.txt');
// //     console.log(dataC.toString());
// //     await writeFileAsync('lesson-7/d.txt', dataA + dataB + dataC);
// //   } catch (e) {
// //     console.log(`=>>>> ${e}`);
// //   }
// // }
//
// //
// theFutureIsNow();
