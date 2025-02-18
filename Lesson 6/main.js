// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str='hello world';
// console.log(str);
// let str='lorem ipsum';
// // console.log(str);
// let str='javascript is cool';
// console.log(str);
//
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s='hello world';
// const s1 =s.toUpperCase();
// console.log(s1);
// let s='lorem ipsum';
// const s1 =s.toUpperCase();
// console.log(s1);
// let s='javascript is cool';
// const s1 =s.toUpperCase();
// console.log(s1);
//
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s='HELLO WORLD';
// const s1 =s.toUpperCase();
// console.log(s1);
// let s='lorem ipsum';
// const s1 =s.toUpperCase();
// console.log(s1);
// let s='javascript is cool';
// const s1 =s.toUpperCase();
// console.log(s1);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let s=' dirty string   ';
// const s1 =s.trim();
// console.log(s1);

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToArray(str) {
//     if (str) {
//         const split = str.split(' ');
//         return split;
//     }
//     return [''];
// }
// console.log(stringToArray('Ревуть воли як ясла повні'));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let strings = numbers.map( number => number+'');
// console.log(strings);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// function sortNums(arrayOfNums, direction) {
//     if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);
// }
// console.log(sortNums(nums,'ascending'));
// console.log(sortNums(nums,'descending'))
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const map1 = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({...value, id: index + 1}));
// console.log(map1);
// // =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
const suits=['spade', 'diamond','heart', 'clubs'];
const values=['6','7','8','9','10', 'jack','queen','king','ace'];
const cards=[]
for (const suit of suits){
    for(const value of values){
        const card = { cardSuit: suit, value: value}
        if (suit === 'heart' || suit ==='diamond' ){
            card.color = 'red'
        } else(suit === 'spade' || suit === 'clubs' )
        {
            card.color = 'black'
        }
        cards.push(card);
    }
}
// console.log(cards);
// console.log(cards.find (card=> card.value === 'ace' && card.cardSuit === 'spade'));
// console.log(cards.filter (card => card.value === '6'));
// console.log(cards.filter (card => card.color === 'red'));
// console.log(cards.filter (card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));


//=========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const reduce= cards.reduce((accum, card) => {
//     switch  (card.cardSuit){
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//         case 'clubs':
//             accum.clubs.push(card);
//             break;
//     }
//         return accum;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce)
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
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
console.log(coursesArray.filter(course => course.modules.includes ('sass')));
console.log(coursesArray.filter(course => course.modules.includes ('docker')))