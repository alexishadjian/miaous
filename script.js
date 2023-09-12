// function getLocation() {
//   // Obtain the initial location one-off
//   navigator.geolocation.getCurrentPosition(getPosition);
// }  
// function stopWatch() {
//   // Discontinue watch
//   navigator.geolocation.clearWatch(watchID);
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
        
//         const userPos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//         };
//     });
// }

// function setPosition(position) {
//     console.log(position);
//     const userPos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude,
//     };
//     console.log(userPos);
//     var marker = L.marker([userPos.lat, userPos.lng]).addTo(map);
//     map.setView([userPos.lat, userPos.lng], 13);

// }


let userLat = document.querySelector('#user-lat');
let userLong = document.querySelector('#user-long');
  
function watchLocation() {
  // Obtain the location at regularly interval
  watchID = navigator.geolocation.watchPosition(successCallback);
}

const successCallback = (position) => {

    const userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    };
    console.log(userPos);

    map.setView([userPos.lat, userPos.lng], 19);
    marker.setLatLng([userPos.lat, userPos.lng]);

    userLat.innerHTML = userPos.lat;
    userLong.innerHTML = userPos.lng;

};

watchLocation();





var map = L.map('map');
var marker = L.marker([51.5, -0.09]).addTo(map);








L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
