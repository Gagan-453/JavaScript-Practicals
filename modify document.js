console.log("Modifying the Document")

// CREATING AN ELEMENT
let div = document.createElement('div')
document.body.innerHTML+='</br>'
div.className = "alert" // set classname to alert
div.innerHTML = "<strong>Hi! There!</strong> You've have read an important message"
document.body.append(div)
document.body.innerHTML+='</br>'

let elem = document.querySelector('.this')

/* USING BEFORE AND AFTER TO INSERT ELEMENTS
elem.before('This is before the element')
elem.after('This is after the element')
*** These elements write only text to the document not HTML
*/

/* USING PREPEND AND APPEND TO INSERT ELEMENTS
let lFirst = document.createElement('li')
lFirst.innerHTML = '<b>Hi!</b>'
elem.prepend(lFirst)

let lLast = document.createElement('li')
lLast.innerHTML = '<b>Bye!</b>'
elem.append(lLast)
*/
// console.log(elem)