// append
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// now add to the screen
let div = document.querySelector("div");
div.append(newBtn);
div.style.backgroundColor = "aqua";
div.style.height = "300px";


// prepend
let secBtn = document.createElement("button");
secBtn.innerText = "prepend!";
console.log(secBtn);
let div2 = document.querySelector("div");
div.prepend(secBtn);


//before
let thirdBtn = document.createElement("button");
thirdBtn.innerText = "before!";
console.log(thirdBtn);
let div3 = document.querySelector("div");
div.before(thirdBtn);


//after
let fourBtn = document.createElement("button");
fourBtn.innerText = "after!";
console.log(fourBtn);
let div4 = document.querySelector("div");
div.after(fourBtn);


let heading = document.createElement("h3");
heading.innerHTML = "<i>Hello!  I am a Software Developer.";
document.querySelector("body").prepend(heading);


// delete element
let para = document.querySelector("p");
para.remove();