function test01() {
  console.log('just for test 01');
}

const test02 = () => {
  console.log('just for test 02');
};

test01();
test02();

const logNumber: (i: number) => void = (i: number): void => {
  console.log('log result of i: ', i);
};

logNumber(1);
logNumber(2);
logNumber(3);

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
