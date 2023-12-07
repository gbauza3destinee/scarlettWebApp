
/// 1. define location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(logPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function logPosition(position) {
   console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
}


/// 2. Prompt phone 
function openWindow(){
window.open("tel:+15678675309");
getLocation();
}