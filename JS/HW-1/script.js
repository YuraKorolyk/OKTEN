// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let str1 = 'hello',
   str2 = 'owu',
   str3 = 'com',
   str4 = 'ua',
   num1 = 1,
   num2 = 10,
   num3 = -999,
   num4 = 123,
   num5 = 2.7,
   let6 = 16,
   bool1 = true,
   bool2 = false;
const pi = 3.14;
console.log(str1, str2, str3, str4, num1, num2, num3, num4, pi, num5, bool1, bool2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName = 'Yurii',
      middleName = 'Olegovich',
      lastName = 'Korolyk';

const person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100,
   b = '100',
   c = true;
console.log(typeof(a),typeof(b), typeof(c));

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

console.log(prompt('Введіть імʼя'), prompt('Введіть по-батькові'), prompt('Введіть роки'));
