// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let myHtml= `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`

    document.getElementById('missionTarget').innerHTML += myHtml;

   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    
    if(testInput===''){
        return "Empty"
    }
    if(isNaN(testInput)){
        return "Not a Number";
    } else {
        
        return "Is a Number" 
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"  ) {
        alert(" One or more of the required fields are empty ");
        return false;
    };
    
    if (validateInput(pilot) === "Is a Number") {
        alert("Pilot Name cannot be a number");
        return false;
    }

    if (validateInput(copilot) === "Is a Number") {
        alert("CoPilot Name cannot be a number");
        return false;
    }
    
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level should be a number");
        return false;
    }

    if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Level should be a number");
        return false;
    }
    return true;
}

async function myFetch() {
    let planetsReturned ;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    }).then(function(json){
        return json;
        });
        
    
    
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanetIndex = 1;
    randomPlanetIndex= Math.floor(Math.random()*planets.length);
    
    
    addDestinationInfo(document, planets[randomPlanetIndex].name, planets[randomPlanetIndex].diameter, planets[randomPlanetIndex].star, planets[randomPlanetIndex].distance, 
        planets[randomPlanetIndex].moons, planets[randomPlanetIndex].image );
    //alert(" in pickPlanet");
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;