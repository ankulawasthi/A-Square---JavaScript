
// normal function 

function hello(){
    console.log("Hello"); 
}
hello();

// function with arguments 

function printInfo(arg1, arg2){
    console.log(`My name is ${arg1} and age ${arg2}`);
}
printInfo("Ankul", 24);
printInfo(24);

// return in function 

function sum(a,b){
    return a+b; 
}
s = sum(2,3);
console.log(s);

k=sum(sum(1,2),3);
console.log(k);

// arrow function 

const add = (a,b) => {
    return a+b;
}
console.log(add(2,3));