// console.log(window);                  :for print window object.
// console.dir(window.document);         :for print document which is under window object.
// console.dir(document);                :same
// console.dir(document.body);           :for access body object from the document
// console.log(document.body);           :html Element

// Example of dynamic change means it changes at the runtime of website.
// firstly my background color of the body is darkgray now we make it pink.
// document.body.style.background = "pink";

// document.body.childNodes[3].innerText = "I'm a Software Developer";


// DOM Manupulation
// Selecting with id
let heading = document.getElementById("heading");
console.log(heading);        // html element
console.dir(heading);        // object
let button = document.getElementById("myId");
console.dir(button);


// Selecting with class
let headings = document.getElementsByClassName("h1-class");
console.log(headings);
console.dir(headings);


// Selecting with Tag
let tag = document.getElementsByTagName("p");
console.dir(tag);


// Query Selector
//Tag
let firstEl = document.querySelector("p");            // first element
console.dir(firstEl);

let allEl = document.querySelectorAll("p");            // All elements
console.dir(allEl);

// Class
let firstClassEl = document.querySelector(".h1-class");            // first element of the class
console.dir(firstClassEl);

let allClassEl = document.querySelectorAll(".h1-class");            // All elements of the class
console.dir(allClassEl);

// Id   
let firstIdEl = document.querySelector("#myId");            // it access only first element 
console.dir(firstIdEl);

// Access TagName
let classAccess = firstClassEl;
console.log(classAccess);
let tagName = firstClassEl.tagName;
console.log(tagName);


let children = document.querySelector("div").children;
console.dir(children);


// innerText    : only text 
let div = document.querySelector("div");
console.dir(div);
let innerText = div.innerText;
console.log(innerText);


// InnerHTML      :text and html content        
let innerHTML = div.innerHTML;
console.log(innerHTML);


let headig = document.querySelector("h1");
headig.innerText = "New Heading";
//headig.innerHTML = "<div>innerHTML</div>"


// textContent
let heading2 = document.querySelector("h2");
// heading2.innerText;                : output : ''

let hidden = heading2.textContent;
console.log(hidden);

