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