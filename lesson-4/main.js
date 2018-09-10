/** ** Event Loop *** */
// console.log('start')
// setTimeout(()=>{
//   console.log('timeout 1')
//   Promise.resolve().then(()=>{
//     console.log('additional promise')
//   })
// })
// Promise.resolve().then(()=>{
//   console.log('promise 1')
//   setTimeout(()=>{
//     console.log('timeout 2')
//   })
// })
// Promise.resolve().then(()=>{
//   console.log('promise 2')
// })
// console.log('end')
// console.log('start')
// setTimeout(()=>{
//   console.log('timeout 3')
// })
// Promise.resolve().then(()=>{
//   console.log('promise 3')
//   setTimeout(()=>{
//     console.log('timeout 5')
//   })
// })
// Promise.resolve().then(()=>{
//   console.log('promise 4')
// })
// console.log('end')


/** Add/remove event handler* */
// function log1(e) {
//   console.log('cliked 1')
// }
//
// function log2() {
//   console.log('cliked 2')
// }
// function log3() {
//   console.log('cliked 3')
// }

// const el = document.querySelector('button');
// el.addEventListener('click', log1);
//
// setTimeout(() => {
//   el.addEventListener('click', log2);
//   //el.onclick = log3
// }, 2000)
// setTimeout(() => {
//   el.removeEventListener('click', log1);
// }, 4000)


/** Propagation* */
//
// function logEvent(handlerName, type, cancel,
//   stop, stopImmediate
// ) {
//   // this is the actual event handler
//   return function(evt) {
//     if (cancel) {
//       evt.preventDefault();
//     }
//     if (stop) {
//       evt.stopPropagation();
//     }
//     if (stopImmediate) {
//       evt.stopImmediatePropagation();
//     }
//     console.log(`${type}: ${handlerName} ${evt.defaultPrevented ? ' (canceled)' : ''}`);
//   }
// }
//
// function addEventLogger(elt, type, action) {
//   const capture = type === 'capture';
//   elt.addEventListener('click',
//     logEvent(elt.tagName, type, action==='cancel',
//       action==='stop', action==='stop!'), capture);
// }
// //
// const body = document.querySelector('body');
// const div = document.querySelector('div');
// const button = document.querySelector('button');
// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture');
// addEventLogger(button, 'bubble');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture', 'stop');
// addEventLogger(button, 'bubble');

// addEventLogger(body, 'capture');
// addEventLogger(body, 'bubble');
// addEventLogger(div, 'capture', 'cancel');
// addEventLogger(div, 'bubble');
// addEventLogger(button, 'capture', 'stop!');
// addEventLogger(button, 'bubble');

/** Drag events, Focus events,Form event,Input device
 * events,Media events,Progress events,Touch events */


/** Work with events from code */
// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');
// button1.addEventListener('click3', (e) => {
//   console.log(`clicked button 1 ${e.detail.text}`);
// });
// button2.addEventListener('click', () => {
// old
// const event = document.createEvent('Event');
// event.initEvent('click', true, true);
// button1.dispatchEvent(event);
//
// new
// const event = new Event('click3');
// button1.dispatchEvent(event);
//
// with custom context
//   const event = new CustomEvent('click3', { detail: { text: 'i love JS' } });
//   button1.dispatchEvent(event);
// });
//
// setTimeout(() => {
//   const event = document.createEvent('Event');
//   event.initEvent('click3', true, true);
//   button1.dispatchEvent(event);
// }, 3000);
