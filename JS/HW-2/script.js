// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
   title: 'first book',
   pageCount: 300,
   genre: 'first genre'
}
let book2 = {
   title: 'second book',
   pageCount: 200,
   genre: 'second genre'
}
let book3 = {
   title: 'third book',
   pageCount: 100,
   genre: 'third genre'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
   title: 'fourth book',
   pageCount: 120,
   genre: 'fourth genre',
   authors: [{
      name: 'Ivan'
   }]
}
let book5 = {
   title: 'fifth book',
   pageCount: 190,
   genre: 'fifth genre',
   authors: [{
      name: 'Stepan'
   }]
}
let book6 = {
   title: 'sixth book',
   pageCount: 230,
   genre: 'sixth genre',
   authors: [{
      name: 'Petro'
   }]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. 
// Вивести в консоль пароль кожного користувача

const arr2 = [
   {
      name: 'name1',
      username: 'username1',
      password: 'password1'
   },
   {
      name: 'name2',
      username: 'username2',
      password: 'password2'
   }, 
   {
      name: 'name3',
      username: 'username3',
      password: 'password3'
   },
   {
      name: 'name4',
      username: 'username4',
      password: 'password4'
   },
   {
      name: 'name5',
      username: 'username5',
      password: 'password5'
   },
   {
      name: 'name6',
      username: 'username6',
      password: 'password6'
   },
   {
      name: 'name7',
      username: 'username7',
      password: 'password7'
   },
   {
      name: 'name8',
      username: 'username8',
      password: 'password8'
   },
   {
      name: 'name9',
      username: 'username9',
      password: 'password9'
   },
   {
      name: 'name10',
      username: 'username9',
      password: 'password10'
   },
]
console.log(arr2[0].password, arr2[1].password, arr2[2].password, arr2[3].password, arr2[4].password, arr2[5].password, arr2[6].password, arr2[7].password, arr2[8].password, arr2[9].password, )



// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = -3;
if (x != 0) {
   console.log('Правильно');
} else {
   console.log('Неправильно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 15;
if (time >= 0 && time < 15) {
   console.log('Перша чверть');
} else if (time >= 15 && time < 30) {
   console.log('Друга чверть');
} else if (time >= 30 && time < 45) {
   console.log('Третя чверть');
} else if (time >= 45 && time < 60) {
   console.log('Четверта чверть');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

const dayOfMonth = 10;
if (dayOfMonth >= 1 && dayOfMonth <= 10) {
   console.log('Перша декада');
} else if (dayOfMonth > 10 && dayOfMonth <= 20) {
   console.log('Друга декада');
} else if (dayOfMonth > 20 && dayOfMonth <= 31) {
   console.log('Третя декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//  відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

const day = 5;
switch (day) {
   case 1:
      console.log('Monday');
      break;
   case 2:
      console.log('Tuesday');
      break;
   case 3:
      console.log('Wednesday');
      break;
   case 4:
      console.log('Thursday');
      break;
   case 5:
      console.log('Friday');
      break;
   case 6:
      console.log('Saturday');
      break;
   case 7:
      console.log('Sunday');
      break;
}


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

const num1 = 32,
      num2 = 32;
if (num1>num2) {
   console.log(num1);   
} else if (num1 < num2) {
   console.log(num2);   
} else {
   console.log(`num1 = num2 = ${num1}`)
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy 
// (хибноподібні, тобто приводиться до false)
let y = '';
if(!y) {
   y = 'default';
}
console.log(y);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. 
// За допомоги іф перевірити кожен його елемент на тривалість навчання. 
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
   console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
   console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
   console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
   console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
   console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
   console.log('Супер');
}