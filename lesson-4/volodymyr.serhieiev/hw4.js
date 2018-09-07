/* 1 Создайте дерево, которое по клику на заголовок скрывает-показывает детей. Требования:
Использовать делегирование.
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
При наведении на заголовок — он становится жирным, реализовать через CSS.
При двойном клике на заголовке, его текст не должен выделяться. */

const list = document.querySelector('.list');
list.addEventListener('click', (e) => {
  const target = e.target;
  const el = target.parentNode;
  if (el.nextElementSibling !== null && el.nextElementSibling.nodeName === 'UL') {
    if (el.nextElementSibling.classList.contains('d-none')) {
      el.nextElementSibling.classList.remove('d-none');
    } else {
      el.nextElementSibling.classList.add('d-none');
    }
  }
});

/* 2 Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего. */

/* add button to comment */
// document.querySelector('.comments').addEventListener('click', (e) => {
//   const target = e.target;
//   const btn = document.createElement('button');
//   btn.textContent = 'x';
//   btn.classList.add('close', 'justify-content-end');
//   if (target.classList.contains('comment') && target.childNodes[1].childNodes[5] == null) {
//     target.childNodes[1].appendChild(btn);
//   }
// });

/* hide/remove block */
const commentsList = document.querySelector('.comments');
commentsList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('close')) {
    /* hide */
    target.parentNode.parentNode.classList.add('d-none');
    /* remove */
    /* commentsList.removeChild(target.parentNode.parentNode); */
  }
});


/* 3 Сделать сортировку таблицы при клике на заголовок.
Требования: Использовать делегирование.Код не должен меняться при увеличении количества столбцов или строк.
 */
const thead = document.querySelector('thead');
thead.addEventListener('click', (e) => {
  const target = e.target;
  if (target.nodeName === 'TH') {
    const columnIndex = target.cellIndex;
    const tbody = target.parentNode.parentNode.parentNode.childNodes[3];
    const rows = Array.prototype.slice.call(tbody.rows);

    if (target.classList.contains('number')) {
      rows.sort((a, b) => b.cells[columnIndex].innerHTML - a.cells[columnIndex].innerHTML);
    } else {
      rows.sort((a, b) => a.cells[columnIndex].innerHTML.toLowerCase() > b.cells[columnIndex].innerHTML.toLowerCase());
    }

    for (let i = 0; i < rows.length; i++) {
      tbody.appendChild(rows[i]);
    }
  }
});
