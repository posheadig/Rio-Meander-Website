//create the subdivision map overlay ok
var minZoom =  0.0 ;
var maxZoom =  15.0 ;


//path to map tiles parent folder
var subdivisionOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/'; 
var tileSuffix = '';
//generate the tile urls and set up the overlay options
var comoSubdivision = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [subdivisionOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Como Subdivision Map',
tileSize: new google.maps.Size(256, 256)
});


//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS 
function initMap() {

// The line below creates the map, assigning it to this variable. 
var subdivisionMap = new google.maps.Map(document.getElementById("map"), {
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

//once the map is generated, display the Como Subdivision Map overlay
subdivisionMap.overlayMapTypes.insertAt(0, comoSubdivision);
}

window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
comoSubdivision.setOpacity(newOpacity);
});