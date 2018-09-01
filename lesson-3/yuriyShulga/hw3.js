(() => {
    const next = node => {
        let nextElem = node.nextElementSibling;
        if(nextElem === null) {
            return null; 
        }
        return nextElem.nodeType === 1 ? nextElem : next(nextElem);
    }

    const addClass = (node, classToAdd) => {
        if(node.classList.contains(classToAdd)) {
            throw new Error(`Class ${classToAdd} is already exists`); // or just return node;
        }
        return node.classList.add(classToAdd);
    }

    const removeClass = (node, classToRemove) => {
        classToRemove.split(' ').forEach(toRemove => {
            if(node.classList.contains(toRemove)) {
                node.classList.remove(toRemove);
            }
            return node; // for chaining
        });
        
    } 

    const hasClass = (node, classToCheck) => node.classList.contains(classToCheck);

    const closest = (node, testFunc) => {
        if(node.parentElement === null) {
            return null;
        }

        if(!testFunc(node.parentElement)) {
            return closest(node.parentElement, testFunc);
        }

        return node.parentElement;
    }

    const createList = (listData, listContainer='ul', itemContainer='li') => {
        if(!Array.isArray(listData) || listData.length === 0) {
            throw new Error(`Wrong arg: ${listData}`);
        }

        let li, list = document.createElement(listContainer);

        listData.forEach(elem => {
            if(typeof elem !== 'string' && !Array.isArray(elem)) {
                throw new Error(`Wrong type of arg: ${elem}`);
            }

            li = document.createElement(itemContainer);
            if(typeof elem === 'string') {
                li.textContent = elem;
            } else {
                li = createList(elem);
            }
            list.appendChild(li);
        });

        return list;
    }
})();