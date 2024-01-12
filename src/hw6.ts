// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. 
// Наприклад, тип значення для кожного ключа може бути число або рядок.
interface IUnion {
  [key: string]: string | number;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. 
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
interface IFunctionMap {
  [key: string]: (...args: any[]) => any;
}

function anyFuncNumber(numb: number): void {
  console.log(numb);
}

const functionMap: IFunctionMap = {
  myFunction: anyFuncNumber,
};

functionMap.myFunction(13);

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. 
// Ключі повинні бути числами, а значення - певного типу.
interface INumb {
  [key: number]: number;
}

const anyObj: INumb = {
  0: 10,
  20: 30,
};
console.log(anyObj);

// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface MyObject {
  name: string;
  [key: string]: string;
}

// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, 
// додаючи специфічні властивості.
interface FirstInterface {
  [key: string]: string;
}

interface SecondInterface extends FirstInterface {
  anyProperty: string;
}

class ForInterface implements SecondInterface {
  [key: string]: string;
  anyProperty: string;
  name: string;

  constructor(name: string, anyProperty: string) {
    this.name = name;
    this.anyProperty = anyProperty;
  }
}
const instance = new ForInterface("John", "Some value");
console.log(instance.name);
console.log(instance.anyProperty);

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, 
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
const areAllValuesNumbers = (objectWithIndexSignature: MyObject): boolean => {
  for (const key in objectWithIndexSignature) {
    // Перевірка, чи ключ не є "name" і значення не є числом
    if (key !== "name" && typeof objectWithIndexSignature[key] !== "number") {
      return false;
    }
  }
  return true;
};

const myObject: IUnion = { key1: 42, key2: 13 };
const result = areAllValuesNumbers({ name: "test", ...myObject });
console.log(result);
