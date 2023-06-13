console.clear();

/*
Funkcijos

Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
*/


// Funkcija pavadinimu “tusciaFunkcija”:
// nepriima jokių kintamųjų

tusciaFunkcija();

// neatlieka jokios vidinės logikos

function tusciaFunkcija() {

}

// gražina boolean tipo reikšmę “false”

function tusciaFunkcija() {
    return false;
}

/*
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

console.log(tusciaFunkcija());

/*
Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą

TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;
*/

/* Neteisingas sprendimas!!! 

console.log('.............');

function daugyba(pirmasSkaicius, antrasSkaicius) {
    return pirmasSkaicius * antrasSkaicius
}

const skaicius1 = 3;
const skaicius2 = 5;
const skaicius3 = 8;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
*/

// Teisingas prendimas, pateikstas paskaitos metu:

console.clear();

function multiply(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = a * b;
    return rez;
}

function multiply(c, b) {
    if (typeof c !== 'number' || !isFinite(c)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = c * b;
    return rez;
}


function multiply(a, c) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof c !== 'number' || !isFinite(c)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = a * c;
    return rez;
}

console.log(multiply('labas', 2));
console.log(multiply('5', 2));
console.log(multiply([], 2));
console.log(multiply(true, 2));
console.log(multiply(false, 2));
console.log(multiply(multiply, 2));
console.log(multiply(undefined, 2));
console.log(multiply(7, 'labas'));
console.log(multiply(7, '5'));
console.log(multiply(7, []));
console.log(multiply(7, true));
console.log(multiply(7, false));
console.log(multiply(7, multiply));
console.log(multiply(7, undefined));
console.log(multiply(NaN, 2));
console.log(multiply(Infinity, 2));
console.log(multiply(-Infinity, 2));
console.log(multiply(7, NaN));
console.log(multiply(7, Infinity));
console.log(multiply(7, -Infinity));

console.log('------------');
console.log(multiply(2, 2), '->', 4);
console.log(multiply(7, 5), '->', 35);
console.log(multiply(-7, 5), '->', -35);
console.log(multiply(7, -5), '->', -35);
console.log(multiply(-7, -5), '->', 35);
console.log(multiply(0, -5), '->', 0);
console.log(multiply(0, 5), '->', 0);
console.log(multiply(-5, 0), '->', 0);
console.log(multiply(5, 0), '->', 0);
console.log(multiply(0.5, 0.5), '->', 0.25);
console.log('------------');


/*
Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/

// Klaseje, atliktas uzduoties sprendimas:

/*
function biggestNumber(list) {
    // VALIDACIJOS
    if (!Array.isArray(list)) {
        return 'ERROR: duok array tipo reiksme.';
    }

    if (list.length === 0) {
        return 'ERROR: Pateiktas sąrašas negali būti tuščias.';
    }

    // LOGIKA
    let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (typeof item !== 'number' || !isFinite(item)) {
            continue;
        }

        if (item > max) {
            max = item;
        }
    }

    // LOGIKOS REZULTATO VALIDACIJA
    if (max === -Infinity) {
        return 'ERROR: array neturi nei vieno normalaus skaiciaus';
    }

    // REZULTATO GRAZINIMAS
    return max;
}

console.log(biggestNumber(248562));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));
console.log(biggestNumber(false));
console.log(biggestNumber(biggestNumber));
console.log(biggestNumber());
console.log(biggestNumber(undefined));
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log('-------------------------');
console.log(biggestNumber([]));
console.log('-------------------------');
console.log(biggestNumber([1]), '->', 1);
console.log(biggestNumber([2]), '->', 2);
console.log(biggestNumber([777]), '->', 777);
console.log(biggestNumber([1, 2, 3]), '->', 3);
console.log(biggestNumber([11, 22, 33]), '->', 33);
console.log(biggestNumber([11, 22, 33, 44]), '->', 44);
console.log(biggestNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggestNumber([-333, -44, -5, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-5, -333, -44, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-333, -44, -66, -777, -8, -5]), '->', -5);
console.log('-------------------------');
console.log(biggestNumber(['labas']));
console.log(biggestNumber([true, false]));
console.log(biggestNumber([true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));
console.log(biggestNumber([5, true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));
*/


console.log(); // paskaitos isnarpliotas sprendimas:

function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: duok skaiciu.';  // error boolean'ui, strings!
    }
    if (isNaN(number)) {
        return 'ERROR: duok normalu skaiciu, o ne NaN.'; // tikslesne NaN zinute!
    }
    if (number === Infinity || number === -Infinity) { //error for infinities!
        return 'ERROR: duok normalu skaiciu, o ne begalybe.';
    }

// if (number < 0);  persikelti pries const, bet nevisada gali suveikti!
//     number *= -1;

    // Pirmas zingsnis: 
    const numberAsString = '' + number;
    // arba: const numberAsString = number.toString();
    // vist web: js string methods.. seach.
    let size = numberAsString.length;
    // kadangi .length turi tik strings ir arrays, 
    // cia reikia skaiciu padaryti stringu, t.y. "sustringinti"!
    // pirmas testas i console: console.log(numberLength(5), '->', 1);
    // tokiu reikia bent dvieju su didesniais skaiciais!

    //arba galima: (.replace tori du dominators! ka? ir i ka?)
    // const numberToString = number.toString().replace('.','');
    // arba:
    // const numberto String = ('' + number).replace('.', '');

    // klaseje tikrinom.. .fixedNumber
    // jei stringas neturi nieko po kablelio:
    // if f = number.toFixed(0);
    //
    // if (NumberAsString !== number.tofixed(0)) // suzinom, kur . !
    //   return numberAsString.length - 1;  // cia atimam . (vienu perdaug)!

    // tikriname ar yra minusas?
    if (number < 0) {  // visada bus neigiami
        size--;        // sumazinam vienu vienetu
    }

    // tikriname ar skaicius yra desimtainis?
    if (number % 1 !== 0) {    // jei liekana 0, imanoma tik kai sveikas skaiciu!
        size--;     // reikia sumazinti vienu vienetu!
    }

    return size;
}

// Privalomi testai:

// antras testas - boolean, grazina stringo ilgio reiksmes
// is 'true' ir 'failse':
console.log(numberLength(true));
console.log(numberLength(false));
// tada tikrinam pacio sring reiksme
console.log(numberLength('asd'));
// itraukiam NaN, pan, kaip boolean, 
// naudoti atskirai if ... tikslesne zinute kodui:
console.log(numberLength(NaN));
// issirenkame infinities: 
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
// tada issitestuojam, undefined, 
console.log(numberLength(undefined));
// tuscia funcija, kaip undefined,
console.log(numberLength());
// tuscia array, kaip undefined;
console.log(numberLength([]));
// funkcija, kaip undefined;
console.log(numberLength(numberLength));



console.log('--------------------------------');
// Nauji atvejai, kurie bus klaidingi:

console.log(numberLength(5), '->', 1); // no 5 skaitmuo yra 1
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);

// Visi kiti nauji atvejai, kurie bus klaidingi:
// Turi buti min 2 testai, pamatyti ar nera uzhardkodinti...
console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);

// Issitestuojam floats, t.y. decimal, kartu su minusais: 
console.log(numberLength(3.14), '->', 3);
console.log(numberLength(2.727), '->', 4);
console.log(numberLength(-3.14), '->', 3);
console.log(numberLength(-2.727), '->', 4);

/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/
console.clear();

// start with cheat:
// function biggestNumber() {
//     return 1
// }

// Try with max (pirmas testas)
// function biggestNumber(list) {
//    const max = list [0]; // cia paduos tik, jei array susidares is vieno sk.!
//          // logika,..    
//      return max
// }

// Try with max (antas testas)
// function biggestNumber(list) {
//    const max = list [list.lenght -1]; // cia paduos tik, jei array susidarys is keliu sk.!
//          // logika,..    
//      return max
// }


// Rimtai pradedam spresti, ziur apacioje papildomus testus... 
function biggestNumber(list) {
    // if (typeof list !== 'object'); { // Penktas testas
    // if (typeof list !== 'object' || list === null) {;  // Septintas testas: Null!
    if (!Array.isArray(list)) {  // Astuntas testas - {}, kaip atpazinti array, ar ne array! ATSIMINTI!!!!
        return 'ERROR: duok array tipo reiksme.';
    }

    if (list.length === 0) {  // Jei array yra tuscias!
        return 'ERROR: Pateiktas sąrašas negali būti tuščias.';
    }
        
 // LOGIKA

  // let max = 0;  // is pradziu isivaizduojame, kad didz. sk yra nulis!
 let max = -Infinity;

 for (let i = 0; i < list.length; i++) {
     const item = list[i];
     if (typeof item !== 'number' || !isFinite(item)) {
         continue;
     }

     if (item > max) {
         max = item;
     }
 }

 // LOGIKOS REZULTATO VALIDACIJA
 if (max === -Infinity) {
     return 'ERROR: array neturi nei vieno normalaus skaiciaus';
 }

 // REZULTATO GRAZINIMAS
 return max;
}


// Pirmas testas, kai array turi savyje tik viena skaiciu: 
console.log(biggestNumber([1]), '->' , 1);
console.log(biggestNumber([2]), '->' , 2);
// Antras testas, kai array turi savyje daugiau skaiciu: 
console.log(biggestNumber([1, 2, 3]), '->' , 3);
// Trecias testas: pask masyve skaicius - didziausias:
console.log(biggestNumber([777]), '->', 777);
console.log(biggestNumber([1, 2, 3]), '->', 3);
console.log(biggestNumber([11, 22, 33]), '->', 33);
console.log(biggestNumber([11, 22, 33, 44]), '->', 44);
// Ketvirtas testas, didziaus sk masyvo viduryje: (galutinai pakartotinai susitikrinam!)
console.log(biggestNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log('************');
// Tuomet reikia atlikti testai su standartiniais atmetimais: ..
// Penktas testas, sugauna ne arrays
console.log(biggestNumber(248562));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));
console.log(biggestNumber(false));
console.log(biggestNumber(biggestNumber));
console.log(biggestNumber());
console.log(biggestNumber(undefined));
// Septintas testas, papildomos reiskmes:
console.log(biggestNumber(null));
// Astuntas testas, {} -tkras objektas!, jo atpazinimas yra per Array.isArray(list)  (be !)!!!!!
console.log(biggestNumber({}));
// Testas su tusciu stringu: 
console.log(biggestNumber([]));
// Devintas testas su neigiamais skaiciais, ribiniai atvejai, 
// ir ar per visas pozicijas pereinam:
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggestNumber([-333, -44, -5, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-5, -333, -44, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-333, -44, -66, -777, -8, -5]), '->', -5);
// Desimtas (netipinis)testas, kaip viduj bordakas:
console.log(biggestNumber(['labas']));
console.log(biggestNumber([true, false]));
console.log(biggestNumber([true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));
console.log(biggestNumber([5, true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));

//PASTABOS: susikurtin string, array atmetimu sablonus, kai string tuscias, t.t.


/*
Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/
console.log(`Funkcija pavadinimu “isrinktiRaides”`);

function letters(str, step) {
    if (typeof str !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'Antrasis kintamasis turi buti normalus skaicius.';
    }
    if (step > str.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    if (step === 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (step % 1 !== 0) {
        return 'Antrasis kintamasis turi būti sveikasis skaicius.';
    }

    let shortText = '';

    if (step > 0) {
        for (let i = step - 1; i < str.length; i += step) {
            shortText += str[i];
        }
    } else {
        for (let i = str.length + step; i >= 0; i += step) {
            shortText += str[i];
        }
    }

    return shortText;
}

{
    console.log(letters());
    console.log(letters(1561, 2));
    console.log(letters(undefined, 2));
    console.log(letters(Infinity, 2));
    console.log(letters(NaN, 2));
    console.log(letters(true, 2));
    console.log(letters(false, 2));
    console.log(letters(null, 2));
    console.log(letters([], 2));
    console.log(letters({}, 2));
    console.log(letters(letters, 2));
    console.log(letters('abc'));
    console.log(letters('abc', undefined));
    console.log(letters('abc', ''));
    console.log(letters('abc', 'asd'));
    console.log(letters('abc', true));
    console.log(letters('abc', false));
    console.log(letters('abc', letters));
    console.log(letters('abc', null));
    console.log(letters('abc', []));
    console.log(letters('abc', {}));
    console.log(letters('abc', Infinity));
    console.log(letters('abc', -Infinity));
    console.log(letters('abc', NaN));
    console.log(letters('abc', 4));
    console.log(letters('abc', 0));
    console.log(letters('abcdefghijkl', 1.5));
}

console.log('--------------------------------');
// Kodel galimi neigiami skaiciai? Pasisskaityti array string methods on web!
console.log(letters('abcdefg', 1), '->', 'abcdefg');
console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');
console.log(letters('abcdefghijkl', 4), '->', 'dhl');
console.log(letters('abcdefghijkl', 5), '->', 'ej');
console.log(letters('abcdefghijkl', 6), '->', 'fl');

console.log(letters('abcdefg', -1), '->', 'gfedcba');
console.log(letters('abcdefg', -2), '->', 'fdb');
console.log(letters('abcdefghijkl', -3), '->', 'jgda');
console.log(letters('abcdefghijkl', -4), '->', 'iea');
console.log(letters('abcdefghijkl', -5), '->', 'hc');
console.log(letters('abcdefghijkl', -6), '->', 'ga');
/*
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, 
kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu 
gerą funkcijos veikimą
*/

console.log('..................');

function dalyba(x, y) {
    if (typeof x !== 'number' || !isFinite(x)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof y !== 'number' || !isFinite(y)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    if (typeof x !== 'number' || !isFinite(x)) {
    }else if (y === 0) {
        return 'ERROR: antras parametras privalo buti normalus skaicius, o dalyba is nulio negalima!';
    }
          
    const result = x / y;
    return result;
}

console.log(dalyba('labas', 2));
console.log(dalyba('5', 2));
console.log(dalyba([], 2));
console.log(dalyba(true, 2));
console.log(dalyba(false, 2));
console.log(dalyba(dalyba, 2));
console.log(dalyba(undefined, 2));
console.log(dalyba(7, 'labas'));
console.log(dalyba(7, '5'));
console.log(dalyba(7, []));
console.log(dalyba(7, true));
console.log(dalyba(7, false));
console.log(dalyba(7, dalyba));
console.log(dalyba(7, undefined));
console.log(dalyba(NaN, 2));
console.log(dalyba(Infinity, 2));
console.log(dalyba(-Infinity, 2));
console.log(dalyba(7, NaN));
console.log(dalyba(7, Infinity));
console.log(dalyba(7, -Infinity));
console.log(dalyba(7, 0));
console.log(dalyba(-5, 0));
console.log(dalyba(NaN, 0)); /// ???? kaip apjungti?

console.log('------------');
console.log(dalyba(2, 2), '->', 1);
console.log(dalyba(11, 5), '->', 2.2);
console.log(dalyba(-10, 5), '->', -2);
console.log(dalyba(10, -5), '->', -2);
console.log(dalyba(-12, -2), '->', 6);
console.log(dalyba(0, -5), '->', 0);
console.log(dalyba(0, 5), '->', 0);
console.log(dalyba(0.5, 0.5), '->', 1);