console.clear();

// - Ciklo for panaudojimas:

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0

// 0 … 4


// 0 … 100


// 574 … 815


// -50 … 50


// -70 … 30


// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

const str = 'abcdef';
let reverseStr = '';

// for (let i = str.length-1; i >= 0; i-- ); {
//     reverseStr += str[i];
// }

// console.log(reverseStr);

// for (let i = str.length - 1; i >= 0; i-- ); {
//     reverseStr += str.charAt(i);
// }

// console.log(reverseStr);


// Su splitu:

let myStr = str.split('');
let myRev = myStr.reverse().join('');
console.log(myRev);


// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

// 0 - 11

// 8 - 31

// -18 - 18

// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

