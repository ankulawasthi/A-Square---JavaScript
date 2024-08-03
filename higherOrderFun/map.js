// syntaax:   let newArr = arr.map(some function or definition or name)

let arr = [1,2,3,4,5]
let newArr = arr.map((el)=>{
    return el*2
})

console.log(newArr);

// object example 

let student = [{
    name: "Ankul",
    marks: 90
},{
    name: "Rajat",
    marks: 85
},{
    name: "Shivam",
    marks: 98
}]

let gpa = student.map((el)=>{
    return el.marks/10 ; 
})
console.log(gpa); 