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



function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let newArray =[]
for(const index in squadre){

    let elemento = squadre[index]

    elemento.punti = generaNumeroRandom(1, 50)
    elemento.falliSubiti = generaNumeroRandom(1, 50)

    newArray.push(
        {
            nome: elemento["nome"],
            falliSubiti: elemento["falliSubiti"]
        }
    )
}

console.log( squadre, newArray)