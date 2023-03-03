// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
const localArr = JSON.parse(localStorage.getItem('arr')) || [];
console.log(localArr);
const box = document.querySelector('#container');
// for (let i = 0; i < localArr.length; i++) {
//     let div = document.createElement('div');
//     div.textContent = loc
// }
for (const item of localArr) {
    let div = document.createElement('div');
    div.textContent = item;
    box.append(div);
}