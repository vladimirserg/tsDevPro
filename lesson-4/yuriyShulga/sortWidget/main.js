const tbl = document.querySelector('.people');

tbl.addEventListener('click', (e) => {
    if(e.target.tagName !== 'TH') {
        return;
    }

    let rows = [...tbl.children[0].children];
    let {cellIndex} = e.target;
    let thRow = rows.slice(0, 1)[0];
    
    rows = rows.slice(1, rows.lenght).sort((currentRow, nextRow) => {
        let curVal = currentRow.cells[cellIndex].textContent;
        let nextVal = nextRow.cells[cellIndex].textContent;

        if(Number.isNaN(parseInt(curVal))) {
            return curVal > nextVal
        }

       return parseInt(curVal) - parseInt(nextVal);
    });

    let sortedRows = document.createElement('tbody');
    sortedRows.appendChild(thRow);

    for(let i=0; i<rows.length; i++) {
        sortedRows.appendChild(rows[i]);
    }
    
    tbl.insertBefore(sortedRows, tbl.firstChild);
    tbl.removeChild(tbl.lastChild);
});