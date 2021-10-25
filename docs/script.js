//create the Terrain map overlay
var minZoom =  6.0 ;
var maxZoom =  15.0 ;


//path to map tiles parent folder
var TerrainOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/highresolution\/'; 
var ElpasoOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/';
var tileSuffix = '';
//generate the tile urls and set up the overlay options
var Terrain = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [TerrainOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var Elpaso = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [ElpasoOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});


//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS 
function initMap() {

  var mapOptions = {
center: {lat: 28.001088, lng: -101.068543},
zoom: 6,
maxZoom: 15,
minZoom: 6,
scaleControl: true,
streetViewControl: true,
mapTypeControl: true,
mapTypeId: 'terrain',
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#000000'}]
    },
{
  featureType: "road",
  elementType: "all",
  stylers: [
    { visibility: "off" }
  ]
},
{
  featureType: "administrative.locality",
  elementType: "labels",
  stylers: [
    { visibility: "off" }
  ]
},
{
  featureType: "administrative.neighborhood",
  elementType: "labels",
  stylers: [
    { visibility: "off" }
  ]
},
{
  featureType: "administrative.land_parcel",
  elementType: "labels",
  stylers: [
    { visibility: "off" }
  ]
},
{
  featureType: "poi",
  elementType: "all",
  stylers: [
    { visibility: "off" }
  ]
},
{
  featureType: "landscape",
  elementType: "labels",
  stylers: [
    { visibility: "off" }
]},
    {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { color: '#000000' }
  ]},
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { lightness: 100 }
  ]},
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { saturation: -50 }
  ]},
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { gamma: 10 }
  ]},
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      },    
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#000000'}]
  }]}

// The line below creates the map, assigning it to this variable. 
var RioMap = new google.maps.Map(document.getElementById("map"), mapOptions);

//once the map is generated, display the Terrain Map overlay
RioMap.overlayMapTypes.insertAt(0, Elpaso);
RioMap.overlayMapTypes.insertAt(0, Terrain);
}

window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
Terrain.setOpacity(newOpacity);
Elpaso.setOpacity(newOpacity);
});