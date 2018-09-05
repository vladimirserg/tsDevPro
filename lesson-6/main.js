// `--> Написать функцию createObject(keys, values),
// которая принимает аргументами 2 массива,
// и возвращает объект, название ключей которого которого - строки из массива keys,
// а значения - значения из массива values. Если ключей меньше, чем значений,
// игнорировать не вмещающиеся значения.
// Если ключей больше, чем значений, установить значения в undefined`
//
// `--> Написать функцию createSummator(initialValue),
// с опциональным первым параметром, который является точкой отчета счетчика.
// Если аргумент initialValue не передан, то отчет начинается с 0.
// При каждом вызове функция возвращает объект с методами inc(num), dec(num), get().
// Объектов, которые возвращает функция createSummator(initialValue),
// может быть любое количество. Реализация должна позволять манипуляции
// со значением счетчика только с использованием этих методов.
// Вызов метода inc(num) увеличивает значение счетчика на значение аргумента num.
// Если метод вызван без аргумента, то значение счетчика увеличивается на 1
// Вызов метода dec(num) уменьшает значение счетчика на значение num,
// если метод вызван с аргументом. Если метод вызван без аргумента,
// то значение счетчика уменьшается на 1
// Вызов метода get() возвращает текущее значение счетчика.`
//
// valid
// valueMissing
// patternMismatch
// rangeUnderflow
// rangeOverflow
// stepMismatch
// tooLong
// typeMismatch
// customError

// window.addEventListener('DOMContentLoaded', ()=> {
//   let validBtn = document.getElementById('validBtn');
//   let overAllBtn = document.getElementById('overallBtn');
//   let form = document.getElementById('nameForm'); // Or document.forms[0]
//   let vDetails = document.getElementById('vDetails');
//   let vResults = document.getElementById('vResults');
//   overAllBtn.addEventListener('click', ()=> {
//     let formValid = form.checkValidity();
//     vResults.innerHTML = 'Is the form valid? ' + formValid;
//   });
//   validBtn.addEventListener('click', ()=> {
//     let output = '';
//     let inputs = form.querySelectorAll('#fields > input');
//     for (let x = 0; x < inputs.length; x++) {
//       let el = inputs[x];
//       console.log(el.validity)
//       output += el.id + ' : ' + el.validity.valid;
//       if (!el.validity.valid) {
//         output += ' [';
//         for (let reason in el.validity) {
//           console.log(reason)
//           if (el.validity[reason]) {
//             output += reason
//           }
//         }
//         output += ']';
//       }
//       output += '<br/>'
//     }
//     vDetails.innerHTML = output;
//   });
// });


// window.addEventListener('DOMContentLoaded', () => {
//   const outputDiv = document.getElementById('vResults');
//   const firstName = document.getElementById('firstName');
//   const submitBtn = document.getElementById('submitBtn');
//   const nameForm = document.getElementById('nameForm');
//   firstName.addEventListener('focus', () => {
//     outputDiv.innerHTML = '';
//   });
//
//   function preventDefaultHandler(evt) {
//     evt.preventDefault();
//   }
//   firstName.addEventListener('invalid', (event) => {
//     outputDiv.innerHTML = 'firstName is invalid';
//   });
//   submitBtn.addEventListener('invalid', (event) => {
//     const formToJSON = elements => [].reduce.call(elements, (data, element) => {
//       data[element.name] = element.value;
//       return data;
//     }, {});
//     console.log(formToJSON(nameForm.elements));
//   });
//   document.getElementById('firstNameBtn')
//     .addEventListener('click', () => {
//       firstName.checkValidity();
//     });
//   document.getElementById('formBtn')
//     .addEventListener('click', () => {
//       console.log();
//       document.getElementById('nameForm')
//         .checkValidity();
//     });
//   document.getElementById('preventBtn')
//     .addEventListener('click', () => {
//       firstName.addEventListener('invalid', preventDefaultHandler);
//     });
//   document.getElementById('restoreBtn')
//     .addEventListener('click', () => {
//       firstName.removeEventListener('invalid', preventDefaultHandler);
//     });
// });
