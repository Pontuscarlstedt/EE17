mapboxgl.accessToken = 'pk.eyJ1IjoicG9udHVzY2FybHN0ZWR0IiwiYSI6ImNqcGRxNmFuZTM5bWszcXBocmcwdWcwdGEifQ.leQVSDz6ohBcC-Ac_DbhqA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/pontuscarlstedt/cjpdr8i651fuh2spgzisg4kgy', // stylesheet location
    center: [17.869175, 59.375919], // starting position [lng, lat]
    zoom: 15 // starting zoom
});
var marker1 = new mapboxgl.Marker().setLngLat([17.869175, 59.375919]).addTo(map)
var marker2 = new mapboxgl.Marker().setLngLat([17.869175, 59.395919]).addTo(map)

var popup1 = new mapboxgl.Popup()
    .setLngLat([17.869175, 59.375919])
    .setHTML("<p>Här bor jag</p>")
    .addTo(map);
var popup2 = new mapboxgl.Popup()
    .setLngLat([17.869175, 59.395919])
    .setHTML("<p>Här bor Morran</p>")
    .addTo(map);
