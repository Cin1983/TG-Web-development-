// Opdracht 1


function printCar() {
    const carBrand = "Volvo";
    }
    console.log(carBrand);
//    Wat wordt er in de console gelogt? Wat voor scoping heb je hiermee te maken.

//    Undefined it's local scoped/function scoped


// Opdracht 2:
// Kijkend naar de volgende code:
 let carName;

 function printCar() {
 carBrand = "Volvo";
 }
 console.log(carBrand);
// Wat wordt er in de console gelogt?
// Undefined


// Opdracht 3:
// Kijkend naar de volgende code:
 function printCar() {
 carBrand = "Volvo";
 }
 printCar();
 console.log(carBrand);
// Wat wordt er in de console gelogt?

// undifined unless you would write the code like this: 

function printCar() {
    var carBrand = "Volvo";
     console.log(carBrand);
    }
    printCar() 


    // Opdracht 4
// Kijkend naar de volgende code:
function printCar() {
    let carBrand = "Volvo";
    return function(type) {
    console.log(carBrand + " " + type);
    }
   }
    const car = printCar();
    car("v40");


    console.log(car);
// Wat wordt er in de console gelogt? Hoe is dit anders voorgaande opdrachten? Lees
// je meer over closures:
// ReferenceError: carBrand is not defined
// With let, var or const before carBrand it would print out:

// antwoord:
// Volvo v40
// ƒ(type)

// The difference from all the other codes is that one function is closed by the other. With closures it is possible
// to lock the value of a function. The first function is locked in the return function. 
