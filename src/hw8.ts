// Task 1
// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

  type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
  };

  // Task 2
  // Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
  
  type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
  };

  // Task 3
  // Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

  type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K];
  };

  //Task 4
  // Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

  type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor;
  };

  