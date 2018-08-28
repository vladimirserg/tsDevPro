/*****Querying DOM Elements***/

// const para1 = document.getElementsByTagName('p')[0];
// const i1 = document.querySelector('i[class=someClass]');
// console.log(i1)
// console.log(para1);
// console.log(para1.textContent);
// console.log(para1.innerHTML);
// console.log(i1.innerHTML);
// console.log(i1.outerHTML);
// para1.textContent = "Modified HTML file"; // look for change in browser
// para1.innerHTML = "<i>Modified</i> HTML file";
// console.log(para1.textContent);
// console.log(para1.innerHTML);

/*****Creating New DOM Elements***/
// const p1 = document.createElement('p');
// const p2 = document.createElement('p');
// p1.textContent = "I was created dynamically!";
// p2.textContent = "I was also created dynamically!";
//  const parent = document.querySelector('#content');
//  const firstChild = parent.childNodes[0];
//  parent.insertBefore(p1, firstChild);
//  parent.appendChild(p2);

/***** creating from js new Image ****/

// const img = new Image();
// img.src = 'https://venturefizz.com/sites/default/files/m/events/img/love.js_.jpeg';
// img.classList.add('someClass');
// document.body.appendChild(img);
// setTimeout(()=>{
//   img.classList.remove('someClass');
// },5000)

/**Styling Elements**/
//classList (class)
//styles

// const p = document.querySelector('p');
// p.style['font-size'] = '20px';
// console.log(p.style['font-size'])


/**Fetching styles*/
// const {width} = getComputedStyle(p);
// console.log(width)

/**Using DOM attributes and properties***/
// elem.hasAttribute(name)
// elem.getAttribute(name)
// elem.setAttribute(name, value)
// elem.removeAttribute(name)
// elem.attributes

/**Data Attributes**/

// const highlightActions = document.querySelectorAll('[data-action="highlight"]');
// console.log(highlightActions[0].dataset)
// highlightActions[0].dataset.containing = "giraffe";
// highlightActions[0].dataset.caseSensitive = "true";


/****Measuring heights and widths*/
 //el.offsetWidth/el.clientWidth/el.scrollWidth
const p = document.querySelector('p');
 console.log(p.offsetWidth);
 console.log(p.clientWidth);
/****/
console.log(p.getBoundingClientRect())