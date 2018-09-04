function next(node) {
    let element = document.querySelector(node);
    let nxt = element.nextElementSibling;
    while (nxt === element.TEXT_NODE || nxt === undefined) {
        nxt = element.nextElementSibling;
    }
    return nxt;
}

addEventListener('DOMContentLoaded', function () {
   console.log(next('p'));
});