// console.log('Hello world');
// console.log('Hello' + 'world'); // Конкотенация

// alert('Hello'); 
// = Означает присвоить 
// document.getElementById('out').innerHTML = 'hello';
// document.getElementById('out').innerHTML = '<b>hello</b>';
// // document.querySelector('.header').innerHTML = 'bild';
// let a  = document.querySelector('.header');
// a.innerHTML = 'bild';

// console.log(a);



// let inputIn = document.querySelector('.input-in');
// let btn  = document.querySelector('button');
// let div = document.querySelector('.output')

// btn.onclick = function(){

// //let b = +inputIn.value; // + позволяет перевести в число при конкотынации 
// div.innerHTML = b;
// inputIn.value = '';
// console.log(b);
// }
// < > <= >= == != 
// let one = 19
// if ( one == 9){
//     console.log ('True')
// }
// else {
// console.log ('False')
// }
// const input = document.querySelector('.age');
// const button = document.querySelector('button'); 
// Стрелочная функция () =>
// && - Знеачение "И" с его помощою мажно задать диапазон
// || - Значение "Или" если что-то из одного верно 
// button.onclick  = () => {
//     let num = +input.value;
//  if (num >= 16 && num < 60 ){
//     console.log ('Welcome')
// }
//  else if ( num > 60){
//     console.log ('Who are you?')
//     }
// else {
//     console.log ('Error')
// }
// }
// switch case 
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }

// document.querySelector('#form').oninput = () => {
// console.log(document.querySelector ('#form').value);
// document.querySelector('span').innerHTML = document.querySelector ('#form').value
// }


// for while do while 
// for (старт; работаем пока верно; счётчик){}

//let table = document.querySelector('.table');
// for (let i = 1; i < 10; i++) {
//     table.innerHTML +=  `3*${i}=${3 * i}<br>`;
    
// }

// for (i = 0; i < 4; i++){
//     table.innerHTML +=  i + '<br>' ;
//     for (k = 0; k < 3; k++){
//     table.innerHTML += '*' + '_' ;
//     }
//     table.innerHTML += '<br>' ;
// }

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas. length; i++) {
gas [i]. onclick = function () {
let gallons = document.querySelector('.gallons').value;
let amount = this.getAttribute('data');
console. log(gallons * amount);
}}