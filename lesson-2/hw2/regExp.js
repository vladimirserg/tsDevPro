const emailPattern = /\w+\.?\w+\.?\w+@\w+\.\w{1,4}(\.\w{1,2})?/g;
const phonePattern = /(\+\d{1,3}\s)?\(?\d{3}\)?[-\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}/g;
const twitterNamePattern = /@\w{1,15}/gi;
const urlPattern = /(http[s]?:\/\/)?(w{3}\.)?\w+\.\w{1,4}(\.\w{1,4})?/gi;

const text = `Lorem, ipsum dolor @twitterName sit amet consectetur adipisicing elit. 
Consectetur eius, https://www.regex101.com.ua autem magnam quod ea tempora 
atque quas yuriy.shulga.kh@gmail.com porro!
Repellat vel aliquid assumenda +38 093 579-39.26 
placeat qui consequatur obcaecati pariatur reiciendis exercitationem voluptatibus.`;

console.log(emailPattern.exec(text)[0]); // yuriy.shulga.kh@gmail.com
console.log(phonePattern.exec(text)[0]); // +38 093 579-39.26
console.log(twitterNamePattern.exec(text)[0]); // @twitterName
console.log(urlPattern.exec(text)[0]); // https://www.regex101.com.ua
