var distanceTravelled = 0;
var distanceToMars = 70000000;
var speed = 13;
var acceleration;
var earthMiles;
var marsMiles;
var oscillation = 13;
var up = true;

function distance() {
  distanceTravelled += 8;
  document.getElementById("distanceTravelled").innerHTML = "Distance travelled " + distanceTravelled + " km";
  distanceToMars -= 8;
  document.getElementById("distanceToMars").innerHTML = "Distance to Mars " + distanceToMars + " km";
}

function speedChange() {
  oscillation++;
  if (oscillate >= 1) {
    if (up == false) {
      speed = 14;
      up = true;
      console.log(document.getElementById("speed").innerHTML);
      document.getElementById("speed").innerHTML = "Current speed " + speed + " km/s";
    }
    else {
      speed = 13;
      up = false;
      console.log(document.getElementById("speed").innerHTML);
      document.getElementById("speed").innerHTML = "Current speed " + speed + " km/s";
    }
    oscillate = 0;
  }
}

document.getElementById("convert").onclick = function () {
  earthMiles = document.getElementById("insert").value;
  marsMiles = earthMiles / 1.9;
  document.getElementById("marsMiles").innerHTML = "is " + marsMiles + " Mars miles";
};

window.onload = function(){
	setInterval(distance, 1000);
  setInterval(speedChange,3000);
};
