// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper")

//const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    let list= document.getElementById("faultyItems")
   list.style.visbility= "hidden"
 

        form.addEventListener("submit", function(event){
            
            let pilot = document.querySelector("input[name=pilotName]");
            let copilot = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");

            event.preventDefault();

            formSubmission(document, pilot.value, copilot.value , fuelLevel.value, cargoMass)
        let listedPlanets;

        myFetch().then(function( planets){
            console.log(planets);
            listedPlanets = result; 
            let planetPicked = pickPlanet(listedPlanets)

            addDestinationInfo(document, planetPicked.name, planetPicked.diameter , planetPicked.star , planetPicked.distance, planetPicked.moons, planetPicked.image);
        })
        

      
    })
    

     })

    
       /*listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {*/
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    