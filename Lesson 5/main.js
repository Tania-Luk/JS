// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square=(a,b) => a*b;

let number= square (5,6);
console.log(number);
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circlesquare =(r)=>3.14*r*r;
circlesquare ();
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylindersquare =(h, r) => 2*3.14*r*h;
cylindersquare ();
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let users=(array)=> {
    for (const item of array)
        cosole.log(item);
    }
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумен
// let text=(paragraf)=>
//     document.write (`<p>${paragraf}</p>`);
// text ('lorem ipsum');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let list= (li)=>
    document.write(
        `<ul>
            <li>${li}</li>
            <li>${li}</li>
            <li>${li}</li>
        </ul>`);
list ('hello');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
let playlist =(li,number)=> {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}
playlist ('JS', 8);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// let elements = (primitivElements)=> {
//     document.write(`<ul>`);
//     for (const item of primitivElements){
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// elements (123,'ghju', true, false);
// // // #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let foobar =(users)=> {
    for (const user of users){
        document.write (`<div>${user.id} ${user.name} ${user.age} </div>`);
    }
}
foobar ([
    {id:1, name: 'x', age: 12},
    {id:2, name: 'e', age: 13},
    {id:3, name: 'w', age: 14},
    {id:4, name: 'q', age: 15}
])
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let arrmin= (numbers)=> {
    let min = numbers[0];
    for (let i =1; i<numbers.length; i++){
        let number = numbers[i];
        if (number < min) {
            min=number
        }
    }
}
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum=(arr)=> basket=basket+item;
//
// console.log (sum([1, 2, 10]))
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap =(arr,index1,index2)=> {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
console.log( swap([11,22,33,44],0,1));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange=(sumUAH,currencyValues,exchangeCurrency)=> {
    let choosenCurrency;
    for(const item of currencyValues){
        if (item.currency === exchangeCurrency){
            choosenCurrency =item;
        }
        let result= sumUAH/choosenCurrency.value
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))

