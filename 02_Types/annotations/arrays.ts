// let carMakers: any[] = [];
let carMakers: string[] = [];
carMakers = ['ford', 'toyota', 'chevy'];
console.log('Car makers array: ', carMakers);

let dates: Date[] = [];
dates = [
  new Date('1900-01-01T00:00:00.000Z'),
  new Date('2000'),
  new Date(),
  new Date('2030-01-01T11:59:59.999Z'),
];
console.log('Date Array: ', dates);

let carsByMake: string[][] = [];
carsByMake = [
  ['picanto', 'kia'],
  ['elantra', 'hyundai'],
];

console.log('Cars by make two dimensional Array: ', carsByMake);

// Help with inference when extracting values
const car = carMakers[0];
console.log('Car is : ', car);

const myCar = carMakers.pop();
console.log('My Car is : ', myCar);

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
const carMakersMapped = carMakers.map((car: string): string => {
  return 'Car is: ' + car.toUpperCase();
});

console.log('Car makers array: ', carMakers);
console.log('Car makers mapped: ', carMakersMapped);

// Flexible types
let importantDates: (string | Date)[] = [];
importantDates = [new Date(), '2030-10-10'];
importantDates.push('2040-04-04');
importantDates.push(new Date('2050'));

console.log('Important Dates array of two types combined: ', importantDates);
