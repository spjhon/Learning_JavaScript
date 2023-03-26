//no es muy recomendable aplicarlas pero pues, aca estan, se le llaman go to
inicio:
for (let contador5 = 0; contador5 <= 10; contador5 ++){
    if (contador5 % 2 !== 0){
        console.log(contador5)
        continue inicio; //Ir a la siguiente iteracion
    }
    else{
        console.log(contador5)
    }
}

inicio2:
for (let contador5 = 0; contador5 <= 10; contador5 ++){
    if (contador5 % 2 !== 0){
        console.log(contador5)
        break inicio2; //Ir a la siguiente iteracion
    }
    else{
        console.log(contador5)
    }
}