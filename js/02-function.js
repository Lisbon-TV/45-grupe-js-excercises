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
        return 'ERROR: duok skaiciu.';
    }
    if (isNaN(number)) {
        return 'ERROR: duok normalu skaiciu, o ne NaN.';
    }
    if (number === Infinity || number === -Infinity) {
        return 'ERROR: duok normalu skaiciu, o ne begalybe.';
    }

    const numberAsString = '' + number;
    let size = numberAsString.length;

    // tikriname ar yra minusas?
    if (number < 0) {
        size--;
    }

    // tikriname ar skaicius yra desimtainis?
    if (number % 1 !== 0) {
        size--;
    }

    return size;
}

// Privalomi testai:

console.log(numberLength(true));
console.log(numberLength(false));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength([]));
console.log(numberLength(numberLength));
console.log('--------------------------------');
console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
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
