// const users =  [
//     {
//         _id: 1,
//         name: 'Igor'
//     },
//     {
//         _id: 2,
//         name: 'Vlad'
//     },
// ]

// const hashUsers = users.reduce((hash, user)=>{
//     hash[user._id] = user;
//     return hash;
// },{})


// console.log(hashUsers);
// function summator(...values) {
//     return values.reduce((sum, value) => {
//         sum += value;
//         return sum;
//     }, 0)
// }
// console.log(summator(1, 2, 3, 4, 5));

// let v = 1

// let a = {b:1};
// let b = new Map();
// let c = new WeakMap();

// b.set(a, 1);
// c.set(a, 'asdasd');

// console.log('1 =>',b.size);
// console.log('1 =>',c.get(a));

// delete a;
// console.log(b.size);
// b.forEach((val,key)=>{
//     console.log(val,key)
// })

//[1,2,3,4,5,6] -> [1,2] , [3,4] ...

// function BufferedArray(arr, bufferSize) {
//     this[Symbol.iterator] = function () {
//         let budderIndex = 0;
//         return {
//             next: () => {
//                 let bufferdArr = new Array(bufferSize)
//                 if (budderIndex >= arr.length) {
//                     return {
//                         done: true
//                     }
//                 }
//                 for (let i = 0; i < bufferSize; i++) {
//                     bufferdArr[i] = arr[budderIndex++]
//                 }
//                 return {
//                     value: bufferdArr,
//                     done: false
//                 }
//             }
//         }
//     }
// }

// for(a of new BufferedArray([1,2,3,4,5,6],2)){
//     console.log(a);
// }
// let a = condition
//     ? true
//     : false

// 'asdaasd'
//     .split('')
//     .forEach((currentEl) => {
//         console.log(currentEl)
//     })
// console.log(typeof 'asdaasd')
// console.log(typeof String('asdaasd'))
// console.log(typeof new String('asdaasd'))

function spanThis(str, ...values) {
    console.log(str, ...values)
    return str.reduce((newStr, value, i) => {
        if (!values[i]) {
            return newStr;
        }
        newStr += `${value}<span>${values[i]}</span>`
        return newStr
    }, '')
}

// let specialValue = "Jon";
// let a = 7;
// let title = spanThis`hi ${specialValue} your number is ${a}`;
// console.log(title)

// let a = new RegExp('s','g');
// let b = /s/g;
// console.log(a.test('aaaa'));
// console.log(b.test('aasa'));
// console.log(a.exec('aaaa'));
// console.log(b.exec('aasa'));
// console.log('aasa'.match(b));

// let specialValue = "Jon";
// let a = 7;
// let title = spanThis`hi ${specialValue} your number is ${a}`;
// let result = title.replace(/Jon/,(s)=>{
//     return `<span>${s}</span>`
// }) 
// console.log(result);

let pattern = /.(ts|tsx)$/
console.log(pattern.test('app-hello.ts'))
console.log(pattern.test('app.tsx'))
console.log(pattern.test('app.js'))