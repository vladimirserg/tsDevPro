/* 1) Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев.
*/
function next(node) {
    const nextNode = document.querySelector(node).nextElementSibling;
    if (nextNode.nodeType !== 3 && nextNode.nodeType !== 8) {
      return nextNode;
    }
    return Error('Node not found!');
  }

// console.log(next('h1'));

/* 2) Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если у элемента уже есть такой. */
function addClass(node, classToAdd) {
  const el = document.querySelector(node);

  if (el.getAttribute('class') === null || el.getAttribute('class') === '') {
    return el.setAttribute('class', classToAdd);
  }

  return el.setAttribute('class', (el.getAttribute('class') + ' ' + classToAdd));
}

// addClass('h2', 'cover-heading');

/* 3) Реализовать функцию removeClass(node, classToRemove). Удаление несуществующего класса не должно приводить к ошибке.
 Если классов несколько, должны быть удалены все. */
function removeClass(node, classToRemove) {
  const el = document.querySelectorAll(node);
  el.forEach((element) => {
    if (element.hasAttribute('class')) {
      let classList = element.getAttribute('class').split(' ');

      if (classList.includes(classToRemove)) {
        classList.forEach((item, index) => {
          if (item === classToRemove) {
            classList.splice(index, 1);
          }
        });

        if(classList.length > 0) {
          element.setAttribute('class', classList.join(' '));
        } else {
          element.removeAttribute('class');
        }
      }
    }
  });
}

// removeClass('div', 'inner');

/* 4)Реализовать функцию hasClass(node, classToCheck), которая вернет true, если у node есть класс classToCheck */
function hasClass(node, classToCheck) {
  return document.querySelector(node).hasAttribute('class', classToCheck);
}

// console.log(hasClass('ul', 'inner'), hasClass('h2', 'cover-heading'));

/* 5)Реализовать функцию closest(node, testFunc), которая вернет первого родителя,
 для которого testFunc вернет true. В testFunc получает аргументом DOM узел. Сам DOM узел node тоже проверять.
  Если ни один из родителей не подошел, функция возвращает null */
function closest(node, testFunc) {
  const elem = document.querySelector(node).parentElement;

  function testFunc(node) {
      return (node.nodeType !== node.TEXT_NODE);
  }
  
  let node = document.querySelector(element);
  while(testFunc(node.parentElement) === false || node === undefined) {
      node = node.parentElement;
  }
  return null;
}

 // console.log(closest('ul'), closest('h2'));

/* 6)Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя.
 Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив.
  Может содержать как элементы (текст), так и массивы элементов. Вложенность - любая.
 */
function createList(listData, listContainer = 'ul', itemContainer = 'li') {
  if (listData.lenght === 0) {
    return false;
  }
  return addList(listData, listContainer, itemContainer);
}

function addList(listData, listContainer = 'ul', itemContainer = 'li') {
  const list = document.createElement(listContainer);
  listData.forEach((elem) => {
    if (Array.isArray(elem)) {
      let li = list.appendChild(document.createElement(itemContainer));
      li.appendChild(createList(elem, listContainer, itemContainer));
    } else {
      list.appendChild(document.createElement(itemContainer)).textContent = elem;
    }
  });

  return list;
}

// console.log(createList(['text', [1, 2, 3, 4, ['test', 'lorem', 'ipsum']]]));
