// JavaScript Object Model:
// This refers to the way JavaScript structures and organizes data using objects.
// Objects are key-value pairs that can contain both properties and methods, making them essential for structuring data in applications.

const name = 'puji';
const car = {
  brand: 'BMW',
  model: 'A1',
  year: 2024,
  start: function() {
    console.log('Car started');
  },
  stop: function() {
    console.log('Car stoped');
  }
};

// step-1 ; 

// name = undefined;
// car = undefined;

// step-2; 
// name = puji
// car = {
//     brand: undefined,
//     model: undefined,
//     year : undefined,
//     start : undefined,
//     stop: undefined
// }

// step-3 

// name = puji ;
// car = {
//     brand: 'bmw',
//     model: 'A1',
//     year: 2024,
//     start : {
//         undefined
//     },
//     stop : { 
//         undefined
//     }
// }

// step - 4 

// const name = 'puji';
// const car = {
//   brand: 'BMW',
//   model: 'A1',
//   year: 2024,
//   start: function() {
//     Car started
//   },
//   stop: function() {
//     Car stoped
//   }
// };


// brand-btn    model-btn    year-btn   start-btn   stop-btn
// BMW          A1           2024       start       stop 
// car.brand    car.model    car.year   car.start   car.stop 



// Babel: Babel is a JavaScript compiler that allows developers to use next-generation JavaScript (ES6+) today. It transforms modern JavaScript code into a version that can run in older browsers.

