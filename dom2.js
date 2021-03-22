console.log("This is dom2.js");

let cont = document.querySelector(".container");
// console.log(cont.children)
let nodename = cont.childNodes[1].nodeName;
let nodetype = cont.childNodes[1].nodeType;
// console.log(nodename)
// console.log(nodetype)

/*
Node Types
----------
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

let container = document.querySelector("div.container");

// console.log(container.children[1].children[0].children)

// GETTING FIRST CHILD NODES AND CHILD ELEMENT
// console.log(container.firstChild)
// console.log(container.firstElementChild)

// console.log(container.lastChild)
// console.log(container.lastElementChild)
// console.log(container.childElementCount) //Count of child elements

// console.log(container.firstElementChild.parentNode)
// console.log(container.firstElementChild.parentElement)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
