(() => {
    const list = createList(['Животные', 
                                ['Млекопитающие', 
                                    ['Коровы', 'Ослы', 'Собаки', 'Тигры']
                                ],
                                ['Другие',
                                    ['Змеи', 'Птицы', 'Ящерицы']
                                ],
                             'Рыбы',
                                ['Аквариумные'],
                                ['Мoрские',
                                    ['Морская форель', 'Рыба-Кит']
                                ]
                            ]);
    console.log(list);
    document.querySelector('menu').appendChild(list);

    const hideElem = elem => {
        if(elem.classList.contains('hidden')) {
            elem.classList.remove('hidden');
            return elem;
        }
        return elem.classList.add('hidden');
    }



    list.addEventListener('click', (e) => {
        let chldrn = [...e.target.parentElement.children];
        let child, targIndex = chldrn.indexOf(e.target);

        for(let i = targIndex+1; i<chldrn.length; i++) {
            child = chldrn[i];
            if(child.tagName === "LI") {
                return;
            }
            hideElem(child);
        }
    });

})();