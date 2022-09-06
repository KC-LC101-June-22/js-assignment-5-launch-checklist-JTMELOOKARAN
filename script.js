// Write your JavaScript code here!

const { formSubmission, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse= myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets=result;
       let planetPicked = pickPlanet(listedPlanets)
       console.log(planetPicked)
       console.log(planetPicked.name)

       addDestinationInfo(document, planetPicked.name, planetPicked.diameter , planetPicked.star , planetPicked.distance, planetPicked.moons, planetPicked.image);
    
    })


    
       /*listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {*/
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
    let form = document.querySelector("form")
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let userPilot = document.querySelector("input[name=userPilot]").value;
        let userCopilot = document.querySelector("input[name=Copilot]").value;
        let userFuellevel = document.querySelector("input[name=Fuellevel]").value;
        let userCargomass = document.querySelector("input[name=Cargomass]").value;

            formSubmission(document, userPilot, userCopilot, userFuellevel, userCargomass)
        
        })
    })