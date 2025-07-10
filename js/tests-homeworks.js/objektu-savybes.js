// Objektai
// 1. Sintaksė
 
 
// objektas - tai specialus kintamasis, kuris gali laikyti daug reikšmių
// objektas - tai kompleksinis duomenų tipas
 
// objektas sudarytas iš porų: key(raktas): value(reikšmė)
 
// objekto raktai yra unikalūs
// objekto raktai (pavadinimai) yra string'ai (tekstas)
// objekto raktai gali būti bet kokio ilgio, formato, tipo
 
// objekto reikšmės gali būti bet kokio ilgio, formato, tipo
 
let mokytojas = {
    vardas: 'Oliver',
    amzius: 32,
    3: 3,
    yraAukletojas: true,
    'mokyklos pavadinimas': 'Jono Basanavičiaus gimnazija',
    5: 'penki'
}
 
console.log(mokytojas); // { 3: 3, 5: 'penki', vardas: 'Oliver', amzius: 32, yraAukletojas: true, mokyklos pavadinimas: 'Jono Basanavičiaus gimnazija' }
 
// 2. Objekto savybių naudojimas
// Objekto savybių naudojimas per tašką:
 
console.log(mokytojas.amzius); // 32
console.log(mokytojas.vardas); // Oliver
 
// Objekto savybių naudojimas per []:
console.log(mokytojas['mokyklos pavadinimas']); // Jono Basanavičiaus gimnazija
console.log(mokytojas['vardas']); // Oliver
console.log(mokytojas[5]); // penki
 
// 3. Objekto savybių keitimas:
mokytojas.vardas = 'Tomas';
console.log(mokytojas.vardas); // Tomas
 
// 4. Objekto savybių pridėjimas:
mokytojas.pavarde = 'Twist';
console.log(mokytojas); // {3: 3, 5: 'penki', vardas: 'Tomas', amzius: 32, yraAukletojas: true, mokyklos pavadinimas: 'Jono Basanavičiaus gimnazija', pavarde: 'Twist'}
 
// 5. Objekto savybių šalinimas
delete mokytojas.pavarde;
console.log(mokytojas); // {3: 3, 5: 'penki', vardas: 'Tomas', amzius: 32, yraAukletojas: true, mokyklos pavadinimas: 'Jono Basanavičiaus gimnazija'}
 
// 6. Objekto savybių patikrinimas
console.log('vardas' in mokytojas); // true
console.log('pavarde' in mokytojas); // false
 
// 7. Objekto savybių skaičius:
console.log(Object.keys(mokytojas).length); // 6
 
// 8. Objekto savybių išvedimas:
console.log(Object.keys(mokytojas)) // (6) ['3', '5', 'vardas', 'amzius', 'yraAukletojas', 'mokyklos pavadinimas']
 
// 9. Objekto savybių reikšmių išvedimas:
console.log(Object.values(mokytojas)) // [3, 'penki', 'Tomas', 32, true, 'Jono Basanavičiaus gimnazija']
 
// 10. Objekto savybių porų išvedimas:
console.log(Object.entries(mokytojas)); // [['3', 3], ['5', 'penki'], ['vardas', 'Tomas'], ['amzius', 32], ['yraAukletojas', true], ['mokyklos pavadinimas', 'Jono Basanavičiaus gimnazija']]
 
// 11. Objekto savybių išvedimas su ciklu:
for (let raktas in mokytojas) {
    console.log(raktas, mokytojas[raktas]);
}
// 5 penki
// vardas Tomas
// amzius 32
// yraAukletojas true
// mokyklos pavadinimas Jono Basanaviciaus gimnazija
 
// 12. Objekto kopijavimas
let kopija = Object.assign({}, mokytojas)
kopija.vardas = 'Jonas'
console.log(mokytojas.vardas); // Tomas
console.log(kopija.vardas); // Jonas
 
// shallow copy - paviršutiniškas kopijavimas
// deep copy - gilus kopijavimas
 
let deepCopy = JSON.parse(JSON.stringify(mokytojas)); // tik su paprastais objektais (neturi viduje funkcijų ir pan.)
 
// structuredClone()
let copy = structuredClone(mokytojas)
copy.vardas = 'Ona';
console.log(mokytojas.vardas);
console.log(copy.vardas);
 
// 13. Objekto gylis
let objektas = {
    a: 5,
    b: {
        c: 6,
        d: {
            e: 7,
        }
    }
}
 
console.log(objektas.b.d.e); // 7
console.log(objektas['b']['d']['e']); // 7
 
let objektas2 = {
    f: 1,
    g: {
        h: 2,
        i: {
            j: 3,
        }
    }
}
 
let objektas2Kopija = Object.assign(objektas, objektas2);
console.log(objektas2Kopija); // { a: 5, b: {… }, f: 1, g: {… } }
 
// 14. Objekto gylis su ciklu
let objektas3 = {
    a: 5,
    b: {
        c: 6,
        d: {
            e: 7,
            f: {
                g: 8,
                h: {
                    i: 9,
                    j: {
                        k: 10,
                    }
                }
            }
        }
    }
}
 
let objektas3Kopija = Object.assign({}, objektas3);
console.log(objektas3Kopija); // {a: 5, b: {…}}
 
// 15. Objekto gylis su ciklu ir rekursija
function deepCopyFunction(objektas) {
    let kopija = {};
 
    for (let raktas in objektas) {
        if (typeof objektas[raktas] === 'object') {
            kopija[raktas] = deepCopyFunction(objektas[raktas]);
        } else {
            kopija[raktas] = objektas[raktas];
        }
    }
 
    return kopija;
}
 
let objektas3Kopija2 = deepCopyFunction(objektas3);
console.log(objektas3Kopija2); // {a: 5, b: {…}}
 
// 16. Objekto gylis su ciklu ir rekursija ir JSON paprastiems objektams
function deepCopyFunction2(objektas) {
    return JSON.parse(JSON.stringify(objektas));
}
 
let objektas3Kopija3 = deepCopyFunction2(objektas3);
console.log(objektas3Kopija3); // {a: 5, b: {…}}
 
// 17. Objekto metodai:
 
let objektas4 = {
    a: 5,
    b: 6,
    c: 7,
    suma: function () {
        return this.a + this.b + this.c;
    }
}
 
console.log(objektas4.suma()); // 18
 
// 18. Objektų metodai su parametrais:
 
let objektas5 = {
    a: 5,
    b: 6,
    c: 7,
    suma: function (x, y, z) {
        return this.a + this.b + this.c + x + y + z;
    }
}
 
console.log(objektas5.suma(1, 2, 3)); // 24
 
// 19. Objektų statiniai metodai (metodai, kurie nepriklauso nuo objekto)
// object.assign() - statinis metodas, kuris prideda savybes prie objekto
 
let objektas6 = {
    a: 5,
    b: 6,
    c: 7,
}
 
objektas6 = Object.assign(objektas6, { d: 8, e: 9 });
 
let objektas7 = Object.assign(objektas6, { d: 8, e: 9 });
 
console.log(objektas6);
console.log(objektas7);
 
// object.create()
 
let objektas8 = Object.create(objektas7);
console.log(objektas8); // {}
console.log(objektas8.a); // 5
 
// Object.defineProperty() - statinis metodas, kuris prideda nustatymus savybei
 
Object.defineProperty(objektas8, 'f', {
    value: 10, // reikšmė
    writable: true, // ar galima keisti reikšmę
    enumerable: true, // ar savybė bus išvedama
    configurable: true // Konfiguracijos galimybės
});
console.log(objektas8); // {f: 10}

// Object.defineProperties() - statinis metodas, kuris prideda savybes prie objekto
Object.defineProperties(objektas8, {
    g: {
        value: 11,
        writable: true,
        enumerable: true,
        configurable: true
    },
    h: {
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
 
// object.entries() - statinis metodas, kuris išveda objekto savybes
console.log(Object.entries(objektas8)); // [['f', 10], ['g', 11], ['h', 12]]
 
// object.freeze() - statinis metodas, kuris užšaldyti objektą, kad nebūtų galima keisti savybių
Object.freeze(objektas8);
objektas8.i = 13; // neleidžia pridėti naujos savybės
delete objektas8.f; // neleidžia trinti savybės
objektas8.g = 14; // neleidžia keisti savybės
console.log(objektas8); // {f: 10, g: 11, h: 12}
 
// object.fromEntries() - statinis metodas, kuris sukuria objektą iš masyvo
let masyvas = [['a', 1], ['b', 2], ['c', 3]];
let objektas9 = Object.fromEntries(masyvas);
console.log(objektas9); // {a: 1, b: 2, c: 3}
 
// object.getOwnPropertyDescriptor() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyDescriptor(objektas9, 'a')); // {value: 1, writable: true, enumerable: true, configurable: true}
 
// object.getOwnPropertyDescriptors() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyDescriptors(objektas9)); // {a: {…}, b: {…}, c: {…}}
 
// object.getOwnPropertyNames() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyNames(objektas8)); // ['f', 'g', 'h'], nes tik jos yra objektas8 savarankiškos savybės, o kitos yra paveldėtos
 
// object.getOwnPropertySymbols() - statinis metodas, kuris išveda objekto simbolius
console.log(Object.getOwnPropertySymbols(objektas8)); // [], nes objektas8 neturi simbolių, simbolio pavyzdys: let simbolis = Symbol('simbolis');
 
// object.getPrototypeOf() - statinis metodas, kuris išveda objekto prototipą
console.log(Object.getPrototypeOf(objektas8)); // {a: 5, b: 6, c: 7, d: 8
 
// object.groupBy() - statinis metodas, kuris grupuoja objektą
let objektas10 = [
    { vardas: 'Jonas', amzius: 25 },
    { vardas: 'Petras', amzius: 30 },
    { vardas: 'Antanas', amzius: 25 },
    { vardas: 'Kazys', amzius: 30 },
    { vardas: 'Juozas', amzius: 25 },
]
 
// @ts-ignore
const result = Object.groupBy(objektas10, ({ amzius }) => amzius);
console.log(result); // {25: Array(3), 30: Array(2)}
 
// object.hasOwn() - statinis metodas, kuris patikrina ar objektas turi savybę
console.log(Object.hasOwn(objektas8, 'f')); // true
 
// object.is() - statinis metodas, kuris patikrina ar objektai yra vienodi
console.log(Object.is(objektas7, objektas8)); // false
 
// object.isExtensible() - statinis metodas, kuris patikrina ar objektas išplėstas
console.log(Object.isExtensible(objektas5)); // true
console.log(Object.isExtensible(objektas8)); // false
 
// object.isFrozen() - statinis metodas, kuris patikrina ar objektas užšaldytas
console.log(Object.isFrozen(objektas8)); // true
 
// object.isSealed() - statinis metodas, kuris patikrina ar objektas uždarytas
console.log(Object.isSealed(objektas9)); // false
 
// object.keys() - statinis metodas, kuris išveda objekto raktus
console.log(Object.keys(objektas8)); // ['f', 'g', 'h']
 
// object.preventExtensions() - statinis metodas, kuris neleidžia plėsti objekto, bet leidžia keisti savybes ir jas trinti, skirtingai nei object.freeze(), kuris neleidžia nei plėsti, nei keisti savybių, skirtingai nei object.seal(), kuris neleidžia trinti savybių
console.log(objektas7); // {a: 5, b: 6, c: 7, d: 8, e: 9}
Object.preventExtensions(objektas7);
objektas7.j = 13; // neleidžia pridėti naujos savybės
delete objektas7.e; // leidžia trinti savybę
objektas7.a = 10; // leidžia keisti savybę
console.log(objektas7); // {a: 10, b: 6, c: 7, d: 8}
 
// object.seal() - statinis metodas, kuris uždaro objektą
console.log(objektas9); // {a: 1, b: 2, c: 3}
Object.seal(objektas9); // uždaro objektą, bet leidžia keisti savybes, bet nepridėti naujų
objektas9.a = 2; // leidžia keisti savybę
delete objektas9.b; // neleidžia trinti savybės
objektas9.d = 4; // neleidžia pridėti naujos savybės
console.log(objektas9); // {a: 2, b: 2, c: 3}
 
// object.values() - statinis metodas, kuris išveda objekto reikšmes
console.log(Object.values(objektas9)); // [2, 2, 3]
 
// 20. Objekto konstruktorius
function Mokinys(vardas, pavarde, klase) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.klase = klase;
}
 
let mokinys1 = new Mokinys('Jonas', 'Jonaitis', 5);
let mokinys2 = new Mokinys('Petras', 'Petraitis', 6);
let mokinys3 = new Mokinys('Antanas', 'Antanaitis', 7);
 
console.log(mokinys1); // Mokinys {vardas: "Jonas", pavarde: "Jonaitis", klase: 5}
console.log(mokinys2); // Mokinys {vardas: "Petras", pavarde: "Petraitis", klase: 6}
console.log(mokinys3); // Mokinys {vardas: "Antanas", pavarde: "Antanaitis", klase: 7}
 
// 21. Objektas su metodais
 
function Mokinys2(vardas, pavarde, klase) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.klase = klase;
    this.pilnasVardas = function () {
        return this.vardas + ' ' + this.pavarde;
    }
}
 
let mokinys4 = new Mokinys2('Jonas', 'Jonaitis', 5);
let mokinys5 = new Mokinys2('Petras', 'Petraitis', 6);
let mokinys6 = new Mokinys2('Antanas', 'Antanaitis', 7);
 
console.log(mokinys4.pilnasVardas()); // Jonas Jonaitis
console.log(mokinys5.pilnasVardas()); // Petras Petraitis
console.log(mokinys6.pilnasVardas()); // Antanas Antanaitis
 
 // Užduotys



 // Object.defineProperties() - statinis metodas, kuris prideda savybes prie objekto
Object.defineProperties(objektas8, {
    g: {
        value: 11,
        writable: true,
        enumerable: true,
        configurable: true
    },
    h: {
        value: 12,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
 
// object.entries() - statinis metodas, kuris išveda objekto savybes
console.log(Object.entries(objektas8)); // [['f', 10], ['g', 11], ['h', 12]]
 
// object.freeze() - statinis metodas, kuris užšaldyti objektą, kad nebūtų galima keisti savybių
Object.freeze(objektas8);
objektas8.i = 13; // neleidžia pridėti naujos savybės
delete objektas8.f; // neleidžia trinti savybės
objektas8.g = 14; // neleidžia keisti savybės
console.log(objektas8); // {f: 10, g: 11, h: 12}
 
// object.fromEntries() - statinis metodas, kuris sukuria objektą iš masyvo
let masyvas = [['a', 1], ['b', 2], ['c', 3]];
let objektas9 = Object.fromEntries(masyvas);
console.log(objektas9); // {a: 1, b: 2, c: 3}
 
// object.getOwnPropertyDescriptor() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyDescriptor(objektas9, 'a')); // {value: 1, writable: true, enumerable: true, configurable: true}
 
// object.getOwnPropertyDescriptors() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyDescriptors(objektas9)); // {a: {…}, b: {…}, c: {…}}
 
// object.getOwnPropertyNames() - statinis metodas, kuris išveda objekto savybes
console.log(Object.getOwnPropertyNames(objektas8)); // ['f', 'g', 'h'], nes tik jos yra objektas8 savarankiškos savybės, o kitos yra paveldėtos
 
// object.getOwnPropertySymbols() - statinis metodas, kuris išveda objekto simbolius
console.log(Object.getOwnPropertySymbols(objektas8)); // [], nes objektas8 neturi simbolių, simbolio pavyzdys: let simbolis = Symbol('simbolis');
 
// object.getPrototypeOf() - statinis metodas, kuris išveda objekto prototipą
console.log(Object.getPrototypeOf(objektas8)); // {a: 5, b: 6, c: 7, d: 8
 
// object.groupBy() - statinis metodas, kuris grupuoja objektą
let objektas10 = [
    { vardas: 'Jonas', amzius: 25 },
    { vardas: 'Petras', amzius: 30 },
    { vardas: 'Antanas', amzius: 25 },
    { vardas: 'Kazys', amzius: 30 },
    { vardas: 'Juozas', amzius: 25 },
]
 
// @ts-ignore
const result = Object.groupBy(objektas10, ({ amzius }) => amzius);
console.log(result); // {25: Array(3), 30: Array(2)}
 
// object.hasOwn() - statinis metodas, kuris patikrina ar objektas turi savybę
console.log(Object.hasOwn(objektas8, 'f')); // true
 
// object.is() - statinis metodas, kuris patikrina ar objektai yra vienodi
console.log(Object.is(objektas7, objektas8)); // false
 
// object.isExtensible() - statinis metodas, kuris patikrina ar objektas išplėstas
console.log(Object.isExtensible(objektas5)); // true
console.log(Object.isExtensible(objektas8)); // false
 
// object.isFrozen() - statinis metodas, kuris patikrina ar objektas užšaldytas
console.log(Object.isFrozen(objektas8)); // true
 
// object.isSealed() - statinis metodas, kuris patikrina ar objektas uždarytas
console.log(Object.isSealed(objektas9)); // false
 
// object.keys() - statinis metodas, kuris išveda objekto raktus
console.log(Object.keys(objektas8)); // ['f', 'g', 'h']
 
// object.preventExtensions() - statinis metodas, kuris neleidžia plėsti objekto, bet leidžia keisti savybes ir jas trinti, skirtingai nei object.freeze(), kuris neleidžia nei plėsti, nei keisti savybių, skirtingai nei object.seal(), kuris neleidžia trinti savybių
console.log(objektas7); // {a: 5, b: 6, c: 7, d: 8, e: 9}
Object.preventExtensions(objektas7);
objektas7.j = 13; // neleidžia pridėti naujos savybės
delete objektas7.e; // leidžia trinti savybę
objektas7.a = 10; // leidžia keisti savybę
console.log(objektas7); // {a: 10, b: 6, c: 7, d: 8}
 
// object.seal() - statinis metodas, kuris uždaro objektą
console.log(objektas9); // {a: 1, b: 2, c: 3}
Object.seal(objektas9); // uždaro objektą, bet leidžia keisti savybes, bet nepridėti naujų
objektas9.a = 2; // leidžia keisti savybę
delete objektas9.b; // neleidžia trinti savybės
objektas9.d = 4; // neleidžia pridėti naujos savybės
console.log(objektas9); // {a: 2, b: 2, c: 3}
 
// object.values() - statinis metodas, kuris išveda objekto reikšmes
console.log(Object.values(objektas9)); // [2, 2, 3]
 
// 20. Objekto konstruktorius
function Mokinys(vardas, pavarde, klase) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.klase = klase;
}
 
let mokinys1 = new Mokinys('Jonas', 'Jonaitis', 5);
let mokinys2 = new Mokinys('Petras', 'Petraitis', 6);
let mokinys3 = new Mokinys('Antanas', 'Antanaitis', 7);
 
console.log(mokinys1); // Mokinys {vardas: "Jonas", pavarde: "Jonaitis", klase: 5}
console.log(mokinys2); // Mokinys {vardas: "Petras", pavarde: "Petraitis", klase: 6}
console.log(mokinys3); // Mokinys {vardas: "Antanas", pavarde: "Antanaitis", klase: 7}
 
// 21. Objektas su metodais
 
function Mokinys2(vardas, pavarde, klase) {
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.klase = klase;
    this.pilnasVardas = function () {
        return this.vardas + ' ' + this.pavarde;
    }
}
 
let mokinys4 = new Mokinys2('Jonas', 'Jonaitis', 5);
let mokinys5 = new Mokinys2('Petras', 'Petraitis', 6);
let mokinys6 = new Mokinys2('Antanas', 'Antanaitis', 7);
 
console.log(mokinys4.pilnasVardas()); // Jonas Jonaitis
console.log(mokinys5.pilnasVardas()); // Petras Petraitis
console.log(mokinys6.pilnasVardas()); // Antanas Antanaitis
 
 
Užduotis 1: Sukurkite tuščią objektą pavadinimu car ir pridėkite jame savybes brand, model, ir year.
 
Užduotis 2: Sukurkite metodą, kuris atspausdins automobilio brand savybę.
 
Užduotis 3: Sukurkite metodą addProperty, kuris pridės naują savybę į objektą dinamiškai.
 
Užduotis 4: Patikrinkite, ar automobilio objektas turi savybę model, naudodami hasOwnProperty.
 
Užduotis 5: Sukurkite funkciją, kuri grąžins automobilio objekto visų savybių raktus.
 
Užduotis 6: Sukurkite funkciją, kuri grąžins visų automobilio objekto savybių reikšmes.
 
Užduotis 7: Naudodami Object.assign(), nukopijuokite car objektą į naują objektą.
 
Užduotis 8: Sukurkite metodą, kuris skaičiuos automobilio objekto visų savybių skaičių.
 
Užduotis 9: Sukurkite metodą, kuris pašalins savybę year iš automobilio objekto.
 
Užduotis 10: Sukurkite metodą, kuris atnaujins esamą automobilio objekto savybę, pavyzdžiui, model.
 
Užduotis 11: Sukurkite metodą, kuris sukurs automobilio objekto kopiją naudojant Object.assign.
 
Užduotis 12: Patikrinkite, ar automobilio objektas yra tuščias (neturi savybių).
 
Užduotis 13: Sukurkite įdėtą objektą engine su savybėmis type ir horsepower, ir pridėkite jį į automobilio objektą.
 
Užduotis 14: Sukurkite metodą, kuris giliai kopijuos automobilio objektą (deep copy).
 
Užduotis 15: Pridėkite papildomą dinaminę savybę, pavyzdžiui, color, naudojant skliaustų notaciją.
 
Užduotis 16: Pridėkite metodą, kuris aprašys automobilio objektą naudojant esamas savybes, atspausdinant automobilio informaciją.
 
Užduotis 17: Sukurkite konstruktoriaus funkciją Car, kuri priima brand, model ir year, ir sukurkite naują automobilio objektą.
 
Užduotis 18: Pridėkite metodą į Car konstruktorių, kuris atspausdins informaciją apie automobilį.
 
Užduotis 19: Patikrinkite, ar automobilio objektas turi tam tikrą savybę, naudodami in operatorių.
 
Užduotis 20: Sukurkite automobilio objektą ir užšaldykite jį (Object.freeze()), kad savybės nebūtų keičiamos.
 