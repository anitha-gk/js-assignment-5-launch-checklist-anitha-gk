// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form=document.querySelector("#launchForm > form");
    form.addEventListener('submit', function(event){
    event.preventDefault();        
    let pilotName=document.getElementById("pilotName").value;
    let copilotName=document.getElementsByName("copilotName")[0].value;
    let fuelLevel=document.getElementsByName("fuelLevel")[0].value;
    let cargoMass=document.getElementsByName("cargoMass")[0].value;
    if (!formSubmission(document, pilotName, pilotName, copilotName, fuelLevel, cargoMass)) {
        document.getElementById('faultyItems').style.visibility ='hidden';
        document.getElementById('launchStatus').innerHTML = 'Awaiting Information Before Launch';
          return;
        }        

      
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `CoPilot ${copilotName} is ready for launch`;
    document.getElementById('faultyItems').style.visibility ='hidden';
    let isError = false;
    document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
    document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch';
   
    if (fuelLevel <10000 ) {
        document.getElementById('fuelStatus').innerHTML = 'Fuel Level is too low for launch';
        isError = true;
    }
    if (cargoMass > 10000 ) {
       document.getElementById('cargoStatus').innerHTML = 'Cargo Mass is too high for launch';
        isError = true;
    } 
    
    if (isError) {
        document.getElementById('faultyItems').style.visibility ='visible';
        document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
        document.getElementById('launchStatus').style.color = 'rgb(199,37,78)';
    }    
    else {
        document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
        document.getElementById('launchStatus').style.color = 'green';
        document.getElementById('faultyItems').style.visibility ='hidden';
    }
    })
   
    
      
    
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   let listedPlanetsResponse =myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(" listing planet" );
       console.log(listedPlanets);       
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanets);

    })
   
});