//create the Terrain map overlay
var minZoom =  6.0 ;
var maxZoom =  15.0 ;


//path to map tiles parent folder
var TerrainOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/highresolution\/'; 
var IndexOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/indextiles\/';
var S1OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/';
var S2OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2\/';
var S3OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3\/';
var S4AOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4A\/';
var S4FOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4F\/';
var S5OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S5\/';

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

var Index = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [IndexOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 1.0,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S1 = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S1OverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S2 = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S2OverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S3 = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S3OverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S4A = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S4AOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S4F = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S4FOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S5 = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S5OverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
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
  featureType: "administrative",
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
var map = new google.maps.Map(document.getElementById("map"), mapOptions);



//once the map is generated, display the Terrain Map overlay
map.overlayMapTypes.insertAt(0, S5);
map.overlayMapTypes.insertAt(0, S4F);
map.overlayMapTypes.insertAt(0, S4A);
map.overlayMapTypes.insertAt(0, S3);
map.overlayMapTypes.insertAt(0, S2);
map.overlayMapTypes.insertAt(0, S1);
map.overlayMapTypes.insertAt(0, Terrain);
map.overlayMapTypes.insertAt(0, Index);

//Data Layer (Geojson)
var data_layer_1 = new google.maps.Data({map: map});
var data_layer_2 = new google.maps.Data({map: map});

data_layer_1.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/indigenouslanguages.geojson');
data_layer_2.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/treaty1944rivers.geojson');

data_layer_1.setStyle({
  fillOpacity: "0.02",
    strokeWeight: .3,
    strokeColor: '#039dfc'
});
data_layer_2.setStyle({
    strokeColor: '#f65275',
    strokeWeight: 1
});

}


window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
Terrain.setOpacity(newOpacity);
S1.setOpacity(newOpacity);
});