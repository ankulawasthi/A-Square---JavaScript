
// take one or multiple function as a arguments

// function multiGreet(func,count){
//     for(let i=1; i<=count; i++){
//         greet()
//     }

// }

// let greet = function(){
//     console.log("hello");
// }

// multiGreet(greet,5);

//
function oddevenFact(request){

    if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        
        return odd;
    }

}
    
    let request = "odd";
    let func = oddevenFact(request);
    func(3);
    
    
    



