/* 
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Ja vimos
Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/

//Desse Modo ambas são alteradas
const produto = {nome: 'Caneca',preco: 1.8};
const outraCoisa = produto;

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//Desse modo ele Copie e quando fizer alteração em 1 o outro não sera alterado


const produto2 = {nome: 'Caneca',preco: 1.8};
const outraCoisa2 = {
    ...produto2,
    //Criou +1 Chave
    material: 'porcelana'
}

outraCoisa2.nome = 'Outro nome';
outraCoisa2.preco = 2.5;
console.log(produto2);
console.log(outraCoisa);