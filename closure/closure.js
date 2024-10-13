// In javascript we need cloures when a variable which is defined outside the 
//scope in reference is accessed from inner scope 

const x = 30;
const boo = true;
function add(){
  const z = x + 3;
  console.log(z)
  if (boo){
    console.log(z+'23');
  }
}
add();