// getAttribute( attr ) //to get the attribute value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// access class value
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute( attr, value ) //to set the attribute value
let setVal = document.querySelector("span");
console.log(setVal.setAttribute("class", "newClass"));


div.style                                 //    : access style
div.style.backgroundColor = "green";         //    : change the div backgroundColor
div.style.fontSize = "30px";               //     : increase the font size  
div.innerText = "Hello!";
// div.style.visibility = "hidden";

