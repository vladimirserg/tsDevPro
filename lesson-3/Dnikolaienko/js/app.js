/* 1) Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев. */

let findChild = (function(node) {
    try {
    let nextEl = document.querySelector(node).nextElementSibling;
    if(nextEl != null) {
        return nextEl.nodeType != 3 || nextEl.nodeType != 8 ? nextEl : findChild(nextEl);
    } else {
        throw new Error('Node dont be a empty, or text-element');
    }
    } catch(e) {
        console.log(e);
    }
})('#main');

console.log(findChild);

/* 2) Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если у элемента уже есть такой. */

let addClass = (node, classToAdd) => {

}

console.log(addClass('#main', 'myclass'));