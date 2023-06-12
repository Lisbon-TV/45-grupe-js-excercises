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

console.log(); // paskaitos sprendimas:

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

// Klaseje, atliktas uzduoties sprendimas:

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

console.log('.................');

// start with cheat:
// function biggestNumber() {
//     return 1
// }

// Try with max (pirmas testas)
// function biggestNumber(list) {
//    const max = list [0]; // cia paduos tik, jei array susidaries is vieno sk.!
//          // logika,..    
//      return max
// }

// Try with max (antas testas)
// function biggestNumber(list) {
//    const max = list [list.lenght -1]; // cia paduos tik, jei array susidaries is keliu sk.!
//          // logika,..    
//      return max
// }

// Pirmas testas, kai array turi savyje tik viena skaiciu: 
console.log(biggestNumber([1]), '->' , 1);
console.log(biggestNumber([2]), '->' , 2);
// Antras testas, kai array turi savyje daugiau skaiciu: 
console.log(biggestNumber([1, 2, 3]), '->' , 3);

/*
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/
