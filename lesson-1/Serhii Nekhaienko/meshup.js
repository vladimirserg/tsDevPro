function meshup(message) {
    let pattern = /[a-zA-Z]/gi;
    let words = message.split(' ');
    let resultWords = [];
    for(let word of words) {
        let position = 0;
        let newWord = '';
        for(let char of word) {
            if(pattern.test(char)) {
                newWord += word[(word.length-1) - position];
            } else {
                newWord += char;
            }
            position++;
        }
        resultWords.push(newWord);
    }
    return resultWords.join(' ');
}

console.log(meshup('s1tar3t 2 hellow'));
console.log(meshup('s1ta$%r3t 2 hel^low'));
console.log(meshup('s1tar3t 2   low5'));