let drink: {
  color: string;
  carbonated: boolean;
  sugar: number;
};

drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

console.log('object drink is: ', drink);

type Drink = [string, boolean, number];
let pepsiArrayTyped: [string, boolean, number] = ['black', true, 40];

console.log('Tuple named pepsi of array typed is: ', pepsiArrayTyped);

let pepsiOfTypeDrink: Drink = ['black', true, 40];

console.log('Tuple named pepsi of type Drink is: ', pepsiOfTypeDrink);

const sprite: Drink = ['clear', true, 40];

console.log('Tuple named sprite of type Drink is: ', sprite);

const tea: Drink = ['brown', false, 0];

console.log('Tuple named tea of type Drink is: ', tea);
