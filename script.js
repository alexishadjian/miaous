// Coordonnées par défaut et niveau de zoom initial
const map = L.map('map').setView([0, 0], 19.5);

// Ajouter une carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Créer un marker pour la position de l'utilisateur
const userMarker = L.marker([0, 0]).addTo(map);

// Fonction pour mettre à jour la position de l'utilisateur
function updateUserLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Mettre à jour la position du marker
    userMarker.setLatLng([lat, lon]);

    // Centrer la carte sur la nouvelle position
    map.setView([lat, lon], 19.5);
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