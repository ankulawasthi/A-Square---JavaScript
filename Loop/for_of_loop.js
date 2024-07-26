// forof loop: when we have a collection of elements then we use forof loop. 

let fruits = ['Apple', 'Banana', 'Mango', 'Orange']; 

for(ele of fruits){
    console.log(ele);       
}

// nested for of loop 

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for(list of heroes){
    for(ele of list){
        console.log(ele);
    }
}