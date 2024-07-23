// Formate: StringName.method()

//1. trim()

//str.trim() : trims whitespaces from both ends of strings and return a newone.

let msg = "    Hello     ";
console.log(msg);
console.log(msg.trim()); 

// strings are immutable, we can not chnage the actual string.

let name = "   ankul";
let str = name.trim();
console.log(str);
console.log(name);

// lowercase and uppercase in js

let lName = "awasthi";
let fName = "ANKUL";
let u = lName.toUpperCase();
let l = fName.toLowerCase();
console.log(u);
console.log(l);

// 2. Slice method : return a part of original string as a new string 

let str1 = "ilovecoding";
console.log(str1.slice(5)); // output: coding
console.log(str1.slice(1,5)); // love
console.log(str1.slice(-1));  // console.log(str1.slice(string_length - 1))

// replace: Seraches a value in a string with the value replaced. 

str1.slice("love", "do");
str1.slice("o", "x");

// repeat method: Return a string with number of copies of a string 

let fruit = "Mango";
console.log(fruit.repeat(3));

