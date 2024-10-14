// Arrays and Loops

//Sum of Resistors in Serie
/*
//const resistors = [-1,5,6,3];
//const resistors = [14,3.5,6];
const resistors = [8,15,100];

// Función que calcula el valor absoluto de un número para no usar Math
function absoluteValue(num){
   if(num<0){
    return Number(num*(-1))
   }else{
    return Number(num)
   }
}

function sumResistance(resArray){
    let resistance = 0
    for(let i=0; i < resArray.length; i++){
        resistance += absoluteValue(resArray[i]);
    }
    return resistance
}

console.log(sumResistance(resistors));
*/

// Secret Society 

/*
const nombres = ['Esperanza', 'Franco', 'Nia'];
const nombres = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const nombres = ['Harry', 'Ron', 'Hermione'];

function secretSocietyName(namesArray){
    let societyName = '';
    for (let i = 0; i < namesArray.length; i++){
        societyName += nombres[i].at(0);
    }
    return societyName;
}

console.log(secretSocietyName(nombres));

*/

//Array of multiples 
/*
function multiples(num, arrayLength){
    multiplesArray = [];
    for (let i = 1; i <= arrayLength; i++){
        multiplesArray.push(num*i);
    }
    return multiplesArray;
}

console.log(multiples(2,10));
console.log(multiples(17,6));
*/

// Práctica de Lógica

//User Profile
/*
let userName = prompt('Enter your name:');
let userAge = prompt('Enter your age:');
const favoriteMovies = prompt('Enter a list of your favorite movies separated by commas:');

const favoriteMoviesList = favoriteMovies.split(',').map(movie => `The film ${movie.trim()} is one of my favorites.`);

console.log(`Your name is ${userName} and you are ${userAge} years old.`);
console.log(favoriteMoviesList.join('\n'));


*/

// Highest number

/*
const  listOfNumbers= [];
for(let i=0; i<10; i++){
    let num = Number(prompt('Enter a number:'));
    listOfNumbers.push(num);
}

function highestNumber(numbers){
    let highest = numbers[0];
    for(let i=1; i < numbers.length; i++){
        if(highest < numbers[i]){
            highest = numbers[i];
        }
    }
    return highest;
}

console.log('The highest number is: ' + highestNumber(listOfNumbers));
*/

// Palindrome
/*

function isPalindrome(sentence) {
    const cleanedInput = sentence.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
}

let userSentence = prompt('Enter a word or sentence:');

if (isPalindrome(userSentence)) {
    console.log(`"${userSentence}" is a palindrome.`);
} else {
    console.log(`"${userSentence}" is not a palindrome.`);
}
*/