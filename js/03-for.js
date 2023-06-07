console.clear();

// - Ciklo for panaudojimas:

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0


// CIA! Reikejo apjungti, iskelti viska i funkcija!!!!!

function sumaIntervale(nuo, iki) {
    let suma = 0;

    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }

    return suma;
}

console.log(0, 0, '->', 0, ':', sumaIntervale(0, 0));
console.log(0, 1, '->', 1, ':', sumaIntervale(0, 1));
console.log(0, 2, '->', 3, ':', sumaIntervale(0, 2));
console.log(0, 3, '->', 6, ':', sumaIntervale(0, 3));
console.log(0, 4, '->', 10, ':', sumaIntervale(0, 4));
console.log(-50, 50, '->', 0, ':', sumaIntervale(-50, 50));
console.log(-70, 30, '->', 0, ':', sumaIntervale(70, 30));

/* All OK on individual bases:

// const start = 0;
// const end = 0 ;
// const step = 0;
// // let sum = 0;

// for (let i = 0; i <= 0; i = 0) {
//     console.log('->', i, sum);
// }

// console.log(sum);

// 0 … 4

// for (let i = 0; i <= 4; i++) {
//     console.log(`1-b:` + i);}

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

// const start = -70;
// const end = 30;
// const step = 1;
// let sum = 0;

// for (let i = start; i <= end; i += step) { 
//     sum += i;
//     }

// console.log(sum);

console.log('....................');

*/

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

const str = 'abcdef';
let reverseStr = '';


const word = 'abcdef';

let reverseWord = '';

console.log('Atvirksciai parasytas stringas: ' + reverseWord);

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

console.log();

// Tiesiogiai su splitu:

let myStr = str.split('');
let myRev = myStr.reverse().join(''); // cia: logged into a variable!

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

// DESTYTOJO SPENDIMAS -> Isnagrinek, kodel taip!

// naudojo function:

// [0..11] / 3 -> 4
// [0..11] / 5 -> 3
// [0..11] / 7 -> 2

function count(nuo, iki, daliklis) {
    let kiekis = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            kiekis++;
        }
    }

    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`;
}

console.log(count(0, 11, 3));
console.log(count(0, 11, 5));
console.log(count(0, 11, 7));

console.log(count(0, 10, 2));
console.log(count(0, 10, 5));
console.log(count(0, 10, 10));

// Even better:

/*
function intervale(nuo, iki) {
    return iki * (iki + 1) / 2;
}

console.log(intervale(0, 1));
console.log(intervale(0, 2));
console.log(intervale(0, 3));
console.log(intervale(0, 4));
console.log(intervale(0, 5));
console.log(intervale(0, 10));
console.log(intervale(0, 100));
console.log(intervale(0, 1000));
console.log(intervale(0, 1000_000));
console.log(intervale(0, 1000_000_000));
console.log(intervale(0, 1000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000));
console.log(intervale(0, 1000_000_000_000_000_000));
*/

// let start1 = 0;
// let end1 = 11;

// let skaicius = 7;
// let beLiekanos = 0;

// let intervalas = (start1, end, skaicius) => {
//      for(let i = start; i <= end; i++){
//          if(i % skaicius === 0){
//              beLiekanos++;
//             }
//         } return `Skaičių intervale tarp ${start1} ir ${end1}, besidalijančių be liekanos iš ${skaicius} yra ${beLiekanos} vienetai.`;
//     }
//  console.log(intervalas(start1, end1, skaicius));


/// Visa kita, ignore!!! 


/// Andriaus  pvz.. ???.... pasinagrinek!
// const start = 0;
// const end = 11;
// const step = 1;

// let beLiekanos = 0;

// for (i = start; i <= end; i++ ) {
//     const beLiekanos = end[i];
//     if (beLiekanos % 3 === 0); {
//     beLiekanos++;
//     }
//  }

//console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.`);

// Kesto pvz.. ???.... pasinagrinek!
// for (let i = 0; i <= 11 ; i++) {
//     const a = [];
//    for (let n = 0; ai % 3; n++ ) {
//        console.log(n);
//     }
// }

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