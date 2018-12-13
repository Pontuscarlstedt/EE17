mapboxgl.accessToken = 'pk.eyJ1IjoicG9udHVzY2FybHN0ZWR0IiwiYSI6ImNqcGRxNmFuZTM5bWszcXBocmcwdWcwdGEifQ.leQVSDz6ohBcC-Ac_DbhqA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/pontuscarlstedt/cjpdr8i651fuh2spgzisg4kgy', // stylesheet location
    center: [17.869175, 59.375919], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

var positioner = [
    [17.879175, 59.375919],
    [17.889175, 59.375919],
    [17.899175, 59.375919]
];
let beskrivningar = [
    "Här bor Gullan",
    "Här bor Patrik",
    "Här bor Carl-axel"
];

for (let index = 0; index < positioner.length; index++) {
    let popup = new mapboxgl.Popup(
        {
            offset: 25
        }
    ) 
    .setText(beskrivningar[index]);
    var marker = new mapboxgl.Marker()
        .setLngLat(positioner[index])
        .setPopup(popup)
        .addTo(map);
    
}

