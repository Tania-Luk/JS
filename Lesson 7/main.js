
//#XjJuucOMR0//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//    function User (id, name, surname, email, phone){
//         this.id= id;
//         this.name = name;
//         this.surname =surname;
//         this.email =email;
//         this.phone = phone;
//    }
//    const user = new User(1, 'ola','','22@111', '+234567');
//
// let users= [
//     new User(1, 'ola','','22@111', '+234567'),
//     new User(2, 'kola','','22@111', '+234567'),
//     new User(3, 'vova','','22@111', '+234567'),
//     new User(4, 'vasya','','22@111', '+234567'),
//     new User(5, 'tania','','22@111', '+234567'),
//     new User(6, 'lena','','22@111', '+234567'),
//     new User(7, 'dima','','22@111', '+234567'),
//     new User(8, 'katia','','22@111', '+234567'),
//     new User(9, 'vera','','22@111', '+234567'),
//     new User(10, 'tim','','22@111', '+234567'),
// ]
// console.log(users);
// // #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter (user =>user.id %2 === 0));
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log (users.sort ((user1,user2) => user1.id -  user2.id))

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client (id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// const client = new Client(1, 'anna','','22@111', '+234567', ['oil','bread','butter','milk']);
//
// let clients = [
//     new Client (1, 'anna','','22@111', '+234567', ['oil','bread']),
//     new Client (2, 'anna','','22@111', '+234567', ['oil','bread','butter','milk']),
//     new Client (3, 'anna','','22@111', '+234567', ['milk','eggs']),
//     new Client (4, 'anna','','22@111', '+234567', ['oil','bread','peach','milk']),
//     new Client (5, 'anna','','22@111', '+234567', ['oil','bread','butter','milk']),
//     new Client (6, 'anna','','22@111', '+234567', ['oil','bread','butter','milk','onion']),
//     new Client (7, 'anna','','22@111', '+234567', ['oil','bread','butter']),
//     new Client (8, 'anna','','22@111', '+234567', ['oil','bread','butter','milk','potato','onion']),
//     new Client (9, 'anna','','22@111', '+234567', ['oil','bread','butter','milk']),
//     new Client (10, 'anna','','22@111', '+234567', ['oil','bread','butter','milk','wipes']),
// ];
// console.log(clients);
// //
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort(( client1, client2) => client1.order.length - client2.order.length ));
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engineSize){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineSize = engineSize;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         for (const key in this){
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > 0) this.maxSpeed= this.maxSpeed + newSpeed
//     };
//     this.changeYear = function (newValue){
//         if (newValue >1815) this.year=newValue
//     };
//     this.addDriver =function (driverObject){
//             this.driver= driverObject
//         }
//     }
// const car = new Car('asd', 'qwe', 1234, 122, 4);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor (model, producer, year, maxSpeed, engineSize){
//     this.model = model;
//     this.maxSpeed = maxSpeed;
//     this.engineSize = engineSize;
//     }
//    drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//    info (){
//         for (const key in this){
//             console.log(key, this[key]);
//         }
//     };
//    increaseMaxSpeed (newSpeed) {
//         if (newSpeed > 0) this.maxSpeed= this.maxSpeed + newSpeed
//     };
//     changeYear (newValue){
//         if (newValue >1815) this.year=newValue
//     };
//     addDriver (driverObject){
//         this.driver= driverObject
//     }
// }
// const car = new Car('asd', 'qwe', 1234, 122, 4);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(2000);
// car.addDriver({});
// console.log(car);

//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// const cinderellas =[
//     new Cinderella( 'Anastasia', '18', '35'),
//     new Cinderella( 'Anastasia', '19', '35.5'),
//     new Cinderella( 'Anastasia', '20', '36'),
//     new Cinderella( 'Anastasia', '17', '36.5'),
//     new Cinderella( 'Anastasia', '16', '37'),
//     new Cinderella( 'Anastasia', '21', '37.5'),
//     new Cinderella( 'Anastasia', '22', '35'),
//     new Cinderella( 'Anastasia', '23', '36'),
//     new Cinderella( 'Anastasia', '24', '37'),
//     new Cinderella( 'Anastasia', '25', '38'),
// ]
// class prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// new prince ('Greg', '28', '35.5');
//
// for (cinderella of cinderellas){
//     if (cinderella.footSize === prince.shoe ){
//         prince.wife=cinderella
//     }
// }
// const cinderellaMain= cinderellas.find( cinderella => cinderella.footSize === prince.shoe)
// prince.wife=cinderellaMain;

//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
// Array.prototype.myForEach = function (callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
//
// [11, 22, 33].myForEach((x) => console.log(x))

// Array.prototype.myFilter = function (predicate) {
//     const arr = [];
//     for (const item of this) {
//         if (predicate(item)) {
//             arr.push(item);
//         }
//     }
//     return arr;
// };
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// const result = users.myFilter((user) => user.status);
// console.log(result);
