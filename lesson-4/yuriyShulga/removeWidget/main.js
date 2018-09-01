document.body.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.classList.contains('message')) {
        e.target.classList.add('hidden');
    }
});