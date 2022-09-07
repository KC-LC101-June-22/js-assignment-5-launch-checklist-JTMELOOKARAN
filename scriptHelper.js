// Write your helper functions here!
require('isomorphic-fetch');
//const fuelLevelReq= 10000;
//const cargoLevelReq = 10000;
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
    return missionTarget.innerHTML;
   
}

function validateInput(testInput) {
   if (isNaN(testInput)) {
       return "Not a Number";}
   else if (testInput === "") {
       return "Empty";}
   else {
       return "Is a Number";}
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

     //Initialize errror mesage string 
   /*let errorMsg = "";
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
    */
    //const fuelLevelReq= 10000;
    //const cargoLevelReq = 10000;

    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        else {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red)";
        }

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "There is not enough fuel for the journey";
        }
        else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo Weight too much to launch";
        }
        else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        faultyItems.style.visibility = "visible";
    }
    
    else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";

        if (validateInput(pilot) !== "Not a Number") {
            pilotStatus.innerHTML = "Input Invalid"
        }
        if (validateInput(copilot) !== "Not a Number") {
            copilotStatus.innerHTML = "Input Invalid"
        }
        if (validateInput(fuelLevel) !== "Is a Number") {
            fuelStatus.innerHTML = "Input Invalid"
        }
        if (validateInput(cargoLevel) !== "Is a Number") {
            cargoStatus.innerHTML = "Input Invalid"
        }
    }

   
}

async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;