/* 1) Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев. */

// let findChild = (function(node) {
//     try {
//     let nextEl = document.querySelector(node).nextElementSibling;
//     if(nextEl != null) {
//         return nextEl.nodeType != 3 || nextEl.nodeType != 8 ? nextEl : findChild(nextEl);
//     } else {
//         throw new Error('Node dont be a empty, or text-element');
//     }
//     } catch(e) {
//         console.log(e);
//     }
// })('#main');

// console.log(findChild);

/* 2) Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если у элемента уже есть такой. */

// let addClass = (node, classToAdd) => {
//     let currEl = document.querySelector(node);

//     if (currEl.classList.contains(classToAdd)) {
//         throw new Error(`Class with same name => ${classToAdd} is already exists`);
//     }

//     currEl.classList.remove(currEl.classList[0]);

//     return currEl.classList.add(classToAdd);
// }

// console.log(addClass('#main', 'myClass'));

/* 3) Реализовать функцию removeClass(node, classToRemove). Удаление несуществующего класса не должно приводить к ошибке. Если классов несколько, должны быть удалены все. */

// let removeClass = (node, ...classToRemove) => {
//     let currEl = document.querySelector(node);

//     for (cclass of classToRemove) {
//         if (currEl.classList.contains(cclass)) {
//             currEl.classList.remove(cclass);
//         } else {
//             throw new Error(`Class with same name => ${cclass} is doesn't exists`);
//         }
//     }
// }

// console.log(removeClass('#main', 'test', 'spice'));

/* 4) Реализовать функцию hasClass(node, classToCheck), которая вернет true, если у node есть класс classToCheck */

// function hasClass(node, findClass) {
//     let el = document.querySelector(node);

//     return el.classList.contains(findClass);
// }

// console.log(hasClass('#main', 'test'));
// console.log(hasClass('span', 'spice'));

/* 5) Реализовать функцию closest(node, testFunc), которая вернет первого родителя, для которого testFunc вернет true. 
    В testFunc получает аргументом DOM узел. Сам DOM узел node тоже проверять. Если ни один из родителей не подошел, функция возвращает null
*/

// let testFunc = (node) => {
//     let el = document.querySelector(node);
//     if (el) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function closest(node) {
//     let el = document.querySelector(node);

//     if (testFunc(node) == true && el != false) {
//         return el.parentElement;
//     } else {
//         return null;
//     }
// }

// console.log(closest('body'));

/* 6) Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. 
Использовать innerHTML нельзя. 
Второй и третий аргументы не обязательные. 
Значения по умолчанию для них - ul и li. listData - массив. 
Может содержать как элементы (текст), так и массивы элементов. 
Вложенность - любая. 
*/

// function createList(listData, listContainer = 'ul', itemContainer = 'li') {

// }

// let arr = [];

// console.log(createList(arr));
