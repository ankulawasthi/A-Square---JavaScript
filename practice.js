let monthes = ["january", "july", "march", "august"];
monthes.splice(0,2,"july","june"); 
console.log(monthes);

// print odd number fro 1 to 15 

for(i=1;i<=15;i++){
    if(i%2 !== 0){
        console.log(i)
    }
}

// print the multificsstion table for 5 

for(i=1;i<=10;i++){
    console.log(`5*${i} = ${5*i}`);
}

