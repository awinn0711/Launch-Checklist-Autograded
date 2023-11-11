// Write your helper functions here!

// require('cross-fetch/polyfill');

async function myFetch() {
    let planetsReturned;

    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json();

    return planetsReturned;
}

//expect planets to be array of objects
function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)];
};


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
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
 };
 
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
    let pilotValidation = validateInput(pilotName);
    let coPilotValidation = validateInput(copilotName);
    let fuelValidation = validateInput(fuelLevel);
    let cargoValidation = validateInput(cargoLevel);
    
    if (pilotValidation === "Empty" || coPilotValidation === "Empty" || fuelValidation === "Empty" || cargoValidation === "Empty") {
        window.alert("All fields are required!");
        return 0;
    } else if (fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
        window.alert("Make sure to enter valid information for each field!");
        return 0;
    };
    // list.style.visibility = "";
    let launchStatus = document.getElementById("launchStatus");
    // add pilot and copilot names to list
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch.`;
    // validate fuel level. must be >= 10,000L. if under 10,000, change faulty items to visible, fuel status to not ready, launchStatus to red and 
    // "Shuttle not ready for launch"
    if (fuelLevel < 10000) {
        list.style.visibility = "";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        return 0;
    };
    // validate cargo mass, must be less than 10,000. if over, change list to visible, cargoStatus to too high, etc.
    if (cargoLevel > 10000) {
        list.style.visibility = "";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        if(fuelLevel >= 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        return 0;
    };
    // if fuel level and cargo level, ok, change launch status to green and "Shuttle is Ready for Launch"
    if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "";
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        return 0;
    };
};

//enabling workflows
 


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;