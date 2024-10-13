// the technique allows a function to call another function 

const cal = (num1,num2,mycallback) => {
    let sum = num1 + num2;
    mycallback(sum); 
}

const display = (num) => {
console.log(num);
}

cal(1,2,display);
