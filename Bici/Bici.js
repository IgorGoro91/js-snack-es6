
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bici = {
    nome: "Bianchi",
    peso: 20,
}

console.log(`il peso della bici: ${ bici.peso}`)
// per aggiungere una chiave in const bici
bici.taglia = `M`
console.log(bici)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const bicicleta = [
    {
        nome: "MTB",
        peso: 130,

    },
    {
        nome: "EQX",
        peso: 120.,

    },
    {
        nome: "Strong",
        peso: 150,

    }
]

let biciPiuLeggera = bicicleta[0]

for(let i = 0; i < bicicleta.length; i++){
    let elemento = bicicleta[i]

    if(elemento.peso < biciPiuLeggera.peso){
        biciPiuLeggera = elemento
    }
}

console.log(biciPiuLeggera)