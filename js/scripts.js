//business logic//
function Passport() {
  this.places = [];
}

Passport.prototype.addDestination = function(destination) {
  this.places.push(destination);
}
Passport.prototype.findByLocation = function(location) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]){
      if (this.places[i].location == location){
        return this.places[i];
      }
    }
  };
  return false;
}

function Destination(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}
Destination.prototype.showDetails = function() {
return 'I went to ' + this.location + ' in the ' + this.timeOfYear + ", while I was here I went to " + this.landmarks + '.';
}




// JavaScript code
let almaPassport = new Passport();
let springBreak = new Destination("Daytona Beach", "parties", "spring");
let camping = new Destination("Buck Lake", "lake", "summer");
let skiing = new Destination("Baker", 'snow', 'winter');
almaPassport.addDestination(springBreak);
almaPassport.addDestination(skiing);
almaPassport.addDestination(camping);

//User logic //
window.addEventListener("load", function (){

almaPassport.places.forEach( function (element) {
const li = document.createElement("li");
li.textContent = element.location;
document.querySelector('#placesList').appendChild(li);
});

const placesList = document.querySelectorAll("#placesList li");
placesList.forEach(function(place) {
place.addEventListener("click", function() {
const resultList = document.querySelector('#resultList');
resultList.textContent = '';
document.querySelector('#resultCard').style.display = 'block';
let place = almaPassport.findByLocation(this.textContent);
document.querySelector('#resultHeader').textContent = place.showDetails();
const li1 = document.createElement("li");
li1.textContent = place.landmarks;
resultList.appendChild(li1);
const li2 = document.createElement("li");
li2.textContent = place.timeOfYear;
resultList.appendChild(li2);
});
});

});
