//create the Terrain map overlay
var minZoom =  0.0 ;
var maxZoom =  15.0 ;


//path to map tiles parent folder
var TerrainOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/'; 
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


//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS 
function initMap() {

// The line below creates the map, assigning it to this variable. 
var RioMap = new google.maps.Map(document.getElementById("map"), {
center: {lat: 31.001088, lng: -106.068543},
zoom: 10,
maxZoom: 13,
minZoom: 5,
scaleControl: true,
streetViewControl: false,
mapTypeControl: true,
//initialize with ROADMAP, the other 'premade' map styles are SATELLITE, TERRAIN and HYBRID. 
mapTypeId: google.maps.MapTypeId.ROADMAP
});

//once the map is generated, display the Terrain Map overlay
RioMap.overlayMapTypes.insertAt(0, Terrain);
}

window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
Terrain.setOpacity(newOpacity);
});