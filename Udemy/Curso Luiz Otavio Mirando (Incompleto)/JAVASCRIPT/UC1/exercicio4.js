//Minha Solução

// let varA = 'A'; //B
// let varB = 'B'; //C
// let varC = 'C'; //A

// let varD = varA;
// let varE = varB;
// let varF = varC;

// varA = varE;
// varB = varF;
// varC = varD;
// console.log(varA, varB, varC);



//Solução Do Professor

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

// const varAtemp = varA;
// varA = varB;
// varB = varC;
// varC = varAtemp;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
