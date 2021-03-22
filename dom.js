console.log('This is a practice of DOM Selectors')

// Single Element Selectors
let element = document.getElementById('myfirst');
// element = element.childNodes
// element = element.parentNode
element.style.color = 'red';
element.innerText = 'Gagan is a good boy'
element.innerHTML = '<b>Gagan is a good boy</b>'
// console.log(element)


let sel = document.querySelector('#myfirst')
sel = document.querySelector('#myfirst')
sel = document.querySelector('div')
sel.style.color = 'green'
// console.log(sel)

// Multi Element Selectors
let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
// console.log(elems[0].getElementsByClassName('child'))
elems = document.getElementsByTagName('div')
console.log(elems)

// Array.from(elems).forEach(element => {
//     console.log(element)
//     element.style.color = 'blue'
// })