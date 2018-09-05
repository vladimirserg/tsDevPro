// const xml = new XMLHttpRequest();
// const url = 'http://localhost:8090/products?price_gte=300&age=32';
// xml.open('GET', url, true);
// //
// //xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// xml.setRequestHeader('My-header', '1231asdasd1231');
// //
// xml.onreadystatechange = () => {//Call a function when the state changes.
//   if(xml.readyState === 4 && xml.status === 200) {
//     console.log(JSON.parse(xml.responseText));
//   }
// }
// xml.send();
// // const formDataObj= new FormData();
// //append name/values to be sent to the server
// formDataObj.append('first', 'Yakko');
// formDataObj.append('second', 'Wakko');
// formDataObj.append('third', 'Dot');
//
// const http = new XMLHttpRequest();
// const url = 'http://localhost:8090/test';
const params = 'orem=ipsum&name=binny';
// http.open('POST', url);
// //
// //http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// // http.setRequestHeader('Custom-header', 'hi');
// //
// http.onreadystatechange = () => {//Call a function when the state changes.
//   if (http.readyState == 4 && http.status == 200) {
//     console.log(http.responseText);
//   }
// }
// http.send(params);

fetch('http://localhost:8090/test', {
  method: 'POST',
  body: params,
  headers: { 'Content-type': 'application/x-www-form-urlencoded' },
})
  .then(res => res.json())
  .then(data => console.log(data));
// fetch('http://localhost:8090/products', {
//   method: 'GET',
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data)=>console.log(data))

// const request = new XMLHttpRequest();
// request.open('GET', 'https://picsum.photos/200/300', true);
// request.responseType = 'blob';
// request.addEventListener('load', downloadFinished, false);
// request.addEventListener('loadstart', onLoadStart, false);
// request.addEventListener('progress', onProgress, false);
// request.addEventListener('load', onLoad, false);
// request.addEventListener('error', onError, false);
// request.addEventListener('abort', onAbort, false);
//
//
//
// function downloadFinished(evt) {
//   console.log(evt)
//   //console.log(request)
//   if (this.status !== 200) {
//     return;
//   }
//   const blob = new Blob([this.response], { type: 'img/png' });
//   console.log(blob)
//   const canvas = document.querySelector('canvas');
//   const ctx = canvas.getContext('2d');
//   const  img = new Image();
//   img.onload = ()=>{
//     canvas.width = img.width;
//     canvas.height = img.height;
//     ctx.drawImage(img, 0, 0)
//   };
//   img.src = URL.createObjectURL(blob);;
//   console.log(img)
// }
// //
// request.send();
// //
// function onLoadStart(evt){
//   console.log('starting the request');
// }
//
// function onProgress(evt){
//   var currentPercent = (evt.loaded / evt.total) * 100;
//   console.log(currentPercent);
// }
// function onLoad(evt){
//   console.log(`transfer is complete ${evt}`);
// }
// function onError(evt){
//   console.log('error during transfer');
// }
// function onAbort(evt){
//   console.log('the user aborted the transfer');
// }
