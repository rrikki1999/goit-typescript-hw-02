/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const obj1 = { name: 'John' };
const obj2 = { age: 30 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj); // Виведе об'єкт, що поєднує властивості об'єктів obj1 та obj2
