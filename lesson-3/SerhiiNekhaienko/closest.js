function closest(element) {
    function testFunc(node) {
        return (node.nodeType !== node.TEXT_NODE);
    }
    
    let node = document.querySelector(element);
    while(testFunc(node.parentElement) === false || node === undefined) {
        node = node.parentElement;
    }
    return node.parentElement;
}


addEventListener('DOMContentLoaded', function () {
    console.log(closest('.test'));
});