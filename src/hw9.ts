//Умовний тип, який встановлює тип, що повертається з функції:

type ReturnTypeFromFunction<T> = T extends (...args: any[]) => infer R ? R : never;

// Приклад використання:
function add(a: number, b: number): number {
    return a + b;
}

type AddReturnType = ReturnTypeFromFunction<typeof add>;
// AddReturnType буде типом number


// Умовний тип, який приймає функціональний тип з одним параметром та повертає кортеж із типом, що функція повертає, та типом її параметра:

type FunctionReturnTypeAndParameter<T> = T extends (param: infer P) => infer R ? [R, P] : never;

// Приклад використання:
function exampleFunction(input: string): number {
    return input.length;
}

type Result = FunctionReturnTypeAndParameter<typeof exampleFunction>;
// Result буде типом [number, string]