(() => {
    const text = '1s1tar3t 2   hell1ow';

    const charRepl = text => {
        const anyWhitespace = /\s+/;
        const char = /[a-zA-Z]/;
        const arr = text.trim().split(anyWhitespace);

        let result = '';
        let first, last, tmp;
        let charSet;

        for(let val of arr) {
            
            charSet = val.split('');
            console.log(charSet);
            for (let i = 0; i < charSet.length; i++) {
                if(char.test(charSet[i])) {
                    first = charSet[i];

                }
            }


        }


    }
    
    charRepl(text);


})();