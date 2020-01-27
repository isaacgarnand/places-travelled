

// Logic for PlacesTravelled
function PlacesTravelled() {
  this.places = [];
  this.currentId = 0;
}

PlacesTravelled.prototype.addPlaces = function (place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesTravelled.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


// Logic for Location 
function Location(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}


// User Interface Logic 
var placesTravel = new PlacesTravelled();

function listLocationDetails () {
  $("li#" + currentId).on("click", function() {
    $("li.T" + currentId).toggle();
  });
}

function displayPlacesTravelled(informationToDisplay) {
  var placesList = $("ul#locations");
  var htmlForLocation = "";
  informationToDisplay.places.forEach(function(place) {
    htmlForLocation += "<li id=" + place.id + ">" + place.location + "</li>" + '<ul><li class="T' + place.id + '">' + "Landmark: " + place.landmark + "</li>" + '<li class="T' + place.id + '">' + "Time of visit: " + place.time + "</li>" + '<li class="T' + place.id + '">' + "Notes on trip: " + place.notes + "</li></ul>";
  });
  placesList.html(htmlForLocation);
}

$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var location = $("input#place").val();
    var landmark = $("input#landmark").val();
    var time = $("input#time").val();
    var notes = $("input#notes").val();
    var newPlace = new Location(location, landmark, time, notes);
    placesTravel.addPlaces(newPlace);
    displayPlacesTravelled(placesTravel);
  });
});



