const ePaisagem = (largura, altura) => largura > altura;

const eRetrato = (largura, altura) => largura < altura;

const eQuadrado = (largura, altura) => largura < altura;

console.log('È Paisagem:'+ePaisagem(1920, 1080));
console.log('È Paisagem:'+ePaisagem(1080, 1920));
console.log('È Paisagem:'+ePaisagem(1080, 1080));

console.log('**************');

console.log('È Retrato:'+eRetrato(1920, 1080));
console.log('È Retrato:'+eRetrato(1080, 1920));
console.log('È Retrato:'+eRetrato(1080, 1080));

console.log('**************');

console.log('È Quadrado:'+eQuadrado(1920, 1080));
console.log('È Quadrado:'+eQuadrado(1080, 1920));
console.log('È Quadrado:'+eQuadrado(1080, 1080));