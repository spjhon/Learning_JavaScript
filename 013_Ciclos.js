//Nomalmente se utiliza un contador para poder terminar el ciclo

//Ciclo while
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador ++;
}

console.log("Fin ciclo while");

//Ciclo do while
// En este ciclo el codigo se ejecuta al menos una vez
let contador2 = 0;

do{
    console.log(contador2);
    contador2 ++;
}while(contador2 < 3);

console.log("Fin ciclo do while");

//////////////////////////////////////////////////////////

//Cilo for

for(let contador3 = 0; contador3 < 3; contador3 ++){
    console.log(contador3);
}

console.log("Fin ciclo for");


////////////////////////////////////////////////////////////////



//Ciclo for con break

for (let contador4 = 0; contador4 < 10; contador ++){
    if (contador % 2 == 0){
        console.log(contador4);
        break;
    }
}


////////////////////////////////////////////////////////////////////

//Palabra continue con JAVASCRIPT
for (let contador5 = 0; contador5 <= 10; contador5 ++){
    if (contador5 % 2 !== 0){
        console.log(contador5)
        continue; //Ir a la siguiente iteracion
    }
    else{
        console.log(contador5)
    }
}

///////////////////////////////////////////////////////////////////

//Mientras que los numeros tengan mas de dos digitos, sumar todos los digitos
//hasta que solo quede un digito
let n = 123456; 
function digitalRoot(n) {
    // ...
    while (n > 9){
    let num = n;
    let digits = num.toString().split('');
    //console.log(digits)
    let realDigits = digits.map(Number)
    /*console.log(realDigits);
    let Sum = 0;
    console.log(realDigits.length);*/
    n = 0;
    realDigits.forEach(element => {n = n + element;});
    }
    return n;
  }
  console.log(digitalRoot(n));
//Otra forma de hacerlo de acuerdo a las soluciones de codewars
function digital_root(n) {
    if (n < 10)
      return n;
  
    for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }
//otra forma
function digital_root(n) {
    while (n.toString().length >= 2) {
      n = n.toString().split('').reduce((p, c) => Number(p) + Number(c));
    }
  
    return n;
  }


////////////////////////////////////////////////////////////////////////