// Practice 1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from apna college students";


// Practice 2
let divs = document.getElementsByClassName("box");
let idx = 1;
for (div of divs) {
    div.innerText = `change text in div ${idx}`;
    idx++;
}


// divs[0].innerText = "change text in div 1";
// divs[1].innerText = "change text in div 2";
// divs[2].innerText = "change text in div 3";