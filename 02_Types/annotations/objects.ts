const person = {
  age: 33,
};

console.log('Person age: ', person.age);

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

console.log('Point x: ', point.x);
console.log('Point y: ', point.y);

interface NewPoint {
  x: number;
  y: number;
}

let newPoint: NewPoint = {
  x: 30,
  y: 40,
};

console.log('New Point x: ', newPoint.x);
console.log('New Point y: ', newPoint.y);

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log('Profile age: ', age);
console.log('Profile coords lat: ', lat);
console.log('Profile coords lng: ', lng);
