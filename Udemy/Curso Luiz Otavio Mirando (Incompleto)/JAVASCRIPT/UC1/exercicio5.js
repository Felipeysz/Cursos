const nome = prompt('Digite Seu Nome Completo');
console.log(nome.length);//Descobre o tamanho do seu texto.

document.body.innerHTML += `O seu Nome é:${nome}.<br/>`;
document.body.innerHTML += `O seu nome tem ${nome.length} Letras.<br/>`;
document.body.innerHTML += `A Segunda Letra do Seu Nome é:${nome[1]}.<br/>`;
document.body.innerHTML += `Qual o Primeiro índice da letra a no seu nome:${nome.indexOf('a')} .<br/>`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome:${nome.lastIndexOf('a')} .<br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são:${nome.substring(nome.length -3, nome.length -0)} .<br/>`
document.body.innerHTML += `As palavras do seu nome são:${nome.split(' ' , -1)} .<br/>`;
document.body.innerHTML += `Seu Nome com letras Maiúsculas:${nome.toUpperCase()} .<br/>`;
document.body.innerHTML += `Seu Nome com Letras Minúsculas:${nome.toLowerCase()} .<br/>`;