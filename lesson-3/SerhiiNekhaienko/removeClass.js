function removeClass(element, classToRemove) {
    let node = document.querySelector(element);
    let classListString = node.attributes.getNamedItem('class').value;
    if(!Array.isArray(classToRemove)) {
        classToRemove = [classToRemove];
    }

    if(classListString !== undefined) {
        let classList = classListString.split(' ');
        classToRemove.forEach(function (index, className) {
            let arrayIndex = classList.indexOf(className);
            if(arrayIndex < 0) {
                classList.splice(arrayIndex, 1);
            }
        })
        node.setAttribute('class', classList.join(' '))
    }
}


addEventListener('DOMContentLoaded', function () {
    console.log(removeClass('.test','text'));
    console.log(removeClass('.test',['text','trololosha','classNameFull']));
});