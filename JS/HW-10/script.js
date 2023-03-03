// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numBox = document.querySelector('.numer-box');
// localStorage.clear()
let counter = +localStorage.getItem('counter') || 0;
counter++;
localStorage.setItem('counter', counter.toString());
numBox.textContent = counter;
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let data = new Date();
// console.log(data)
sessions = JSON.parse(localStorage.getItem('arr')) || [];
sessions.push(new Date());
localStorage.setItem('arr', JSON.stringify(sessions));



document.querySelector('#btn').addEventListener('click', ()=> localStorage.clear());

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
mainArr = []
const createMainArr = (arr, n) => {
    for (let i = 0; i < n; i++) {
        arr.push({good1:`good ${i+1}`});
    }
}
createMainArr(mainArr, 100);

const goodsContainer = document.querySelector('#goods-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let min = 0;
let max = 10;
const showArr = (min, max) => {
    goodsContainer.innerHTML = '';
    for (let i = min; i < max; i++) {
        for (const key in mainArr[i]) {
            goodsContainer.innerHTML += `${mainArr[i][key]} `
        }
    }
}
showArr(min, max);
prevBtn.addEventListener('click', () => {
    if (min > 0) {
        min -= 10;
        max -= 10;
        console.log(min, max);
        showArr(min, max);
    }
});
nextBtn.addEventListener('click', () => {
    if (max < 100) {
        min += 10;
        max += 10;
        console.log(min, max);
        showArr(min, max);
    }
});

