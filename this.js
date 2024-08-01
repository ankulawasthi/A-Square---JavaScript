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