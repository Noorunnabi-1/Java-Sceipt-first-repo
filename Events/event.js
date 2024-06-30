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
