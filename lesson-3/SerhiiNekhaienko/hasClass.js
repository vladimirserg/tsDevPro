function hasClass(element, classToCheck) {
    let node = document.querySelector(element);
    let classListString = node.attributes.getNamedItem('class').value;

    if(classListString !== undefined) {
        let classList = classListString.split(' ');
        return classList.indexOf(classToCheck) >= 0;
    }
    return false;
}


addEventListener('DOMContentLoaded', function () {
    console.log(hasClass('.test','text'));
    console.log(hasClass('.test','c2lassNameFull'));
});