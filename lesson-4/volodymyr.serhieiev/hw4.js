/*1 Создайте дерево, которое по клику на заголовок скрывает-показывает детей
Требования:
Использовать делегирование.
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
При наведении на заголовок — он становится жирным, реализовать через CSS.
При двойном клике на заголовке, его текст не должен выделяться.*/
const list = document.querySelector('.list');

list.addEventListener('click', function (e) {
    let target = e.target;
    console.log(target.parentNode);
    if (target.parentNode.nextSunextSiblingling.nodeName === 'UL') {
        if(target.parentNode.nextSibling.classList.contains('d-none')){
            target.classList.remove('d-none');
        }else{
            target.classList.add('d-none');
        }   
    }
    return;
});

/* 2 Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего. */

/* add button to comment */
// document.querySelector('.comments').addEventListener('click', function (e) {
//     let target = e.target;
//     let btn = document.createElement('button');
//         btn.textContent = 'x';
//         btn.classList.add('close', 'justify-content-end');

//     if(target.classList.contains('comment') && target.childNodes[1].childNodes[5] == null){
//         target.childNodes[1].appendChild(btn);
//     }
// });

/* hide/remove block */
let commentsList = document.querySelector('.comments');
commentsList.addEventListener('click', function (e) {
    let target = e.target;
    console.log(target.parentNode);
    if (target.classList.contains('close')) {
        /* hide */
        target.parentNode.parentNode.classList.add('d-none');
        /* remove */
        //commentsList.removeChild(target.parentNode.parentNode);
    }
});


/* 3 Сделать сортировку таблицы при клике на заголовок.
Требования: Использовать делегирование.Код не должен меняться при увеличении количества столбцов или строк.
 */
const thead = document.querySelector('thead');

thead.addEventListener('click', function (e) {
    let target = e.target;
    if (target.nodeName === 'TH') {
        let columnIndex = target.cellIndex;
        let tbody = target.parentNode.parentNode.parentNode.childNodes[3];
        let rows = Array.prototype.slice.call(tbody.rows);

        if (target.classList.contains('number')) {
            rows.sort(function (a, b) {
                return b.cells[columnIndex].innerHTML - a.cells[columnIndex].innerHTML;
            });
        } else {
            rows.sort(function (a, b) {
                return a.cells[columnIndex].innerHTML.toLowerCase() > b.cells[columnIndex].innerHTML.toLowerCase();
            });
        }

        for (var i = 0; i < rows.length; i++) {
            tbody.appendChild(rows[i]);
        }
    };

    return;
});