
let todo = [];
while (true) {
    let req = prompt("please enter your request");
    
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("============================================================");
        for (i=0; i<=todo.length; i++) {
            console.log(todo[i]);
        }
        console.log("------------------------------------------------------------");
    } 
    else if (req == "add") {
        let task = prompt("please enter a task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        indx=prompt("enter a idx whichyou want to delete");
        todo.splice(indx,1);
    }
}