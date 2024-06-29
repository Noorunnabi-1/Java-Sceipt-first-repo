let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
let body = document.querySelector("body");              // document.querySelector("body").prepend(newBtn);
body.prepend(newBtn);


// ques 2
let para = document.querySelector("p");
// here we are not using set & get attribute method this make overwrite the element
// we are using classList
para.classList.add("newClass");                  // para.classList.remove("newClass");

