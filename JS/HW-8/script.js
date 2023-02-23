// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) { 
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.email = email;
   this.phone = phone; 
}
let users = [
   new User(2, 'name2', 'surname2', 'email2@gmail.com', '0930000002'),
   new User(9, 'name9', 'surname9', 'email9@gmail.com', '0930000009'),
   new User(3, 'name3', 'surname3', 'email3@gmail.com', '0930000003'),
   new User(8, 'name8', 'surname8', 'email8@gmail.com', '0930000008'),
   new User(1, 'name1', 'surname1', 'email1@gmail.com', '0930000001'),
   new User(4, 'name4', 'surname4', 'email4@gmail.com', '0930000004'),
   new User(7, 'name7', 'surname7', 'email7@gmail.com', '0930000007'),
   new User(10, 'name10', 'surname10', 'email10@gmail.com','0930000010'),
   new User(5, 'name5', 'surname5', 'email5@gmail.com', '0930000005'),
   new User(6, 'name6', 'surname6', 'email6@gmail.com', '0930000006'),
]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
evenUsers = users.filter(e => e.id%2===0);
console.log(evenUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
idSortedUsers = [...users];
idSortedUsers.sort((a, b) => a.id - b.id);
console.log(idSortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
   constructor(id, name, surname, email, phone, order) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.order = order;
   }
}
let clients = [
   new Client(2, 'name2', 'surname2', 'email2@gmail.com', '0930000002', ['rum', 'brandy', 'wine', 'gin']),
   new Client(9, 'name9', 'surname9', 'email9@gmail.com', '0930000009', ['vodka', 'cider', 'bear']),
   new Client(3, 'name3', 'surname3', 'email3@gmail.com', '0930000003', ['whiskey', 'gin', 'wine']),
   new Client(8, 'name8', 'surname8', 'email8@gmail.com', '0930000008', ['rum']),
   new Client(1, 'name1', 'surname1', 'email1@gmail.com', '0930000001', ['tequila', 'lequor']),
   new Client(4, 'name4', 'surname4', 'email4@gmail.com', '0930000004', ['vodka', 'bear']),
   new Client(7, 'name7', 'surname7', 'email7@gmail.com', '0930000007', []),
   new Client(10, 'name10', 'surname10', 'email10@gmail.com','0930000010', ['brandy', 'wine', 'gin']),
   new Client(5, 'name5', 'surname5', 'email5@gmail.com', '0930000005', ['bear', 'gin', 'cider']),
   new Client(6, 'name6', 'surname6', 'email6@gmail.com', '0930000006', ['wine', 'lequor']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = [...clients];
sortedClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//  додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, maker, year, maxSpeed, engineV) {
   this.model = model;
   this.maker = maker;
   this.year = year;
   this.maxSpeed = maxSpeed;
   this.engineV = engineV;
}
Car.prototype.drive = function() {
   console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
Car.prototype.info = function() {
   for (let key in this) {
      if (typeof(this[key]) != 'function') {
         console.log(`${key} - ${this[key]}`);
      }
   }
}
Car.prototype.increaseMaxSpeed = function(newSpeed) {
   this.maxSpeed = newSpeed;
}
Car.prototype.changeYear = function(newValue) {
   this.year = newValue;
}
Car.prototype.addDriver = function(driver) {
   this.driver = driver;
}   

const acura = new Car('TLX', 'Acura', 2015, 210, 2.4);
console.log(acura);
acura.drive();
acura.info();
acura.increaseMaxSpeed(230);
acura.changeYear(2020);
acura.addDriver({driver1: 'ivan', driver2: 'vasya'});
console.log(acura);


// same using class
class Car2 { 
   constructor (model, maker, year, maxSpeed, engineV) {
      this.model = model;
      this.maker = maker;
      this.year = year;
      this.maxSpeed = maxSpeed;
      this.engineV = engineV;
   }
   drive () {
      console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
   }
   info () {
      for (let key in this) {
         if (typeof(this[key]) != 'function') {
            console.log(`${key} - ${this[key]}`);
         }
      }
   }
   increaseMaxSpeed (newSpeed) {
      this.maxSpeed = newSpeed;
   }
   changeYear(newValue) {
      this.year = newValue;
   }
   addDriver(driver) {
      this.driver = driver;
   }
}

const acura2 = new Car2('TLX', 'Acura', 2015, 210, 2.4);
console.log(acura2);
acura2.drive();
acura2.info();
acura2.increaseMaxSpeed(230);
acura2.changeYear(2020);
acura2.addDriver({driver1: 'ivan', driver2: 'vasya'});
console.log(acura2);



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
   constructor(name, age, footSize) {
      this.name = name;
      this.age = age;
      this.footSize = footSize;
   }
}
let cinderellas = [
   new Cinderella('Cinderella1', 10, 32),
   new Cinderella('Cinderella2', 37, 40),
   new Cinderella('Cinderella3', 83, 37),
   new Cinderella('Cinderella4', 62, 38),
   new Cinderella('Cinderella5', 15, 36),
   new Cinderella('Cinderella6', 28, 38),
   new Cinderella('Cinderella7', 33, 35),
   new Cinderella('Cinderella8', 41, 39),
   new Cinderella('Cinderella9', 19, 41),
   new Cinderella('Cinderella10', 24, 35),
]

class Prince extends Cinderella {
   constructor(name, age, footSize) {
      super(name, age, footSize);
   }
}
const prince = new Prince('Prince1', 44, 36);
for (el of cinderellas) {
   if (prince.footSize === el.footSize) {
      console.log(`${prince.name} should be with ${el.name}`);
   }
}
console.log(cinderellas.find(i => i.footSize==prince.footSize));
