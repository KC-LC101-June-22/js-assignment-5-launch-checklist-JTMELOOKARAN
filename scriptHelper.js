// Write your helper functions here!
require('isomorphic-fetch');


async function myFetch() {
   
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

        return response.json()
        });
      
        return planetsReturned;
}


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

    x = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}>`

                document.getElementById("missionTarget").innerHTML = x
   
}

function validateInput(testInput) {
   if (testInput === ""){
       return "Empty";
    
   } else if (isNaN(testInput)){
       return "Not a Number";
   } else  {
    return "Is a Number";
   }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
   const faultyItems = document.getElementById("faultyItems")
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");
  
   //Initialize errror mesage string 
   let errorMsg = "";
   //pilot 
   if (validateInput(pilot) === "Is a Number" || pilot === ""){
       errorMsg += "Input invalid";

   }
   //individually do the same for co-pilot and other arguments 
   if (validateInput(copilot)==="Is a Number" || copilot === ""){
       errorMsg += "Input Invalid";
    
   }

    if (validateInput(fuelLevel)==="Not a Number" || fuelLevel === ""){
        errorMsg += "Input Invalid";
    }

    if (validateInput(cargoLevel)==="Not a Number" || cargoLevel === ""){
        errorMsg += "Input Invalid";
    }

    if (!(errorMsg=== "")){
        alert(errorMsg)
        console.log(errorMsg)
        return
    }
}
pilotStatus.innerHTML = `Pilot ${pilot} ready for launch`;
copilotStatus.innerHTML = `Co-pilot ${copilot} ready for launch`;

//Make sure the fuel level checks out 
const fuelLevelReq= 10000;
const cargoLevelReq = 10000; 


//if statement for each check 
if(fuelLevel < fuelLevelReq){
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("fuelStatus").innerHTML= "Not enough fuel to launch";
    document.getElementById("launchStatus").style.color= "red";
    document.getElementById("faultyItems").style.visibility= "visible"
    
} else {
    document.getElementById("fuelStatus").innerHTML = "Fuel is good to go"
}
if (cargoLevel > cargoLevelReq){
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    document.getElementById("cargoStatus").innerHTML= "Too much cargo to launch";
    document.getElementById("launchStatus").style.color= "red";
    document.getElementById("faultyItems").style.visibility= "visible"
    
} else {
    document.getElementById("cargoStatus").innerHTML= "Cargo weight good to go"
}
//Ready for launch?
if (fuelLevel >= fuelLevelReq && cargoLvel <= cargoLevelReq){
    document.getElementById("launchStatus").innerHTML= "Shuttle is ready to launch"
    document.getElementById("launchStatus").style.color= "green";
    document.getElementById("launchStatus").style.visibility= "hidden";
}


function pickPlanet(planets) {
    let planet = Math.floor(Math.random()*planets.length);
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
