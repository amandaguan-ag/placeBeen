//business logic//
function Footprint() {
  this.places = [];
  this.currentId  = 0;
}

Footprint.prototype.addPlace = function (place){
  place.id = this.assignId();
  this.places[place.id] = place;
}

Footprint.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Footprint.prototype.findPlace = function(location) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]){
      if (this.places[i].location == location){
        return this.places[i];
      }
    }
  };
  return false;
}

function Place(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}
Place.prototype.showDetails = function() {
  return 'I went to ' + this.location + ' in the ' + this.timeOfYear + ", while I was here I went to " + this.landmarks + '.';
  }

// JavaScript code
let newFootprint = new Footprint();
let sea = new Place("Seattle", "Space Needle", "winter");
let ny = new Place("New York", "Empire Tower", "spring");
let van = new Place("Vancouer", 'night market', 'summer');
newFootprint.addPlace(sea);
newFootprint.addPlace(ny);
newFootprint.addPlace(van);

//User logic
function listPlaces() { 
  newFootprint.places.forEach( function (element) {
const li = document.createElement("li");
li.textContent = element.location;
document.querySelector('#placesList').appendChild(li);
});
}

function displayPlaces(){
const placesList = document.querySelectorAll("#placesList li");
placesList.forEach(function(place) {
place.addEventListener("click", function() {
const resultList = document.querySelector('#resultList');
resultList.textContent = '';
document.querySelector('#resultCard').style.display = 'block';
let place = newFootprint.findPlace(this.textContent);
document.querySelector('#resultHeader').textContent = place.showDetails();
const li1 = document.createElement("li");
li1.textContent = place.landmarks;
resultList.appendChild(li1);
const li2 = document.createElement("li");
li2.textContent = place.timeOfYear;
resultList.appendChild(li2);
});
});
}
window.addEventListener("load", function (){
  listPlaces();
  displayPlaces()
});
