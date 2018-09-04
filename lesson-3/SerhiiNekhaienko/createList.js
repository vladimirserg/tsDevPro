function createList(listData, listContainer = 'ul', itemContainer = 'li') {
    let container = document.createElement(listContainer);
    for(let item of listData) {
        let listItem = document.createElement(itemContainer);
        if(Array.isArray(item)) {
            let list = createList(item);
            listItem.appendChild(list);
        } else {
            listItem.textContent = item;
        }
        container.appendChild(listItem);
    }
    return container;
}


addEventListener('DOMContentLoaded', function () {
    let data = [
        'Serhii',
        'Nekhaienko',
        [
            '06-09-1992',
            '26'
        ]
    ];
    console.log(createList(data));
    // console.log(addClass('.test','text'));
    // console.log(addClass('.test','text'));
});