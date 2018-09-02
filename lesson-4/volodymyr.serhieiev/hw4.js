/*1 Создайте дерево, которое по клику на заголовок скрывает-показывает детей
Требования:
Использовать делегирование.
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
При наведении на заголовок — он становится жирным, реализовать через CSS.
При двойном клике на заголовке, его текст не должен выделяться.*/
const list = document.querySelector('.list');

list.addEventListener('click', function (e) {
    if (target.nodeName === 'UL') {
        target.classList.remove('d-none');
        // console.log(parent);
    }
});

document.querySelector('li').addEventListener('mouseenter', function (e) {
    let target = e.target;
    if (target.nodeName === 'LI') {
        target.classList.add('bold');
        // console.log(parent);
    }

});

document.querySelector('li').addEventListener('mouseleave', function (e) {
    let target = e.target;
    if (target.nodeName === 'LI' && target.classList.contains('bold')) {
        target.classList.remove('bold');
        // console.log(parent);
    }
});

/* 2 Дан список сообщений. Добавьте каждому сообщению кнопку для его удаления.
Используйте делегирование событий. Один обработчик для всего. */

// console.log(document.button.querySelector('.close'));
// .addEventListener('click', function (e) {
//     let target = e.target;
//     console.log(target);
// });


/* 3 Сделать сортировку таблицы при клике на заголовок.
Требования: Использовать делегирование.Код не должен меняться при увеличении количества столбцов или строк.
 */
const table = document.querySelector('table');

table.addEventListener('click', function (e) {
    let target = e.target;
    if (target.nodeName === 'TH') {
        let asc = 1;
        let key;
        let rows = table.rows;
        let parent = e.target.parentNode;
        console.log(parent.children);

        let k = 0;
        for (let item of parent.children) {
            if(item.innerHTML === target.innerHTML){
                key = k;
            }
            k++;
        }

        for (let i = 1; i < rows.length; i++) {
            for (let j = 1; j < (rows.length - i - 1); j++) {
                console.log(rows[j].getElementsByTagName("TD")[key].innerHTML);
                if (asc) {
                    if (rows[j].getElementsByTagName("TD")[key].innerHTML > rows[j + 1].getElementsByTagName("TD")[key].innerHTML) {
                        console.log(rows[j].parentNode);
                        rows[j].parentNode.insertBefore(rows[j + 1], rows[j]);
                    }
                } else {
                    console.log(rows[j].getElementsByTagName("TD")[key].innerHTML.toLowerCase);
                    if (rows[j].getElementsByTagName("TD")[key].innerHTML < rows[j + 1].getElementsByTagName("TD")[key].innerHTML) {
                        console.log(rows[j].parentNode);
                        rows[j].parentNode.insertAfter(rows[j + 1], rows[j]);
                    }
                }
            }
        }
        asc = 0;
    }
});