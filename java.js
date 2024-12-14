// Importa a biblioteca readline-sync para permitir a entrada de dados pelo console
const readlineSync = require('readline-sync');

// Define uma linha separadora que será usada para organizar as saídas no console
const linha = "------------------------";

// Inicializa a variável que armazenará o resultado baseado no delta
let resultado = "N.A";

// Passo 1: Solicitar os valores de A, B e C ao usuário
console.log(`${linha}`); // Exibe a linha separadora no console

// Solicita ao usuário o valor de A
const stringA = readlineSync.question("Informe o valor de A: ");
let numeroA = parseFloat(stringA.match(/[-+]?\d+/)[0]); 
// A representa o coeficiente de x² na equação

// Solicita ao usuário o valor de B
const stringB = readlineSync.question("Informe o valor de B: ");
let numeroB = parseFloat(stringB.match(/[-+]?\d+/)[0]); 
// B representa o coeficiente de x na equação

// Solicita ao usuário o valor de C
const stringC = readlineSync.question("Informe o valor de C: ");
let numeroC = parseFloat(stringC); 
// C é o termo independente da equação

// Exibe os valores informados pelo usuário
console.log(`${linha}`);
console.log(`A = ${numeroA} B = ${numeroB} C = ${numeroC}`);

// Passo 2: Calcular o valor de Δ (Delta) usando a fórmula: Δ = B² - 4AC
let delta = numeroB * numeroB - 4 * numeroA * numeroC; // Cálculo do delta
console.log(`${linha}`);
console.log(`Delta: ${delta}`); // Exibe o valor de delta no console

// Passo 3: Usar a fórmula de Bhaskara para calcular as raízes da equação
let x1 = (-numeroB + Math.sqrt(delta)) / (2 * numeroA); // Calcula a primeira raiz (x1)
console.log(`${linha}`);
console.log(`x1: ${x1}`); // Exibe o valor de x1 no console

let x2 = (-numeroB - Math.sqrt(delta)) / (2 * numeroA); // Calcula a segunda raiz (x2)
console.log(`${linha}`);
console.log(`x2: ${x2}`); // Exibe o valor de x2 no console

// Passo 4: Interpretar o valor de Delta para determinar o tipo de raízes
console.log(`${linha}`);
if (delta > 0) {
    // Se o delta for maior que 0, a equação possui duas raízes reais e distintas
    resultado = 'Duas raízes reais e distintas.';
    console.log(`R: ${resultado}`);
}
if (delta === 0) {
    // Se o delta for igual a 0, a equação possui uma única raiz real
    resultado = 'Uma raiz real (raízes iguais).';
    console.log(`R: ${resultado}`);
}
if (delta < 0) {
    // Se o delta for menor que 0, a equação não possui raízes reais (raízes complexas)
    resultado = 'Não há raízes reais (raízes complexas).';
    console.log(`R: ${resultado}`);
}

// Exibe a linha final separadora para encerrar a execução
console.log(`${linha}`);