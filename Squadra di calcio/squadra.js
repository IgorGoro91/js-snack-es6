/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


let squadre = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Torino", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Vicenza", punti: 0, falliSubiti: 0 }
];

console.log(squadre)

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadre.forEach(squadra => {
    squadra.punti = generaNumeroRandom(0, 100);
    squadra.falliSubiti = generaNumeroRandom(0, 50);
});

let nomiEFalli = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});


console.log("Nuovo array :", nomiEFalli);