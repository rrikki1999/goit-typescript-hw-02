/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// Створення типу "Gender" з використанням union type
type Gender = 'male' | 'female';

// Створення змінної myGender типу Gender
let myGender: Gender;

// Приклад використання
myGender = 'male';
console.log(myGender);

export {};

