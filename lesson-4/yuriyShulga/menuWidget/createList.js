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


