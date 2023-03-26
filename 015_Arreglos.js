//ARREGLOS EN JAVASCRIPT

//Hay diferentes formas de delcarar un arreglo y las mejore practicas

//Esta es una antigua forma YA NO SE USA
//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//Indices
console.log(autos[1]);

//Para recorrer todos los elementos de una vez con for
for (let i = 0; i < autos.length; i++){
    console.log(i + ': ' + autos[i]);
}

//Modificar elementos de una arreglo
autos[1] = 'Ferrari';
console.log(autos[1]);

//Push nos permite cambiar cosas en un arreglo
autos.push('Audi'); //Se agrega al final del arregleo
console.log(autos);

//Nuevas formas, pero tener precaucion
console.log(autos.length);
autos[autos.length] = 'Cadilac'
console.log(autos);

//Preguntar si es un array
console.log(Array.isArray(autos));

//Aqui se pregunta si la variable es una instancia de Array
console.log(autos instanceof Array);



/////////////////////////////////////////////////////////////////////////


//ejercicio de code wars para filtar los numeros de una lista
let l = [1,'a','b',0,15];

console.log(typeof l[0])

function filter_list(l) {
    // Return a new array with the strings filtered out
    let validNumbers = [];
    l.forEach(element => {
        if (typeof element === 'number'){
            validNumbers.push(element);
        }
    });
    return validNumbers;
  }

console.log(filter_list(l));

//otra forma de resolverlo
function filter_list2(l) {
    return l.filter(e => Number.isInteger(e));
  }
  console.log(filter_list2(l));


/////////////////////////////////////////////////



//Sumar los dos numeros mas chiquitos del array
let numbers = [10,9,1,23,55];

function sumTwoSmallestNumbers(numbers) { 
  numbers.sort(function(a, b){return a-b});
  let num = numbers[0];
  numbers.shift();
  return num + numbers[0];
}
console.log(sumTwoSmallestNumbers(numbers));
//otra forma de hacerlo de acuerdo a codewars
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };

//otra forma mas con funcion flecha
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };


//////////////////////////////////////////////////////////////////


/*In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.*/

let s = 'aaaxbbbbyyhwawiwjjjwwm'; 

function printerError(s) {
  let digits = s.toString().split('');
  console.log(digits);
  let result = [];
  let total = 0;
  let errorElements = 0;
  digits.forEach(element => {
    result.push(/^[n-zN-Z]+$/.test(element));
  });

  result.forEach(element => {
    if (element == true){
      errorElements += 1;
    }
    total += 1;
  });
  return `${errorElements}/${total}`;
}

console.log(printerError(s));

//otra forma de hacerlo
function printerError(s) {
  // your code
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}

//otra forma mas
var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

//otra mas

function printerError(s) {
  var m = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 109 || s[i].charCodeAt() < 97) {
      m++;
    }
  }
  return m + '/' + s.length;
}

//////////////////////////////////////////////////////////


/*You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.*/

let arr = [10,-80,10,10,15,35,20]; 

function findEvenIndex(arr)
{
  let sum = 0;
  let sum2 = 0;
    for(let k = 0; k <= arr.length-1; k++){
      console.log(k);

      for(let i = k; i <= arr.length-1; i++){
        sum += arr[i];
      }
        sum -= arr[k];
        console.log(sum);
  
        
      for(let i = 0; i <= k; i++){
        sum2 += arr[i];
      }
        sum2 -= arr[k];
        console.log(sum2);
      
      if (sum == sum2){
        //aqui pasa algo interesante, cuando se llega a este if se ejecuta el return y la funcion muere ahi
        return k;
      }
      sum = 0;
      sum2 = 0;
    }

    return -1;
}

console.log(findEvenIndex(arr));


// otra forma de resolverlo, todo el mundo utilizo el reduce
function findEvenIndex(arr)
{
	var leftsum = 0;
  var rightsum = 0;
  for(var i = 0; i < arr.length; i++) {
 		rightsum += arr[i]; 
  }
  for(i = 0; i < arr.length; i++) {
  	rightsum -= arr[i];
    if(leftsum === rightsum) return i;
 		leftsum += arr[i];
  }
  return -1;
}


//////////////////////////////////////////////////////////////////////

//reduce explicado

// el proposito es tomar el array y reducirlo a un valor singular

const numbers2 = [3, 6, 2, 9, 1];

//lo primero es llama a su porpia funcion para ejecutar el reduce
//ahora por medio de una funcion flecha vamos a ir recorriendo cada uno de los elementos del array
//ahora dentro de la funcion callback hay varias opciones, entre ellas estan
//  previous value  el diminutivo es p
//  current value   el diminutivo es c
//  current index
//  array

//que es c?, como la funcion se va a ejecutar por cada item, c es el item current en donde se encuentra
//que es p?, p es el valor anterior de cuando se ejecuto la funcion, iria un elemento atrazado

const sum = numbers2.reduce((p, c) => {
  console.log(c);
  console.log(p);
  return 'a'+p;
}, 888) //valor inicial de p

console.log(sum);


//OTRO EJEMPLO CON REDUCE Y UN ARRAY TIPO JSON u OBJETO
const people = [
  {
    name: "Dom Perry",
    age: 35
  },

  {
    name: "Andrew Wilksons",
    age: 47
  },

  {
    name: "Brian Walker",
    age: 27
  }
];

//vamos a utilizar el reduce para encontrar la edad mas alta
//ahora la cosa es que se va a iterar a travez de objetos mas no elementos individuales
//osea que c va a ser un objeto en cada iteracion
const oldestAge = people.reduce((p, c) =>{
    if (c.age > p){
      return c.age;
    }
    return p;
}, 0);

console.log(oldestAge);

//ahora se va a utilizar el reducer extraer las iniciales de los nombres
//ahora vamos a utilizar todos los parametros que encontramos en el reduce (curren index y array)

const output = people.reduce((p, c, ci, a) => {
  //lo primero es divir cada nombre y agarrar la primera inicial de cada parte del nombre
  // ahora, split va a ser un array de los nombres, osea que va a quedar dos elementos por nombre
  const split = c.name.split(" ");
  console.log(split);
  //aqui lo que se esta haciendo es extraer el index 0 que seria Dom en la primera iteracion y luego el
  //otro index que es 0 osea la primera letra el array Perry que seria la P.
  let part = `${split[0][0]}${split[1][0]}`;
  console.log(part);
  if (ci === a.length-1){
    part += "."
  }
  else{
    part += ", "
  }
  //ahora vamos a preguntar si el current value es el ultimo del array y colocar un punto final (.) al array final


  return p + part;
}, "");//como vamos a trabajar con letras pues el valor inicial de p va a ser vacio "".

console.log(output);

////////////////////////////////////////////////////////////////////////////////////////

/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

let str = 'abcdefg';
let x = 123456

function solution(str){

  //here split the string to an array of characters
  let digits = str.toString().split('');
  console.log(digits); //here you can see the string turn to an array of characters

  let part = []; //this is the array where the final pairs of characters will be
  let a = 0; 
  console.log((digits.length)%2);
  if ((digits.length) % 2 != 0){ //here im asking if the array digist is even or odd, if is odd add a '_' character to the end.
    for (let index = 0; index < digits.length-1; index += 2) {
      part.push(digits[a]+digits[a+1]);//with the var 'a' I will go to the index of the array, push it to the part array and the character to the left (+1) of that character, then sum 2 to the var a to go for the next pair on the array digits
      console.log(digits[index]);
      a += 2;
    }
    part.push(digits[a]+'_') //here I push the '_' to the las character due that is a single character so it needs '_' in the end
    return part;
  } // if the array 'digits' is an even array then execute this code that is the same as above but without the '_' in the end
    for (let index = 0; index < digits.length; index += 2) {
      part.push(digits[a]+digits[a+1]);
      console.log(digits[index]);
      a += 2;
    }
    return part;
}
console.log(solution(str));


//otra solucion 

function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}

//otra solucion mas de tipo produccion
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

//otra solucion

function solution(str){
  let arr = [];
  for(var i = 0; i < str.length; i += 2){
    let second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////////
//double every digit
let num = 9119;

function squareDigits(num){
  let digits = num.toString().split('');
  let double = 0;
  let doubleList = [];
  digits.forEach(element => {
    double = element*element;
    doubleList.push(double);
  });
  let int = []
  int = Number(doubleList.join(''));
  return int;
};

console.log(squareDigits(num));

//otra solucion
function squareDigits(num){
  var string = num.toString();
  var results = [];
  for (var i = 0; i < string.length; i++){
      results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
};

//otra solucion mas
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
};

////////////////////////////////////////////////////////////////////////////////////////////

/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/


let data =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];


function openOrSenior(data){
  let finalString = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][1] >= 7  && data[i][0] >= 55) {
      finalString.push("Senior");
      //console.log('senior');
    } else {
      finalString.push("Open");
      //console.log('open');
    }
    //console.log(data[i][1]);
    //console.log(data[i][0])
    
  };
  return finalString;
};

console.log(openOrSenior(data));

///////////////////////////////////////////////////////////////////////////////////////
