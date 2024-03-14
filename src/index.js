// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
console.log(idade); 

// a constante já foi declarada e não pode ser reatribuida



////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
    console.log(x); 
}
// Dentro do escopo o resultado de  x é 10 
//Fora do escopo aparece o erro da variável como não declarada


///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

console.log(x);
console.log(y);

// no console.log(x) ele da erro pois a variável de x é let e apresenta como variável não definida fora do escopo
// no console.log(y) devido ao erro de x a execução do código é interrompida 


///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

console.log(a); 
var a = 5;
console.log(b);
let b = 10; 


// no console.log(a)funciona pois ocorre o hoisting(içamento) da variável para o topo, como valor indefinido
//ocore erro pois o console não reconhece que a variável não foi inicializada, e não ocorre o hoisting
 

/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
console.log(x); 

// nesse caso não ocorre erro pois a variável x é var  e permite que ela seja redeclarada

let y = 15;
let y = 20; 
console.log(y); 

// nesse caso dá erro pois a variável let não permite redeclaração

//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo'
const letraInicial = nomeCompleto[0];
console.log(letraInicial)

//sua lógica para pegar a primeira letra 
// criar uma variável constante ao qual foi atribuida a primeira letra a ela





