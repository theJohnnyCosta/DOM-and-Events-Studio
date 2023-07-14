// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load" , function(){
    
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttlebackground = document.getElementById("shuttleBackground");
    let flightStatus = document.getElementById("flightStatus");
    let rocket = document.getElementById("rocket");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function(event) {
        window.confirm("Confirm the shuttle is ready")
        flightStatus.innerHTML = "Shuttle in flight."; 
        shuttlebackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML += 10000;

    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click" , function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The Shuttle Has Landed"; 
        shuttlebackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click" , function(event){
        window.confirm("Confirm that you want to abort!");
        flightStatus.innerHTML = "Mission Aborted";
        shuttlebackground.style.backgroundColor = "red";
        spaceShuttleHeight.innerHTML = 0;
    });

let xAxis = "245";
let yAxis = "0"
rocket.style.top = `${xAxis}px`;
rocket.style.left = `${yAxis}px`

up.addEventListener("click", function() {
    xAxis = Number(xAxis) - 10
    rocket.style.top = `${xAxis}px`
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
})
down.addEventListener("click", function() {
    xAxis = Number(xAxis) + 10
    rocket.style.top = `${xAxis}px`
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000
})
left.addEventListener("click", function() { 
    yAxis = Number(yAxis) - 10
    rocket.style.left = `${yAxis}px`
})
right.addEventListener("click", function() {
    yAxis = Number(yAxis) + 10
    rocket.style.left = `${yAxis}px`
})
});