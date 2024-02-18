/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey,TValue> {
  key: TKey;
  value: TValue;
}

// Приклади використання:
const pair1: KeyValuePair<string, number> = { key: 'age', value: 30 };
const pair2: KeyValuePair<number, boolean> = { key: 1, value: true };

// Функція, яка приймає пару ключ-значення та виводить її на консоль
function printKeyValuePair<TKey, TValue>(pair: KeyValuePair<TKey, TValue>): void {
  console.log(`Key: ${pair.key}, Value: ${pair.value}`);
}

printKeyValuePair(pair1); // Виведе "Key: age, Value: 30"
printKeyValuePair(pair2); // Виведе "Key: 1, Value: true"
export {};