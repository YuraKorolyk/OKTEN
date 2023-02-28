// - створити блок,

const body = document.querySelector('body');

const block1 = document.createElement('div');
// - додати йому класи wrap, collapse, alpha, beta
block1.classList.add('wrap', 'collapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block1.style.cssText = `
background: #f937e4;
color: gray;
font-size: 32px;
`;
block1.textContent = 'Hello everybody';
// - додати цей блок в body.
body.append(block1);
// - клонувати його повністю, та додати клон в body.
const block2 = block1.cloneNode(true);
body.append(block2);


// - Є масив:
const arr = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const list = document.createElement('ul');
for (const item of arr) {
   const link = document.createElement('li');
   link.textContent = item;
   list.append(link);
}
body.append(list);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const obj of coursesAndDurationArray) {
   const cours = document.createElement('div');
   for (const key in obj) {
      cours.textContent += `${key}: ${obj[key]} `;
   }
   body.append(cours);
}


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
//  та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
   const cours = document.createElement('div');
   cours.classList.add('item');
   const h = document.createElement('h1');
   h.classList.add('heading');
   h.textContent = item.title;
   cours.append(h);
   const p = document.createElement('p');
   p.classList.add('description');
   p.textContent = item.monthDuration;
   cours.append(p);
   body.append(cours);
}

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
   {
       name: 'Bart',
       surname: 'Simpson',
       age: 10,
       info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
       photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
   },
   {
       name: 'Homer',
       surname: 'Simpson',
       age: 40,
       info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
       photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
   },
   {
       name: 'Marge',
       surname: 'Simpson',
       age: 38,
       info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
       photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
   },
   {
       name: 'Lisa',
       surname: 'Simpson',
       age: 9,
       info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
       photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
   },
   {
       name: 'Maggie',
       surname: 'Simpson',
       age: 1,
       info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
       photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
   },
];

for (const element of simpsons) {
   const member = document.createElement('div');
   member.classList.add('member');
   member.innerHTML = `
   <h3>${element.name} ${element.surname}</h3>
   <div>${element.age}</div>
   <div>${element.info}</div>
   <img src = ${element.photo}>
   <hr>
   `;
   body.append(member);
}

// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

for (const obj of coursesArray) {
   const objBlock = document.createElement('div');

   const title = document.createElement('h3');
   title.textContent = obj.title;
   objBlock.append(title);

   const month = document.createElement('span');
   month.textContent = `Month duration - ${obj.monthDuration} / `;
   objBlock.append(month);
   
   const hour = document.createElement('span');
   hour.textContent = `Hour duration - ${obj.hourDuration}`;
   objBlock.append(hour);

   const modules = document.createElement('ul');
   for (const module of obj.modules) {
      modules.innerHTML += `<li>${module}</li>`
   }
   objBlock.append(modules);

   body.append(objBlock);
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
//  зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const someText = document.createElement('div');
someText.setAttribute('id', 'text');
someText.textContent = 'bye, dear';
const someBtn = document.createElement('button');
someBtn.textContent = 'click me';
body.append(someText, someBtn);
someBtn.addEventListener('click', () => {
   someText.remove();
});


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту 
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const box = document.createElement('div');
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'enter text';
box.append(input, button);
body.append(box);
button.addEventListener('click', () => {
   if (+input.value < 18) {
      alert('Bye, children!');
   }
   input.value = '';
});

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
const box1 = document.createElement('div');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const button1 = document.createElement('button');
button1.textContent = 'fill all';
box1.append(input1, input2, input3, button1);
body.append(box1);
button1.addEventListener('click', () => {
  const table = document.createElement('table');
   for (let i = 0; i < +input1.value; i++) {
      const tr = document.createElement('tr');
      
      for (let j = 0; j < +input2.value; j++) {
         const td = document.createElement('td');
         td.textContent = input3.value;
         tr.append(td);
      }
      table.append(tr);
   }
   body.append(table)
});