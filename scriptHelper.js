// Write your helper functions here!

// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
    let output;
    if(testInput === "") {
        output = "Empty";
    } else if (isNaN(Number(testInput))) {
        output = "Not a Number"
    } else if (!isNaN(Number(testInput))){
        output = "Is a Number";
    } else {
        output = "Is a String";
    };
    return output;
 };
 
 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
    //validate all fields are submitted and correct data type
    let pilotValidation = validateInput(pilotName.value);
    let coPilotValidation = validateInput(copilotName.value);
    let fuelValidation = validateInput(fuelLevel.value);
    let cargoValidation = validateInput(cargoLevel.value);
    // let launchStatus = document.getElementbyId("launchStatus");
    console.log(pilotValidation, coPilotValidation, fuelValidation, cargoValidation);

    if (pilotValidation === "Empty" || coPilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
        window.alert("All fields are required!");
        return 0;
    } else if (fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
        window.alert("Make sure to enter valid information for each field!");
        return 0;
    };
        
        //add pilot and copilot names to list
        // document.getElementbyId("pilotStatus").innerHtml = `Pilot ${pilotName.value} is ready for launch.`;
        // document.getElementbyId("copilotStatus").innerHtml = `CoPilot ${copilotName.value} is ready for launch.`;
        // //validate fuel level. must be >= 10,000L. if under 10,000, change faulty items to visible, fuel status to not ready, launchStatus to red and 
        // //"Shuttle not ready for launch"
        // if (fuelLevel.value < 10000) {
        //     list.style = "visibility: visible";
        //     document.getElementbyId("fuelStatus").innerHtml = "Fuel level too low for launch";
        //     launchStatus.style.color = "red";
        //     launchStatus.innerHtml = "Shuttle not ready for launch";

        // }
    };

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;