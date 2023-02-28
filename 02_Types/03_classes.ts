class Vehicle {
  constructor(protected _color: string, protected _className: string) {
    console.log(this._className + ' ' + this._color);
  }

  protected drive(): void {
    console.log('chugga chugga...');
  }

  honk(): void {
    console.log('beep beep...');
  }
}

class Train extends Vehicle {
  constructor(public color: string) {
    super('Train', color);
  }

  public drive() {
    super.drive();
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super('Car', color);
  }

  public drive(): void {
    console.log('vroom vroom ........');
  }
}

const train: Train = new Train('red');
train.drive();

const car: Car = new Car('white');
car.drive();
car.honk();
