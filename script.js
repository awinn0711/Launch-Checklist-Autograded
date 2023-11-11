// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");



window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    //call formSubmission function
    form.addEventListener("submit", function(event) {
       let validation = formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
       console.log(validation);
       if (validation === 0) {
        event.preventDefault();
       };
       event.preventDefault();
     });
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