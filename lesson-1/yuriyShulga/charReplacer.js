(() => {
    const charReplacer = text => {
        const words = text.trim().split(/\s/);
        let _symbols, _letters, charSet, res = [];

        for(let word of words) {
            
            charSet = word.split('');
            _letters = [];
            _symbols = {};

            charSet.forEach((elem, index) => {
                if(/[a-zA-Z]/.test(elem)) {
                    _letters.push(elem);
                } else {
                    _symbols[index] = elem;
                }
            });

            _letters = _letters.reverse();

            for (let index in _symbols) {
                _letters.splice(index, 0, _symbols[index]);
            }
            
            res.push(_letters.join(''));
        }

        return res.join(' ');
    }
    
    let replaced = charReplacer('s1ta$%r3t 2 hel^low');
    console.log(replaced);    // t1ra$%t3s 2 wol^leh
})();