// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectSq (a, b) {
   return a * b;
}
console.log(calcRectSq(4, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;
function calcCircleSq (r) {
   return PI * (r*r);
}
console.log(calcCircleSq(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinderSq(h, r) {
   return 2 * PI * r * (h + r);
}
console.log(calcCylinderSq(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
function arrElement (arr) {
   for (const element of arr) {
      console.log(element);
   }
}
arrElement([1, 3, 5, 7]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP (text) {
   document.write(`<div>${text}</div>`);
}
createP('Hello, its test');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUL (text) {
   document.write('<ul>');
   for (let i = 0; i < 3; i++) {
      document.write(`<li>${text}</li>`);
   }
   document.write('</ul>');
}
createUL('test-1');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUL2 (text, count) {
   document.write('<ul>');
   for (let i = 0; i < count; i++) {
      document.write(`<li>${text}</li>`);
   }
   document.write('</ul>');
}
createUL2('test-2', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createUL3 (arr) {
   document.write('<ul>');
   for (let i = 0; i < arr.length; i++) {
      document.write(`<li>${arr[i]}</li>`);
   }
   document.write('</ul>');
}
createUL3(['one', 2, true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function showObjEl (arr) {
   for (arrEl of arr) {
      document.write('<div>');
      for (objKey in arrEl) {
         document.write(`<div>${objKey}: ${arrEl[objKey]}</div>`);
      }

      document.write('</div><br>');
   }
}
showObjEl([{id:1, name:'Ivan', age:30}, {id:2, name:'Andrew', age:19}, {id:3, name:'Julia', age:22}]);

// - створити функцію яка повертає найменьше число з масиву
function findMinNumb (arr) {
   let min = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
         min = arr[i];
      }
   }
   return min;
}
console.log(findMinNumb([5, 32, 7, 8, 10]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function calcSum (arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      
   }
   return sum;
}
console.log(calcSum([3, 8, 1]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr, index1, index2) {
   const i1 = arr[index1];
   const i2 = arr[index2];
   arr[index2] = i1;
   arr[index1] = i2;

   return arr;
}
console.log(swap([11,22,33,44],0,1));
console.log(swap([1451,1,114,9],2,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange (sumUAH, currencyValues, exchangeCurrency) {
   let value;
   for (arrElement of currencyValues) {
      if (arrElement.currency === exchangeCurrency) {
         value = arrElement.value;
      }
   }
   return sumUAH / value;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
