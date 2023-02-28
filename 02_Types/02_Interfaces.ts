interface Vehicle {
  name: string;
  year: Date | number;
  broken: boolean;
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  if (vehicle.year instanceof Date) {
    vehicle.year = vehicle.year as Date;
    console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year.getFullYear()}
  Broken?: ${vehicle.broken}
  `);
  } else {
    console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken?: ${vehicle.broken}
    `);
  }
};

const oldCivic: Vehicle = {
  name: 'Civic with date',
  year: new Date('2000'),
  broken: true,
  summary() {
    let yearFromDate = this.year as Date;
    const requiredYear = yearFromDate.getFullYear();
    return `
    Name: ${this.name}
    Year: ${requiredYear}
    Broken?: ${this.broken}
    `;
  },
};
printVehicle(oldCivic);
console.log('Old Civic Summary is: ', oldCivic.summary());

const newCivic: Vehicle = {
  name: 'Civic with number',
  year: 2020,
  broken: true,
  summary() {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Broken?: ${this.broken}
    `;
  },
};
printVehicle(newCivic);
console.log('New Civic Summary is: ', newCivic.summary());
