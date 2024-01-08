class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super("Circle", color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Quadrilateral extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrilateral {
    constructor(width, height, color) {
        super("Rectangle", color, width, height);
    }
    calculateArea() {
        return this.width * this.height;
    }
    print() {
        console.log(`Area of ${this.color} Rectangle: ${this.calculateArea()}`);
    }
}
class Square extends Quadrilateral {
    constructor(sideLength, color) {
        super("Square", color, sideLength, sideLength);
    }
    calculateArea() {
        return this.width * this.width;
    }
    print() {
        console.log(`Area of ${this.color} Square: ${this.calculateArea()}`);
    }
}
class Triangle extends Shape {
    constructor(base, height, color) {
        super("Triangle", color);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return (0.5 * this.base * this.height);
    }
}
const circle = new Circle(5, "red");
const rectangle = new Rectangle(4, 6, "blue");
const square = new Square(5, "green");
const triangle = new Triangle(4, 7, "yellow");
console.log(circle.calculateArea());
rectangle.print();
square.print();
console.log(triangle.calculateArea());
