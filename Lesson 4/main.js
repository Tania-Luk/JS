
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a,b) {
    return a*b;
}
let number= square (5,6);
console.log(number)
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circlesquare (r) {
    return 3.14*r*r;
}
circlesquare ();
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylindersquare (h, r) {
    return 2*3.14*r*h;
}
cylindersquare ();
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function users (array) {
    for  (const item of array) {
        cosole.log(item)
    }
}
debugger;
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумен
function text(paragraf){
    document.write(`<p>${paragraf}</p>`);
}
text('lorem ipsum');
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list (li){
    document.write(
        `<ul>
            <li>${li}</li>
            <li>${li}</li>
            <li>${li}</li>
        </ul>`)
}
list ('hello');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function playlist (li,number){
    document.write(`<ul>`);
    for (let i=0; i<number; i++){
            document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}
playlist ('JS', 8);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function elements (primitivElements){
    document.write(`<ul>`);
    if (primitivElements === number){
        document.write (``)
    }
        document.write(`<li>${primitivElements}</li>`)
    }
    document.write(`</ul>`)
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400