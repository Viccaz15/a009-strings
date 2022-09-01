// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```



// a) Remova o excesso de espaços no final da string;
const frase =" Eu não sou supersticioso, mas sou um pouco ________.       "
console.log(frase.trim())

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(frase.length)
console.log(frase.trim().length)

//c) Substitua os traços `________` por “sticioso”.
const frase2 = frase
console.log(frase2.replace("________","sitioso"))