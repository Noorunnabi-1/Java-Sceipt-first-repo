let str = 'String';
let str1 = "String1";
console.log(str[0]);

// Template Literals
let specialString = `This is a Template Literals ${2 + 4 + 4}`;
console.log(specialString);

let obj = {
    item: "Pen",
    price: 10,
}
// String Interpolation
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
//console.log("the cost of ", obj.item, "is ", obj.price, "rupees.");

console.log(`htfjth kuyfku  yfkuy  fuyk  yfk \n iuyl yty uyf jyy \t ytkuy tty kutk kufk`);

let string = "htfjth kuyfku  yfkuy  fuyk  yfk \n iuyl yty uyf jyy \t ytkuy tty kutk kufk";
let newString = string.toUpperCase();
console.log(string);
console.log(newString);

// trim()
let stri = "     Noorunnabi   JS   developer     ";
console.log(stri.trim());

// slice(start,end)
let xyz = "01234567";
console.log(xyz.slice(0, 6));   // end index non-includive (output : 1234 )

let wxyz = "hello world";
console.log(wxyz.slice(0, 8));  // count space also

// concatinatio : join two strigs
let stri1 = "apna";
let stri2 = " college";
let res1 = stri1.concat(stri2);
console.log(res1);

let stri3 = " apna";
let stri4 = " college";
let res2 = stri4.concat(stri3);
console.log(res2);

let res3 = stri1 + stri2;
console.log(res3);

// replace method
let strin = "hello";
console.log(strin.replace("h", "y"));
console.log(strin.replace("lo", "p"));

let string1 = "hellolololo";
console.log(string1.replaceAll("lo", "p"));
// charAt(index)
console.log(string1.charAt(4));


// Practice
// let output = `the cost of ${obj.item} is ${obj.price} rupees.`;

let user = prompt("Enter your full name : ");
//console.log(user);
// console.log(" @", user, user.length);
// let output1 = `@${user, user.length}`
// console.log(output1);
console.log("@" + user + user.length);










