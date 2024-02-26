// 1. Створіть інтерфейс з декількома властивостями. Відтворіть ту саму структуру завдяки Type alias.
 
interface MyInterface {
  property1: number;
  property2: string;
  property3: boolean;
}

type MyTypeAlias = {
  property1: number;
  property2: string;
  property3: boolean;
};

// Приклад використання
const obj1: MyInterface = {
  property1: 1,
  property2: "hello",
  property3: true
};

const obj2: MyTypeAlias = {
  property1: 2,
  property2: "world",
  property3: false
};

// 2. Створіть інтерфейс з анотацією будь-якого функціонального виразу. 
// Відтворіть ту саму структуру завдяки  Type alias.

interface MyFunctionInterface {
  (param1: string, param2: number): boolean;
}

type MyFunctionTypeAlias = (param1: string, param2: number) => boolean;

// Приклад використання
const myFunc1: MyFunctionInterface = function(param1, param2) {
  return param1.length > param2;
};

const myFunc2: MyFunctionTypeAlias = function(param1, param2) {
  return param1.length > param2;
};

// 3. Продемонструйте у коді цей вираз: створіть псевдонім типу для примітивного значення, обʼєднання та кортежу.

// Псевдонім типу для примітивного значення
type MyPrimitiveAlias = number;

// Псевдонім типу для об'єднання
type MyUnionAlias = string | boolean;

// Псевдонім типу для кортежу
type MyTupleAlias = [number, string, boolean];

// Приклад використання
const primitiveValue: MyPrimitiveAlias = 10;
const unionValue: MyUnionAlias = true;
const tupleValue: MyTupleAlias = [1, "hello", false];

// 4. І Interface, і Type alias можна розширити, але синтаксис відрізняється. Крім того, зауважте, 
// що інтерфейс і псевдонім типу не виключають один одного. 
// Тобто інтерфейс може розширювати псевдонім типу, і навпаки. Продемонструйте цей вираз у вашому коді: 

// a) Один інтерфейс розширює інший
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: "red",
  sideLength: 10
};

console.log(square);

// b) Один інтерфейс розширює псевдонім типу
type Point = {
  x: number;
  y: number;
};

interface LabeledPoint extends Point {
  label: string;
}

const labeledPoint: LabeledPoint = {
  x: 5,
  y: 10,
  label: "MyPoint"
};

console.log(labeledPoint);

// c) Один псевдонім типу розширює інтерфейс
interface Person {
  name: string;
  age: number;
}

type Employee = Person & {
  id: number;
};

const employee: Employee = {
  name: "John",
  age: 30,
  id: 12345
};

console.log(employee);

// d) Один псевдонім типу розширює інший
type Vehicle = {
  type: string;
  wheels: number;
};

type Car = Vehicle & {
  brand: string;
};

const car: Car = {
  type: "car",
  wheels: 4,
  brand: "Toyota"
};

console.log(car);

// 5.  Створіть класи, котрі будуть реалізовувати в одному випадку інтерфейси, а в іншому псевдонім типу. 
// Наприкінці, спробуйте вимусити клас реалізувати  псевдонім типу, який іменує тип об’єднання.

// Інтерфейс
interface Printable {
  print(): void;
}

// Псевдонім типу (Type alias)
type PrintableType = {
  print(): void;
};

// Псевдонім типу для об'єднання
type PrintableUnion = Printable | PrintableType;

// Клас, який реалізує інтерфейс
class PrintClass implements Printable {
  print() {
      console.log("Implementing Printable Interface");
  }
}

// Клас, який реалізує псевдонім типу
// Однак це недопустимо з точки зору синтаксису TypeScript.
class AnotherPrintClass implements PrintableType {
  print() {
      console.log("Implementing PrintableType Alias");
  }
}

// Спроба вимусити клас реалізувати псевдонім типу, який іменує об'єднання
// Це призведе до помилки компіляції, оскільки псевдонім типу не можна використовувати як інтерфейс для класу.

 class SomePrintClass implements PrintableUnion {
  print() {
      console.log("Implementing PrintableUnion");
  }
}

// 6. На відміну від псевдоніма типу, інтерфейс можна визначати кілька разів і розглядатиметься як єдиний 
// інтерфейс (з об’єднаними членами всіх декларацій). Продемонструйте цю властивість інтерфейсів у своєму рішенні.
 
// Перша декларація інтерфейсу
interface Person {
  name: string;
}

// Друга декларація тієї ж самої інтерфейсу з додатковою властивістю
interface Person {
  age: number;
}

// Об'єднаний інтерфейс, який містить обидва об'єднані члени з обох декларацій
const person: Person = {
  name: "John",
  age: 30
};

console.log(person); // Output: { name: 'John', age: 30 }
