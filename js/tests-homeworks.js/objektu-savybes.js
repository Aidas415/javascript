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