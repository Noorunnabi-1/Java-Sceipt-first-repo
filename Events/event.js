let btn3 = document.querySelector("#btn3");
btn3.onclick = () => {
    console.log("button3 was clicked!");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector(".box");
div.onmouseover = () => {
    console.log("You are inside div2");
};

let btn4 = document.querySelector("#btn4");
btn4.onclick = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};

let div3 = document.querySelector(".box2");
div3.onmouseover = (evt) => {
    console.log("You are inside div3");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};

// Event listionar
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", (evt) => {
    console.log("button5 was clicked!");
    console.log(evt);
    console.log(evt.type);
});

btn5.addEventListener("click", (evt) => {
    console.log("button5 was clicked - handler1");
});

btn5.addEventListener("click", () => {
    console.log("button5 was clicked - handler2");
});

// for remove button further
const handler3 = () => {
    console.log("button5 was clicked - handler3");
};
btn5.addEventListener("click", handler3);

btn5.addEventListener("click", () => {
    console.log("button5 was clicked - handler4");
});

// now we remove button 3
btn5.removeEventListener("click", handler3);