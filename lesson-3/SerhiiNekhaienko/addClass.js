function addClass(element, className) {
    let node = document.querySelector(element);
    let classListString = node.attributes.getNamedItem('class').value;
    if(classListString !== undefined) {
        let classList = classListString.split(' ');
        if(classList.indexOf(className) < 0) {
            classList.push(className)
        }
        node.setAttribute('class', classList.join(' '))
    }
}


addEventListener('DOMContentLoaded', function () {
    console.log(addClass('.test','text'));
    console.log(addClass('.test','text'));
});