(() => {
    const next = node => {
        let nextElem = node.nextElementSibling;
        if(nextElem === null) {
            return node.parentElement.children[0];
        }
        return nextElem.nodeType === 1 ? nextElem : next(nextElem);
    }

    const addClass = (node, classToAdd) => {
        if(Array.prototype.includes.call(node.classList, classToAdd)) {
            throw new Error(`Class ${classToAdd} is already exists`);
        }
        return node.classList.add(classToAdd);
    }

    const removeClass = (node, ...classesToRemove) => {
        classesToRemove.forEach(toRemove => {
            if(Array.prototype.includes.call(node.classList, toRemove)) {
                node.classList.remove(toRemove);
            }
        });
        
    } 

    const hasClass = (node, classToCheck) => {
        return Array.prototype.includes.call(node.classList, classToCheck);
    }

    const closest = (node, testFunc) => {
        if(node.parentElement === null) return null;

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
            if(typeof elem !== 'string' || !Array.isArray(elem)) {
                throw new Error(`Wrong type of arg: ${elem}`);
            }

            li = document.createElement(itemContainer);
            if(typeof elem === 'string') {
                li.textContent = elem;
            } else {
                li.appendChild(createList(elem));
            } 
        });

        return list;
    }
})();