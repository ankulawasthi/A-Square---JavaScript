// This keyword refers to an object that is execuatig a current piece of code.

let student = {
    name: "Ankul",
    age: 24,
    Maths: 80,
    Phy: 80,
    English: 80,
    avgMarks(){
        let avg = (this.Maths + this.Phy + this.English)/3; 
        console.log(`${this.name} got avg marks = ${avg}`);
    }
    
}

student.avgMarks();

// this keyword -- 4

let employee = {
    name: "Aftab",
    dept: "SP",
    skills: "python",
    prop: "this",
    getName: function(){
        console.log(this);
        return this.name;
    }, 
    getDept: () => {
        console.log(this); // parent scope window
        return this.dept;
    },
    getInfo1: function(){
        setTimeout(() =>{
            console.log(this)
        },2000)
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
        },2000)
    }

}


//console.log(employee.getName());
console.log(employee.getDept());
console.log(employee.getInfo1());