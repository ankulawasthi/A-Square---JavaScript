let emp = ["ankul", "anushka","shivam"];
console.log(emp[1]);

// we can store different type of data structure
 
 let info = ['Ankul', 24, 90.03]
 console.log(info);
 console.log(info.length);
 console.log(info[0][0]);

 // array are mutable 
 info[0]="Anushka";

 info[10]="Ayush";
 console.log(info);

 // ------------------------------------------------------------array mehtods------------------------------------
 /*
 Push : add at the end 
 pop : delete at the end 
 unshift : add at the start
 shift: delete at the start
 */ 

 let car = ['bmw','audi', 'bugadi', 'ferrari'];
 console.log(car);
 car.push('maruti');
 car.pop();
 car.unshift('toyota');
 car.shift();
 console.log(car);

 //----------------------------------------------------------array methods--------------------------------------------------

 // 1. indexof : return index of something
 let color = ['yellow', 'green', 'red', 'pink'];
 console.log(color.indexOf('red')); //output = 2
 console.log(color.indexOf('white')); // output = -1 (white is not exist) 

 // 2. incudes : search for a value 

 console.log(color.includes('red'));
 console.log(color.includes('white'));

 // ----------------------------------------------concat method---------------------------------------------

 let pre = ['a','b','c'];
 let post = ['e','f','g'];
 console.log(pre.concat(post));

 //-----------------------------------------------reverse method-------------------------------------------

 let num = [1,2,3,4,5];
 console.log(num.reverse())

 //------------------------------------------slice----------------------------------------

 let n = ['x','y','z','a','b','c'];
 console.log(n.slice()); // return array as it is.. 
 console.log(n.slice(2)); // start from 2 to end 
 console.log(n.slice(1,5)); // start from 1 and end 4
 console.log(n.slice(-2)); // last 2 elements 
 console.log(n);

 //--------------------------------------------splice methods-------------------------------------------------

 // splice:: remove / replace and element in a place

 /// formate - splice(start,deleteCount, item0...itemN)

 let dept = ['SP','dp', 'DQ', 'PannelTeam', 'sales'];
 console.log(dept.splice(3));
 console.log(dept); // splice also changes the accutal array but slice never .. 
 console.log(dept.splice(0,1)) // start from 0 and delete 1 element from start.
 console.log(dept);
dept.splice(0, 0, "SRA", "PRA");
console.log(dept);

// ------------------------------------------------------------sort() method -====================================

// we use sort method when we have character or string. 
// sort methos covert into string then sort the elements. 
//we will not use sort method with number


// --------------------------------------------------------Array reference -------------------------------------------

let arr = [1,2,3]
let arr1 = [1,2,3]
console.log(arr == arr1); // there is arr and arr1 both address are different that's why return false value. 
let arr2 = arr; // we are coping the address of arr into arr2
console.log(arr == arr2);

