console.clear();

// Kintamųjų palyginimas
// Lyginant, jei rezultatas tenkina palyginimo sąlygą, 
//tai į console išvesti žodį “Pomidoras”, 
//o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.


const arPomidoras = true;

if (arPomidoras == false) {
    console.log('Pomidoras');
    } else {
        console.log('Bandykite dar karta!')
    }

console.log();

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:


const a = 100;
const b = 5;
const c = 5;

// // kuris didesnis

if (a > b) {
    console.log(`${a} yra daugiau uz ${b}.`);
    // } else {
    //     console.log('Ne daugiau');
    }

console.log();

// kuris mažesnis

if (b < a) {
    console.log(`${b} yra maziau uz ${a}.`);
    // } else {
    //     console.log(`Ne, ${b} yra daugiau uz ${a}!`);
    }

console.log();

// ar jie lygūs

if (b === c) {
    console.log(`Skaiciai ${b} ir ${c} yra lygus.`);
    // } else {
    //     console.log(`Skaiciai ${b} ir ${b} nera lygus!`);
    }

console.log();

// ar jie nelygūs

if (a !== b) {
    console.log(`Skaiciai ${a} ir ${b} nera lygus.`);
}

console.log();

// kuris didesnis arba lygus

if (a >= c) {
    console.log(`Skaicius ${a} yra didesnis arba lygus uz ${c}.`);
}

console.log();

// kuris mažesnis arba lygus

if (b <= a) {
    console.log(`Skaicius ${b} yra mazesnis arba lygus uz ${a}.`);
}

console.log('...........................');



//.................................................\\

// Išvesti teksto tipo kintamųjų ilgius
console.log();

const fn = 'Anna';
const fnLength = fn.length;

const midl = 'Kori';
const midlLength = midl.length;

const ln = 'Karenina';
const lnLength = ln.length;

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis

if (lnLength > fnLength) {
    console.log(`${ln} yra ilgesne uz ${fn}.`); 
}

// kuris mažesnis

if (fnLength < lnLength) {
    console.log(`${fn} yra trumpesne uz ${ln}.`); 
}

// ar jie lygūs

if (fnLength === midlLength) {
    console.log(`${fn} ir ${midl} yra vienodo ilgio.`); 
} else {
    console.log('Abu - skirtingo ilgio!');
}

// ar jie nelygūs

if (fnLength !== lnLength) {
    console.log(`${fn} ir ${ln} nera vienodo ilgio.`); 
} else {
    console.log('Abu - vienodo ilgio!');
}

// kuris didesnis arba lygus

if (fnLength >= midlLength) {
    console.log(`${fn} ir ${midl} yra vienodo ilgio, bet gali buti ir ilgesne.`); 
} else {
    console.log('Pirmas vardas daug trumpesnis uz antra!')
}

// kuris mažesnis arba lygus

if (fnLength <= lnLength) {
    console.log(`${fn} ir ${ln} nera vienodo ilgio, bet gali buti ir trumpesne.`); 
} else {
    console.log('Pirmas vardas ilgesnis uz antra!')
}



// ...................................................\\

// Išvesti sąrašo tipo kintamųjų ilgius
console.log('.....................');

const cities = ['London', 'Vilnius', 'Kaunas', 'Klaipeda', 'Atlanta'];
const citiesLength = cities.length;

const countries = ['U.K.', 'Lietuva', 'U.S.A.'];
const countriesLength = countries.length;

console.log(citiesLength);
console.log(countriesLength);

console.log();

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis

if (citiesLength > countriesLength) {
    console.log(`${citiesLength} salys yra daugiau, negu ${countriesLength} miestai!`); 
}

// kuris mažesnis

if (countriesLength < citiesLength) {
    console.log(`${countriesLength} salys yra maziau, negu ${citiesLength} miestai!`); 
}

// ar jie lygūs

if (countriesLength === citiesLength) {
    console.log(`Saliu yra tiek pat, kiek miestu!`); 
    } else {
        console.log(`Saliu nera tiek pat, kiek miestu!`);
    }


// ar jie nelygūs

if (countriesLength !== citiesLength) {
    console.log(`Saliu nera tiek pat, kiek miestu!`); 
    } else {
        console.log(`Saliu yra tiek pat, kiek miestu!`);
    }

// kuris didesnis arba lygus

if ( citiesLength >= countriesLength) {
    console.log(`Jei ne tiek pat, - tai miestu yra daugiau, negu saliu!`); 
    } else {
        console.log(`Miestu tikrai yra maziau, nei saliu!`);
    }



// kuris mažesnis arba lygus

if (countriesLength <= citiesLength) {
    console.log(`Jei ne tiek pat, - tai saliu yra maziau, negu miestu!`); 
    } else {
        console.log(`Miestu tikrai nera yra maziau, nei saliu!`);
    }




