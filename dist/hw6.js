function anyFuncNumber(numb) {
    console.log(numb);
}
const functionMap = {
    myFunction: anyFuncNumber,
};
functionMap.myFunction(13);
const anyObj = {
    0: 10,
    20: 30,
};
console.log(anyObj);
class ForInterface {
    constructor(name, anyProperty) {
        this.name = name;
        this.anyProperty = anyProperty;
    }
}
const instance = new ForInterface("John", "Some value");
console.log(instance.name);
console.log(instance.anyProperty);
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, 
// чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
const areAllValuesNumbers = (objectWithIndexSignature) => {
    for (const key in objectWithIndexSignature) {
        // Перевірка, чи ключ не є "name" і значення не є числом
        if (key !== "name" && typeof objectWithIndexSignature[key] !== "number") {
            return false;
        }
    }
    return true;
};
const myObject = { key1: 42, key2: 13 };
const result = areAllValuesNumbers(Object.assign({ name: "test" }, myObject));
console.log(result);
