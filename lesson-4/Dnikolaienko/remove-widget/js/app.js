let main = document.getElementById('main-container');

main.addEventListener('click', (event) => {
    if (!event.target.classList.contains('remove-btn')) { 
        return;
    }

    event.target.parentNode.hidden = !event.target.parentNode.hidden;
});