function invertStr(string){
    let invertida = "";

    for(let cont = string.length - 1; cont >= 0; cont --){
        invertida += string[cont]
    }

    return invertida;
}

const palavra = "testanto inversao";
const invertida = invertStr(palavra);

console.log("string original: " + palavra);
console.log("string invertida: " + invertida);