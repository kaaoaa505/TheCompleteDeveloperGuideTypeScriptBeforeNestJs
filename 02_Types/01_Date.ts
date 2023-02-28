const date: Date = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let monthName = months[date.getMonth()];

console.log('Year: ', date.getFullYear());
console.log('Month: ', date.getMonth());
console.log('Day: ', date.getDate());

console.log('Month Name: ', monthName);
