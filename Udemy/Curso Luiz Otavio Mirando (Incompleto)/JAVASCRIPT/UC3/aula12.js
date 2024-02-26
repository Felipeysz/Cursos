function recursiva(max) {
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}


recursiva(0);
//Fução que se Chama de Volta
//OBS:Não da pra fazer por exemplo 10000 pq a maquina pode achar que é um error