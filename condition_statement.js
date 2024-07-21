/* if else 
   nested if-else
   switch */ 

   // if statement  

   let age = 14;

   if(age<24){
    console.log(true);
   }
   else{
    console.log(false);
   }

   // else if statement 

let marks = 80;
if(marks > 85){
    console.log("A");
}
else if(marks>60){
    console.log("B")
}

// else statement 

if(age>=18){
    console.log("you can vote");
}
else{
    console.log("You can not vote");
}

// nested if else statement
let course = "B-tech";
if(age>24){
    if(course == "B-tech"){
        console.log("eligiable");

    }
}
else{
    console.log(" not eligiable");
}