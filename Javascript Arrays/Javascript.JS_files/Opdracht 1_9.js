// // Opdracht 1. 

// const randomNumber = [ 1, 2, 3, 4, 5];

// console.log(randomNumber);

// // Opdracht 2.
// const fruit= ['banana', 'orange', 'citrus','blueberry', 'pineapple']

// console.log(fruit);

// // Opdracht 3.

// const fruit= ['banana', 'orange', 'citrus', 'blueberry', 'apple']


// console.log(fruit[4]);

// // Opdracht 4
// const fruit= ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']


// console.log(fruit[1]);


// Opdracht 5

function generateNumber(){

    const nuMber = [1, 2, 3, 4, 5];
    
    const shuffle = (Math.floor(Math.random() * nuMber.length));
    }

    generateNumber()
    console.log(nuMber[shuffle]);


    // generateNumber()
    let numberArray = [ 12, 4, 8, 16, 100 , 256, 48, 20,-16, 0 ];

    let remainderNumberArray = numberArray[4] % numberArray[0];



    let fruits = [
    'banana', 'pineapple','raspberry','apple', 'apricot'];


    let shuffle = Math.floor(Math.random() * remainderNumberArray);
    let getRandomFruitNow = fruits[shuffle];
    console.log(getRandomFruitNow);



// Opdracht 6

// Zoek uit wat push(), pop(), shift(), slice(), splice(),
// // sort(). Maak gebruik van de fruits array en maak voor elke functie een voorbeeld en geef in
// // commentaar wat het doet.


// Voorbeeld.push:
const fruit = ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']

fruit.push('druiven');

console.log(fruit);

antwoord: 
// You can use .push to expand your Array. I have pushed grapes into the Array.
["banana", "aardbei", "citrus", "blueberry", "apple", "druiven"]

// Voorbeeld.pop:

const fruit = ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']

fruit.pop();

console.log(fruit);

antwoord:
// You can use .pop to remove items from your Array. I have remove apple from the array.
["banana", "aardbei", "citrus", "blueberry"]


// Voorbeeld.shift:
const fruit = ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']

fruit.shift();

console.log(fruit);

// antwoord:
// with.shift you can romove te first word from the Array.
["aardbei", "citrus", "blueberry", "apple"]


// Voorbeeld.slice: 
const fruit = ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']

const fruit_b = fruit.slice(2,5);

console.log(fruit_b);

// antwoord: 
// With slice you can print out a proportion of an Array in a second array it doesn't modify the array;.
// ["citrus", "blueberry", "apple"]

// Voorbeeld.splice:const fruit = ['banana', 'aardbei', 'citrus', 'blueberry', 'apple']

const fruit_b = fruit.splice(2);

console.log(fruit_b);


// antwoord:
// With .splice your able to modify and delete elements out of an array. Note that when elements are removed it will be modified(less numbers)
// ["citrus", "blueberry", "apple"]



// “Opdracht 1 t/m 9 horen bij elkaar. Maak deze opdrachten ook in 1 js bestand.”
// Opdracht 1:
// Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw
// console.
// Opdracht 2:
// Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.
// Opdracht 3:
// Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te
// printen.
// Opdracht 4:
// Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te
// printen.
// Opdracht 5:
// We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
// gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. De eerste array
// bepaalt welke fruitsoort er geprint moet worden. Gebruik de Math.random() methode om te
// bepalen welke waarde uit de eerste array wordt gehaald. Vervolgens kun je de waarde
// gebruiken als index en de fruitsoort printen in jouw console. Helaas, de getallen 5 t/m 10 uit
// de eerste array zullen een undefined teruggeven als je dat als index bij de fruit array zal
// gebruiken. Hiervoor kun je de modulo (%) gebruiken. Zoek uit hoe modulo werkt en pas dat
// toe aan de waarde van de eerste array. Als resultaat zal er altijd een fruitsoort uitgeprint
// worden.
// Opdracht 6:
// Je hebt nu geleerd hoe je arrays kunt aanmaken en de waarde kunt benaderen. Arrays
// hebben ook functies die je kunt gebruiken. 


// Opdracht 7:
// Naast de functies die je van de array kunt gebruiken heb je ook nog de “length” property die
// je kunt gebruiken. Hiermee kan je de grootte van de array opvragen. Gebruik de length
// property en print in de console uit hoe groot de fruits array is.
// Opdracht 8:
// De bestaande values van de array kan je ook aanpassen. Zoek uit hoe je op een specifieke
// index de waarde kan aanpassen. Pas de value “Peer” naar “Sinaasappel”.
// Opdracht 9:
// Kijkend naar de fruits array. Hoe draai je de values “Aardbei” en “Mand