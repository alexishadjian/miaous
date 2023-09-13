const distanceTag = document.querySelector('.distance');
const scoreTag = document.querySelector('.score');

// Coordonnées par défaut et niveau de zoom initial
const map = L.map('map').setView([0, 0], 19.5);

// Ajouter une carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//User marker
var userIconMarker = L.icon({
    iconUrl: 'assets/img/miaouss.png',
    iconSize: [50, 50],
});

//User marker
var mouseIconMarker = L.icon({
    iconUrl: 'assets/img/rattata.png',
    iconSize: [50, 50],
});

// Créer un marker pour la position de l'utilisateur
const userMarker = L.marker([0, 0], {icon: userIconMarker}).addTo(map);

const userCircle = L.circle([0, 0], {
    color: 'white',
    fillColor: 'aliceblue',
    fillOpacity: 0.5,
    radius: 30
}).addTo(map)

//Position de la souris en dure
const mousePos = {
    lat: 0,
    lng: 0,
}

function mouse(position){
    if (Math.random(2) === 0) {
        var latitudesouris = position.coords.latitude + Math.random() / 25;
    }
    else {
        var latitudesouris = position.coords.latitude - Math.random() / 400;
    }
    if (Math.random(2) === 0) {
        var longitudesouris = position.coords.longitude + Math.random() / 400;
    }
    else {
        var longitudesouris = position.coords.longitude - Math.random() / 400;
    }
    // Mettre à jour la position du marker
    mouseMarker.setLatLng([latitudesouris, longitudesouris]);
    mousePos.lat = latitudesouris;
    mousePos.lng = longitudesouris;
}

//Créer un marker pour la souris
const mouseMarker = L.marker([mousePos.lat, mousePos.lng], {icon: mouseIconMarker}).addTo(map);

// Fonction pour mettre à jour la position de l'utilisateur
function updateUserLocation(position) {
    let userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }

    // Mettre à jour la position du marker
    userMarker.setLatLng([userPos.lat, userPos.lng]);
    userCircle.setLatLng([userPos.lat, userPos.lng]);

    // Centrer la carte sur la nouvelle position
    map.setView([userPos.lat, userPos.lng]);

    updateDistance(userPos);

    checkDistance(userPos, mousePos);

}

//Mise à jour de la distance entre le joueur et la souris 
function updateDistance(userPos) {
    let distance = map.distance([userPos.lat, userPos.lng], [mousePos.lat, mousePos.lng])
    distanceTag.innerHTML = Math.round(distance) + ' mètres';
}

function checkDistance(userPos, mousePos) {
    let distance = map.distance([userPos.lat, userPos.lng], [mousePos.lat, mousePos.lng])
    if ( distance < 20 ) {
        console.log('Tu as attrapé la souris');
        mouse(userPos);
        scoreTag.innerHTML += 10;
    }
}

// Fonction pour gérer les erreurs de géolocalisation
function handleLocationError(error) {
    console.error(error.message);
}

// Vérifier si le navigateur prend en charge la géolocalisation
if ("geolocation" in navigator) {
    // Obtenir la position de l'utilisateur en temps réel
    navigator.geolocation.getCurrentPosition(mouse, handleLocationError,{
        enableHighAccuracy: true
    })
    navigator.geolocation.watchPosition(updateUserLocation, handleLocationError, {
        enableHighAccuracy: true // Utiliser la géolocalisation précise si disponible
    });
} else {
    alert("La géolocalisation n'est pas disponible dans votre navigateur.");
}