// syntax: arr.forEach(some function defintion or name); 

let arr = [1,23,3,4,5,6]; 

function print(el){
    console.log(el); 
}

arr.forEach(print); 

// or 

arr.forEach(function(el) {
    console.log(el); 
}); 