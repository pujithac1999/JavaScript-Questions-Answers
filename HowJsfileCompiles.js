// Javascript is scripting lanaguage 
// Javascript is  synchronus  single -threaded lanaguage(only one line of code can be executed at a time)
 //which is used to develop dynamic web content
 // 
 //Vue.js is a JavaScript framework for building user interfaces and single-page applications
const n = 3;
const name = "abc"
function square(num){
    return num * num;
}
const square2 = square(n);
const square3 = square(5);

console.log(square2);
console.log(square3);

//step 1 

// n = undefined
// name = undefined
// square = square(){...}
// square2 = undefined
// square3 = undefined

// step 2 
// n = 3;
// name = "abc"
// square = square(){..}
// square2 = 9
// square3 =


// square method execution 
// step 1 : 
// num = undefined
// num = 3
// square = 9

// step 1 
// num = undefuned 
// num = 5 
// square3 = 25 

// async 
// await .then 
// run at different time 

// sync 
// run at same time 

//-----------------------------------------------------------------------------------

// normal page application : 

// www.puji.com (chrome search) --> backend --> server (request) 
// server(resp) --> backend --> user(frontend)

// chat --> backend -->server (request)
// server(resp) --> backend --> user(puji chat)

// frontend UI - html , css , javascript
// backend  - c# 
// database - mysql 


// single page application 
// www.puji.in ( chrome search) --> backend --> server(request)
// server(resp) --> empty document --> user (frontend)--- this is called client based / single page 

// frontend UI - vuejs 
// backend  - c# 
// database - mysql 

// client side application 

//---------------------------------------------------------------------------------------------------

// code --> engine --> webpage
   // 1 . parse code (orginal code) 
   // 2. machine code (0101010)
   // 3. excute 


// chrome : v8 engine
// firefox : spider monkey engine 
