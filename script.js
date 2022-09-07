// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper")

//const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let document = window.document;
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const button = document.getElementById("formSubmit");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    list.style.visibility = "hidden";
    
    
    
    
            form.addEventListener("submit", function(event) {
                 if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                     alert("All fields are required!")
                     event.preventDefault();
                    }
        
                 formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
               
    });
        
   

   let listedPlanets;
   
   let planetInput;
   planetInput = myFetch();
   planetInput.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetPicked = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
   });
   
});
