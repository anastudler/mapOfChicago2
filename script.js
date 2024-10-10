const map = L.map("map").setView([41.8781, -87.6298], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locations = [
  {
    name: "Millennium Park",
    coords: [41.8827, -87.6233],
    description:
      "Home to Cloud Gate ('The Bean'), Crown Fountain, and Lurie Garden. A must-see!",
    image: "https://example.com/millennium_park.jpg",
  },
  {
    name: "Art Institute of Chicago",
    coords: [41.8796, -87.6237],
    description:
      "One of the world's leading art museums. Don't miss Grant Wood's American Gothic.",
    image: "https://example.com/art_institute.jpg",
  },
  {
    name: "Navy Pier",
    coords: [41.8917, -87.6086],
    description:
      "Iconic lakefront pier with restaurants, shops, and a Ferris wheel.",
    image: "https://example.com/navy_pier.jpg",
  },
  {
    name: "Wrigley Field",
    coords: [41.9484, -87.6553],
    description: "Historic ballpark, home of the Chicago Cubs.",
    image: "https://example.com/wrigley_field.jpg",
  },
  {
    name: "Lincoln Park Zoo",
    coords: [41.9215, -87.6336],
    description:
      "Free zoo featuring a wide variety of animals in naturalistic habitats.",
    image: "https://example.com/lincoln_park_zoo.jpg",
  },
  {
    name: "Willis Tower Skydeck",
    coords: [41.8789, -87.6359],
    description:
      "Observation deck on the 103rd floor of the iconic Willis Tower.",
    image: "https://example.com/willis_tower.jpg",
  },
  {
    name: "Magnificent Mile",
    coords: [41.8954, -87.6243],
    description:
      "Upscale section of Michigan Avenue known for shopping and architecture.",
    image: "https://example.com/magnificent_mile.jpg",
  },
];

locations.forEach((location) => {
  const marker = L.marker(location.coords).addTo(map);

  const popupContent = `
        <div class="popup-content">
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            <img src="${location.image}" alt="${location.name}">
        </div>
    `;

  marker.bindPopup(popupContent);
});
