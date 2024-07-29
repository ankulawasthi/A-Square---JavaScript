// Object-Lietals: keyed collection and complex entities

// property  => (key,value) pair

let student = {
    name: "Ankul",
    age: 24
}; 
console.log(student.age); 

// IN OBJECT WE CAN PASS THE ARRAY 

let color = {
    col1: "red",
    col2: "green",
    other: ["white","pink"]
};

// get value of an object using . dot. 
console.log(color.other);

// using [] get the value : always access with string

console.log(color["col1"]);

// we can changes the value 

color.col1 = "yellow"; 
console.log(color.col1); 

let col = "col1"
console.log(color[col]);

 
// key automatically converted into string ... 


let obj = {
    1: "a",
    2: "b", 
    true: "c",
    null: "d",
    undefined: "e"
}; 

console.log(obj[1]);

// nested obj 

const sp_dept={
    abhijeet:{
        des: "AM",
        age:28
    },
    Aadesh: {
        des: "ATL",
        age: 26
    }
    
}

console.log(sp_dept.abhijeet.des)

// Array of object 

const classInfo = [
    {
        name:"Ankul",
        age: 24
    }, 

    {
        name: "Ravi",
        age: 23
    }
];
console.log(classInfo);

console.log(classInfo[0].name);