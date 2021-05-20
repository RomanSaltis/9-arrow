// function declaration (iprasta funkcija)
function sumavimas(a, b) {
    return a + b;
}
console.log('8 + 5 =', sumavimas(8, 5));

// konstantai priskirta anonimine funkcija
// parasom const ir iskeliam funkcijos pavadinima ir priskiriam likusia funkcijos dali
const skirtumas = function (a, b) {
    return a - b;
}
console.log('8 - 5 =', skirtumas(8, 5));

// arrow function (rodykline funkcija)
// istriname function termina ir tarp () {} skliaustu irasome =>
const sandauga = (a, b) => {
    return a * b;
}
console.log('8 * 5 =', sandauga(8, 5));

// jeigu logikos bloke yra tik viena procedura, tai galim nerasyti {} ir return
const dalyba = (a, b) => a / b;
console.log('8 / 5 =', dalyba(8, 5));

// jeigu parametru bloke yra tik ir tik vienas parametras, tai galim nerasyti ()
const kvadratu = a => a * a;
console.log('8 * 8 =', kvadratu(8));