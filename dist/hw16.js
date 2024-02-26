// 1. Створіть інтерфейс з декількома властивостями. Відтворіть ту саму структуру завдяки Type alias.
// Приклад використання
const obj1 = {
    property1: 1,
    property2: "hello",
    property3: true
};
const obj2 = {
    property1: 2,
    property2: "world",
    property3: false
};
// Приклад використання
const myFunc1 = function (param1, param2) {
    return param1.length > param2;
};
const myFunc2 = function (param1, param2) {
    return param1.length > param2;
};
// Приклад використання
const primitiveValue = 10;
const unionValue = true;
const tupleValue = [1, "hello", false];
const square = {
    color: "red",
    sideLength: 10
};
console.log(square);
const labeledPoint = {
    x: 5,
    y: 10,
    label: "MyPoint"
};
console.log(labeledPoint);
const employee = {
    name: "John",
    age: 30,
    id: 12345
};
console.log(employee);
const car = {
    type: "car",
    wheels: 4,
    brand: "Toyota"
};
console.log(car);
// Клас, який реалізує інтерфейс
class PrintClass {
    print() {
        console.log("Implementing Printable Interface");
    }
}
// Клас, який реалізує псевдонім типу
// Однак це недопустимо з точки зору синтаксису TypeScript.
class AnotherPrintClass {
    print() {
        console.log("Implementing PrintableType Alias");
    }
}
// Об'єднаний інтерфейс, який містить обидва об'єднані члени з обох декларацій
const person = {
    name: "John",
    age: 30
};
console.log(person); // Output: { name: 'John', age: 30 }
