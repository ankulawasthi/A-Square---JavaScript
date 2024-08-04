let arr = [1,2,3,4,5,6,7,8,9]
console.log(...arr);

let s = "apnacollege"
console.log(...s);

//--------------------------------------------------------------------------------------------
let odd = [1,3,5,7,9];
let even = [2,4,6,8];
let newArr = [...odd, ...even];
console.log(newArr);

//----------------------------------------------------------------------------------------------

const data = {
    email: "awasthi.ankul121@gmail.com",
    name: "Ankul",
    password: "ankul121"
}

const dataCopy = {...data, id: 123, country: "India"}

console.log(dataCopy);