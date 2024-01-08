abstract class Shape {
  constructor(protected readonly name: string, protected readonly color: string) {}

  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(private readonly radius: number, color: string) {
    super("Circle", color);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

abstract class Quadrilateral extends Shape {
  constructor(name: string, color: string, protected readonly width: number, protected readonly height: number) {
    super(name, color);
  }
}

class Rectangle extends Quadrilateral {
  constructor(width: number, height: number, color: string) {
    super("Rectangle", color, width, height);
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  print(): void {
    console.log(`Area of ${this.color} Rectangle: ${this.calculateArea()}`);
  }
}

class Square extends Quadrilateral {
  constructor(sideLength: number, color: string) {
    super("Square", color, sideLength, sideLength);
  }

  calculateArea(): number {
    return this.width * this.width;
  }

  print(): void {
    console.log(`Area of ${this.color} Square: ${this.calculateArea()}`);
  }
}

class Triangle extends Shape {
  constructor(private readonly base: number, private readonly height: number, color: string) {
    super("Triangle", color);
  }

  calculateArea(): number {
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
