// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr=[1,2,3,4,5,6,7,8,9,10];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={title: 'Bible', pageCount: 999, genre: 'religion'}
let book2={title: 'Wind', pageCount: 432, genre: 'adventure'}
let book3={title: 'Tom', pageCount: 123, genre: 'kids'}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title: 'Bible',
    pageCount: 999,
    genre: 'religion',
    authors: [{name: 'xxx', age: 123},{name: 'xxx', age: 123}]
}
let book5= {
    title: 'Wind',
    pageCount: 432,
    genre: 'adventure',
    authors: [{name: 'xxx', age: 123}, {name: 'xxx', age: 123}]
}
let book6= {
    title: 'Tom',
    pageCount: 123,
    genre: 'kids',
    authors: [{name: 'xxx', age: 123}, {name: 'xxx', age: 123}]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//      Вивести в консоль пароль кожного користувача
let user1= {name: 'aaa',username:'aa',password:'a'};
let user2= {name: 'bbb',username:'bb',password:'b'};
let user3= {name: 'ccc',username:'cc',password:'c'};
let user4= {name: 'ddd',username:'dd',password:'d'};
let user5= {name: 'eee',username:'ee',password:'e'};
let user6= {name: 'fff',username:'ff',password:'f'};
let user7= {name: 'ggg',username:'gg',password:'g'};
let user8= {name: 'hhh',username:'hh',password:'h'};
let user9= {name: 'jjj',username:'jj',password:'j'};
let user10={name: 'kkk',username:'kk',password:'k'};
console.log(user1.password);
console.log(user2.password);
console.log(user3.password);
console.log(user4.password);
console.log(user5.password);
console.log(user6.password);
console.log(user7.password);
console.log(user8.password);
console.log(user9.password);
console.log(user10.password);
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису
//     - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let monday={morning:3, afternoon:7, evening: 4};
let tuesday={morning:4, afternoon:9, evening: 2};
let wednesday={morning:0, afternoon:6, evening: 4};
let thursday={morning:3, afternoon:10, evening: 2};
let friday={morning:0, afternoon:7, evening: 4};
let saturday={morning:1, afternoon:13, evening: 6};
let sunday={morning:4, afternoon:14, evening: 5};

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=22;
if (x!==0){console.log('Вірно');}
else {console.log('Невірно');}
let a=1;
if(a!==0){console.log('Вірно');}
else{console.log('Невірно');}
let b=0;
if(b!==0){console.log('Вірно');}
else{console.log('Невірно');}
let c=-3;
if(c!==0){console.log('Вірно');}
else{console.log('Невірно');}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=15;
if(time>=0 && time <=15){
    console.log('1');
}else if(time>15 && time<=30){
    console.log('2');
}else if(time>30 && time<=45){
    console.log('3');
}else if(time>45 && time<=60){
    console.log('4');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day=31;
if(day>=1 && day<=10){
    console.log('1');
}else if(day>10 && day<=20){
    console.log('2');
}else if(day>20 && day<=31) {
    console.log('3');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
//     і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week='7';
switch (week) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
}
//     - Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let q=3;
let w=1;
if(q > w){
    console.log(q)
}else if(w>q) {
    console.log(w)
}else if(w===q){
    console.log('xxx');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
//     falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y=0;
if(!y){
    y='default';
}
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//         У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if(coursesAndDurationArray[0].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log("Супер");
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log("Супер");
}
