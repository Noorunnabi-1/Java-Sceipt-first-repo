// console.log(window);                  :for print window object.
// console.dir(window.document);         :for print document which is under window object.
// console.dir(document);                :same
// console.dir(document.body);           :for access body object from the document
// console.log(document.body);           :html Element

// Example of dynamic change means it changes at the runtime of website.
// firstly my background color of the body is darkgray now we make it pink.
document.body.style.background = "pink";

document.body.childNodes[3].innerText = "I'm a Software Developer";