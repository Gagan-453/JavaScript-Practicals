console.log("Atrributes and Properties in DOM");
/* ADDING NEW PROPERTIES IN DOCUMENT.BODY
document.body.myData = {
	name: 'Gagan',
	title : 'Programmer'
}
alert(document.body.myData.title) */

/* ADDING A METHOD TO document.body 
document.body.sayTagName = function () {
  alert(this.tagName);
};
document.body.sayTagName(); */

/* HTML Attributes 
console.log(document.body.id)
console.log(document.body.something) */

/* Way to get non-standard properties 
let attr = document.body.getAttribute('something')
console.log(attr) */

/* WORKING WITH ATTRIBUTES 
let element = document.querySelector('#elem')
let getAttr = element.getAttribute('about')
console.log(getAttr)
element.setAttribute('test', 123)
console.log(element.outerHTML)
for (let attr of element.attributes){
	console.log(`${attr.name} = ${attr.value}`)
} */
