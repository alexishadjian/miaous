const distanceTag = document.querySelector('.distance');

// Coordonnées par défaut et niveau de zoom initial
const map = L.map('map').setView([0, 0], 19.5);

// Ajouter une carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//User marker
var iconMarker = L.icon({
    iconUrl: 'assets/img/cat.png',
    iconSize: [50, 50],
});

// Créer un marker pour la position de l'utilisateur
const userMarker = L.marker([0, 0], {icon: iconMarker}).addTo(map);

//Position de la souris en dure
const mousePos = {
    lat: 48.85916286666549,
    lng: 2.3736209650085365
}

//Créer un marker pour la souris
const mouseMarker = L.marker([mousePos.lat, mousePos.lng]).addTo(map);

// Fonction pour mettre à jour la position de l'utilisateur
function updateUserLocation(position) {
    let userPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }

    // Mettre à jour la position du marker
    userMarker.setLatLng([userPos.lat, userPos.lng]);

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
        alert('Tu as attrapé la souris');
    }
}

// Fonction pour gérer les erreurs de géolocalisation
function handleLocationError(error) {
    console.error(error.message);
}

// Vérifier si le navigateur prend en charge la géolocalisation
if ("geolocation" in navigator) {
    // Obtenir la position de l'utilisateur en temps réel
    navigator.geolocation.watchPosition(updateUserLocation, handleLocationError, {
        enableHighAccuracy: true // Utiliser la géolocalisation précise si disponible
    });
} else {
    alert("La géolocalisation n'est pas disponible dans votre navigateur.");
}