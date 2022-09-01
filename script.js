// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = doument.querySelector("form")
    form.addEventListener("submit", function(event){
        let document = window.document;
        let userPilot = document.querySelector("input[name=pilotName]")
        let userCopilot = document.querySelector("input[name=copilotName]")
        let userFuellevel = document.querySelector("input[name=Fuellevel]")
        let userCargomass = document.querySelector("input[name=Cargomass]")

        if (userPilot.value === "" || usercopilot.value === "" || userFuellevel.value === "" || userCargomass.value === ""){
            alert("Must Complete All Fields!")
            event.preventDefault();

        } else {
            formSubmission(document, userPilot, userCopilot, userFuellevel, userCargomass)
            event.preventDefault();
        }
    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});