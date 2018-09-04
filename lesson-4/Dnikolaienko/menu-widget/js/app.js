
 // document.getElementsByTagName('ul')[0].onclick = function(event) {
    //     let target = event.target;
    //     let li = target.parentNode;
    //     let childrenContainer = li.getElementsByTagName('ul')[0];
    
    
    //     if (!childrenContainer) {
    //         return;
    //     } 
    
    //     if(!childrenContainer.classList.contains('hidden')){
    //         hideList(childrenContainer);
    //     }
    // }

    let list = document.querySelector('.list');

    list.addEventListener('click', (e) => {
        let chldrn = e.target.parentElement.children;
        let children = e.target.parentNode.children;
        
        for (j = 0; j < children.length; j++) {
            console.log(children[j]);
        }

        // for(let i = 1; i<chldrn.length; i++) {
        //     if(chldrn[i].tagName === "LI") {
        //         return;
        //     }
        //     hideList(chldrn[i]);
        // }
    });


function hideList(elem) {
    if(elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    }
    return elem.classList.add('hidden');
}