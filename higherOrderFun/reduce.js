arr = [2,3,4,5,6,7,8,9,10]
max = arr[0];
for(let i=1; i<=arr.length; i++){
    if (arr[i] > max){
        max = arr[i]
    }
}
console.log(max); 

// using reduce method... 

let res = arr.reduce((max=arr[0], el)=>{
    if(el > max){
        return el;
    }
    else{
        return max;
    }
})

console.log(res); 