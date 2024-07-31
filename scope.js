// block scope


let age=35;
if(age>18){
    let str = "adult";
    console.log(str);
}
//console.log(str);// we can not access outside the block 


// lexical scope:  

/// variable defined outside the function accessible inside another function defined after the variable declartion

function outerFunction(){
    let a=5;
    let b=8;
    function innerFunction(){ //function scope 
        console.log(a)
    }
    innerFunction()
}

outerFunction()