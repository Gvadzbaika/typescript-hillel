// Task 1
// Фільтрація масиву 
function filterArray(array, condition) {
    return array.filter(item => condition(item));
}
// Test
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Відфільтруємо парні числа
const isEven = (number) => number % 2 === 0;
const filteredNumbers = filterArray(num, isEven);
console.log(filteredNumbers); // Результат: [2, 4, 6, 8, 10]
// Task 1 
// Узагальнений стек
class Stack {
    constructor() {
        this.elements = [];
    }
    push(item) {
        this.elements.push(item);
    }
    pop() {
        return this.elements.pop();
    }
    peek() {
        return this.elements[this.elements.length - 1];
    }
}
//Test
const stack = new Stack();
stack.push("Hello");
stack.push("World");
stack.push("!");
console.log(stack.peek()); // Результат: "!"
console.log(stack.pop()); // Результат: "!"
console.log(stack.pop()); // Результат: "World"
//Task 3 
// Узагальнений словник
class Dictionary {
    constructor() {
        this.data = {};
    }
    set(key, value) {
        this.data[key] = value;
    }
    get(key) {
        return this.data[key];
    }
    has(key) {
        return key in this.data;
    }
}
//Test
const dictionary = new Dictionary();
dictionary.set("one", 1);
dictionary.set("two", 2);
dictionary.set("three", 3);
console.log(dictionary.has("two")); // Результат: true
console.log(dictionary.get("three")); // Результат: 3
console.log(dictionary.get("four")); // Результат: undefined
