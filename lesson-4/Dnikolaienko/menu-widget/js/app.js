document.getElementsByTagName('ul')[0].onclick = function(event) {
    let target = event.target;
    let li = target.parentNode;
    let childrenContainer = li.getElementsByTagName('ul')[0];


    if (!childrenContainer) {
        return;
    } 

    hideList(childrenContainer);
}

function hideList(elem) {
    if(elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    }
    return elem.classList.add('hidden');
}