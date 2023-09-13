const distanceTag = document.querySelector('.distance');
const scoreTag = document.querySelector('.score');
let userScore = 0;

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
    coords: {
        latitude: 0,
        longitude: 0,
    }
}

function mouse(position){
    if (Math.random(2) === 0) {
        var latitudesouris = position.coords.latitude + Math.random() / 400;
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
    mousePos.coords.latitude = latitudesouris;
    mousePos.coords.longitude = longitudesouris;
}

//Créer un marker pour la souris
const mouseMarker = L.marker([mousePos.coords.latitude, mousePos.coords.longitude], {icon: mouseIconMarker}).addTo(map);

// Fonction pour mettre à jour la position de l'utilisateur
function updateUserLocation(position) {
    let userPos = {
        coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }
    }

    // Mettre à jour la position du marker
    userMarker.setLatLng([userPos.coords.latitude, userPos.coords.longitude]);
    userCircle.setLatLng([userPos.coords.latitude, userPos.coords.longitude]);

    // Centrer la carte sur la nouvelle position
    map.setView([userPos.coords.latitude, userPos.coords.longitude]);

    // Mise à jour de l'affichage de la distance
    updateDistance(userPos);

    //Vérifie si le joeur atteint une souris
    checkDistance(userPos, mousePos);

}

//Mise à jour de la distance entre le joueur et la souris 
function updateDistance(userPos) {
    let distance = map.distance([userPos.coords.latitude, userPos.coords.longitude], [mousePos.coords.latitude, mousePos.coords.longitude])
    distanceTag.innerHTML = Math.round(distance) + ' mètres';
}

function checkDistance(userPos, mousePos) {
    let distance = map.distance([userPos.coords.latitude, userPos.coords.longitude], [mousePos.coords.latitude, mousePos.coords.longitude])
    if ( distance < 30 ) {
        console.log('Tu as attrapé la souris');
        userScore += 10;
        scoreTag.innerHTML = userScore + ' points';
        mouse(userPos);
        updateDistance(userPos);
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