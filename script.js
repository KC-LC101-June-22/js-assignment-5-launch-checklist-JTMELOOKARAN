// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper")

//const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let document = window.document;
    let form = document.querySelector("form")
    let list= document.getElementById("faultyItems")
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    list.style.visibility = "hidden"

   
   

        form.addEventListener("submit", function(event){
            
            if (pilotName.value ==="" || copilotName.value ==="" ||fuelLevel.value==="" || cargoLevel.value === ""){
                alert("All fields are required")
            }
            formSubmission(window.document, pilotName.value, copilotName.value , fuelLevel.value, cargoMass)
            event.preventDefault();



        let listedPlanets;
        let planetInput;
        planetInput= myFetch();

        planetInput.then(function(result){
            listedPlanets = result; 
            console.log(listedPlanets);
        }).then(function(){
            console.log(listedPlanets)
            let planetPicked = pickPlanet(listedPlanets)
            addDestinationInfo(window.document, planetPicked.name, planetPicked.diameter , planetPicked.star , planetPicked.distance, planetPicked.moons, planetPicked.image);
        })
            

            
        })
        

      
    })
    

    

    
       /*listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {*/
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    