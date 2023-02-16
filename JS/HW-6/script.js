// - Знайти та вивести довижину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase);
console.log('lorem ipsum'.toUpperCase);
console.log('javascript is cool'.toUpperCase);
// - Перевести до нижнього регістру наступні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase);
console.log('LOREM IPSUM'.toLowerCase);
console.log('JAVASCRIPT IS COOL'.toLowerCase);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str1);

function stringToarray (str){
   return str.split(' ');
}
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];

let newArr = arr1.map(item => item.toString());
console.log(newArr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до 
// меншого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(nums, direction) {
   if (direction === 'ascending') {
      nums.sort((a, b) => a-b);
   }
    else if (direction === 'descending') {
      nums.sort((a, b) => b-a);
   }
}
sortNums(nums, 'descending');
console.log(nums);


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b)=> b.monthDuration - a.monthDuration); 

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(item => item.monthDuration > 5);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((item, i) => {
   item.id = i+1;
});

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
const deckOfCards = [
   {value: '6', suit: 'Heart', color: 'red' },
   {value: '6', suit: 'Spade', color: 'black' },
   {value: '6', suit: 'Club', color: 'black' },
   {value: '6', suit: 'Diamond', color: 'red' },
   {value: '7', suit: 'Heart', color: 'red' },
   {value: '7', suit: 'Spade', color: 'black' },
   {value: '7', suit: 'Club', color: 'black' },
   {value: '7', suit: 'Diamond', color: 'red' },
   {value: '8', suit: 'Heart', color: 'red' },
   {value: '8', suit: 'Spade', color: 'black' },
   {value: '8', suit: 'Club', color: 'black' },
   {value: '8', suit: 'Diamond', color: 'red' },
   {value: '9', suit: 'Heart', color: 'red' },
   {value: '9', suit: 'Spade', color: 'black' },
   {value: '9', suit: 'Club', color: 'black' },
   {value: '9', suit: 'Diamond', color: 'red' },
   {value: '10', suit: 'Heart', color: 'red' },
   {value: '10', suit: 'Spade', color: 'black' },
   {value: '10', suit: 'Club', color: 'black' },
   {value: '10', suit: 'Diamons', color: 'red' },
   {value: 'Jack', suit: 'Heart', color: 'red' },
   {value: 'Jack', suit: 'Spade', color: 'black' },
   {value: 'Jack', suit: 'Club', color: 'black' },
   {value: 'Jack', suit: 'Diamond', color: 'red' },
   {value: 'Queen', suit: 'Heart', color: 'red' },
   {value: 'Queen', suit: 'Spade', color: 'black' },
   {value: 'Queen', suit: 'Club', color: 'black' },
   {value: 'Queen', suit: 'Diamond', color: 'red' },
   {value: 'King', suit: 'Heart', color: 'red' },
   {value: 'King', suit: 'Spade', color: 'black' },
   {value: 'King', suit: 'Club', color: 'black' },
   {value: 'King', suit: 'Diamond', color: 'red' },
   {value: 'Ace', suit: 'Heart', color: 'red' },
   {value: 'Ace', suit: 'Spade', color: 'black' },
   {value: 'Ace', suit: 'Club', color: 'black' },
   {value: 'Ace', suit: 'Diamond', color: 'red' },
];


// ---- в умові не сказано за допомогою чого це зробити, тому зробив ось так. Можна було і через filter ----

//  - знайти піковий туз
deckOfCards.forEach(item => {
   if (item.value === 'Ace' && item.suit === 'Spade') {
   console.log(item);
   }
});
//  - всі шістки
deckOfCards.forEach(item => {
   if (item.value === '6') {
      console.log(item);
   }
});
//  - всі червоні карти
deckOfCards.forEach(item => {
   if (item.color === 'red') {
      console.log(item);
   }
});
//  - всі буби
deckOfCards.forEach(item => {
   if (item.suit === 'Diamond') {
      console.log(item);
   }
});
//  - всі трефи від 9 та більше
deckOfCards.forEach(item => {
   if (item.value !== '6' && item.value !== '7' && item.value !== '8') {
      console.log(item);
   }
});

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// 

newDeckOfCards = deckOfCards.reduce((accumulator, currentValue) => {
      if (currentValue.suit === 'Spade') {
         accumulator.spades.push(currentValue);
      } else if (currentValue.suit === 'Diamond') {
         accumulator.diamonds.push(currentValue);
      } else if (currentValue.suit === 'Heart') {
         accumulator.hearts.push(currentValue);
      } else if (currentValue.suit === 'Club') {
         accumulator.clubs.push(currentValue);
      }
      return accumulator;
      }, {
       spades:[],
       diamonds:[],
       hearts:[],
       clubs:[]
   });

console.log(newDeckOfCards);


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray


let coursesArray = [
   {
       title: 'JavaScript Complex',
       monthDuration: 5,
       hourDuration: 909,
       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
   },
   {
       title: 'Java Complex',
       monthDuration: 6,
       hourDuration: 909,
       modules: ['html',
           'css',
           'js',
           'mysql',
           'mongodb',
           'angular',
           'aws',
           'docker',
           'git',
           'java core',
           'java advanced']
   },
   {
       title: 'Python Complex',
       monthDuration: 6,
       hourDuration: 909,
       modules: ['html',
           'css',
           'js',
           'mysql',
           'mongodb',
           'angular',
           'aws',
           'docker',
           'python core',
           'python advanced']
   },
   {
       title: 'QA Complex',
       monthDuration: 4,
       hourDuration: 909,
       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
   },
   {
       title: 'FullStack',
       monthDuration: 7,
       hourDuration: 909,
       modules: ['html',
           'css',
           'js',
           'mysql',
           'mongodb',
           'react',
           'angular',
           'aws',
           'docker',
           'git',
           'node.js',
           'python',
           'java']
   },
   {
       title: 'Frontend',
       monthDuration: 4,
       hourDuration: 909,
       modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
   }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(item =>  item.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(item =>  item.modules.includes('docker')));