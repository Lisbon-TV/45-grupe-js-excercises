console.clear();

// - Ciklo for panaudojimas:

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0

// const start = 0;
// const end = 0 ;
// const step = 0;
// // let sum = 0;

// for (let i = 0; i <= 0; i = 0) {
//     console.log('->', i, sum);
// }

// console.log(sum);

// 0 … 4

// const start = 0;
// const end = 4;
// const step = 1;
// let sum = 0;

// for (let i = start; i <= end; i += step) { 
//     sum += i;
//     }

// console.log(sum);


// 0 … 100

// const start = 0;
// const end = 100;
// const step = 1;
// let sum = 0;

// for (let i = start; i <= end; i += step) { 
//     sum += i;
//     }

// console.log(sum);


// 574 … 815

// const start = 574;
// const end = 815;
// const step = 1;
// let sum = 0;

// for (let i = start; i <= end; i += step) { 
//     sum += i;
//     }

// console.log(sum);


// -50 … 50


// const start = -50;
// const end = 50;
// const step = 1;
// let sum = 0;

// for (let i = start; i <= end; i += step) { 
//     sum += i;
//     }

// console.log(sum);


// -70 … 30

const start = -70;
const end = 30;
const step = 1;
let sum = 0;

for (let i = start; i <= end; i += step) { 
    sum += i;
    }

console.log(sum);

console.log('....................');


// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

const str = 'abcdef';
let reverseStr = '';


// String index position:
console.log('String index position:');
const reverseAbc =`${str[5]}${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`;
console.log(reverseAbc);
console.log();

// Su for:

for (let i = str.length-1; i >= 0; i-- ) {
    reverseStr += str[i];
}

console.log(`Reverse string with 'for'`);
console.log(reverseStr);
console.log();

//Su char:

let MyReverseStr = '';

for (let i = str.length - 1; i >= 0; i-- ) {
    MyReverseStr += str.charAt(i);
}

console.log(`Reverse string with 'char'`);
console.log(MyReverseStr);
console.log();

// Reverse string function with 'char':

// function reverse() {
//     let MyReverseStr = '';
//     for (let i = str.length - 1; i >= 0; i-- ) {
//         MyReverseStr += str.charAt(i);
// }
// console.log(MyReverseStr);


// Reserse string function with 'split':

console.log('Reverse string with split in a function:');

let reverseStr1 = (str) => {
    let myStr =str.split('')
    let myRev = myStr.reverse().join('');
    return myRev; // jei consoel.log(myRev); tada pateiks 'undefined' reiksme!
}

console.log(reverseStr1(str));

// Tiesiogiai su splitu:

let myStr = str.split('');
let myRev = myStr.reverse().join(''); // cia: logged into a variable!

console.log();
console.log('Tik su splitu:');
console.log(myRev);
// or:
//console.log(myStr.reverse().join(''));
console.log('.............');

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

// 0 - 11

// 8 - 31

// -18 - 18

// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

const multiplier = 3;
// let threeDevision = i * 3;

// for (i = 0; i <= 11; i++ ) {
    




//     }
// }

console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ${multiplier} yra 4 vienetai.`);


/*
devision by 3 --> multiplication by 3,  --> 3 times X number;

0 * 3 = 0  
1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
4 * 3 = 12  --> outside of our interval!

0 .. 4  -> increaces by 1;
3 - > remains the same

Reiskmiu samprata:
0 -> 0        0 ** 0
3 -> 3              3 ** 1
6 -> 3 + 3          3 ** 2
9 -> 3 + 3 + 3      3 ** 3    



*/