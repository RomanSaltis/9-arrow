/*
Reikia grazinti pirma ir paskutine raides
*/

const zodis = 'Labas rytas';
const pirmaPaskutineRaides = s => s[0] + s[s.length - 1];
console.log(pirmaPaskutineRaides(zodis));

/*
Duoto saraso zodziu pirmos raides
*/

const zodynas = ['labas', 'rytas', 'sakau', 'tau', 'rytas'];
const zodynoSujungimas = dictionary => {
    let answer = '';
    for (const word of dictionary) {
        answer += word[0];
    }
    return answer;
}

const dictionaryMap = dictionary => dictionary.map(word => word[0]).join('');

const start2 = Date.now();
for (let i = 0; i < 1000; i++) {
    dictionaryMap(zodynas);
}
const finish2 = Date.now();

const start1 = Date.now();
for (let i = 0; i < 1000; i++) {
    zodynoSujungimas(zodynas);
}
const finish1 = Date.now();

console.log(finish1 - start1, finish2 - start2);