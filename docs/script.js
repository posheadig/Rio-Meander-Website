///Locator Buttons

var Rio = {lat: 28.601088, lng: -101.068543};
function CenterControl1(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Back to Index";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter(Rio);
    map.setZoom(6);
  });
}

var S1 = {lat: 31.60731097762663, lng: -105.98259474086535};
function CenterControl2(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 1";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 31.55731097762663, lng: -105.99259474086535});
    map.setZoom(10.30);
  });
}

var S2 = {lat: 29.559971653244393, lng: -104.40264808976754};
function CenterControl3(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 2";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat:29.555661731902605, lng:-104.33053264821585});  
    map.setZoom(11);
  });
}

var S3 = {lat: 29.174988401861018, lng: -102.95747503731427}; 
function CenterControl4(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 3";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 29.174988401861018, lng: -102.95747503731427});  
    map.setZoom(12);
  });
}

var S4A = {lat: 29.55711457185718, lng: -101.20822896157583};
function CenterControl5(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 4A";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 29.55711457185718, lng: -101.20822896157583});  
    map.setZoom(10);
  });
}

var S4F = {lat: 26.753135146710065, lng: -99.36749824712953}; 
function CenterControl6(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 4F";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 26.753135146710065, lng: -99.36749824712953});  
    map.setZoom(10);
  });
}

var S5 = {lat: 25.88205512070168, lng: -97.34156402206229}; 
function CenterControl7(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#000";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "center";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "Roboto,Arial,georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Spread 5";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 25.88205512070168, lng: -97.34156402206229});  
    map.setZoom(11.5);
  });
}

//create the Terrain map overlay
var minZoom =  6.0 ;
var maxZoom =  15.0 ;


//path to map tiles parent folder
var S3LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3LRDEMcontour\/';
var S3LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3LRDEMcolor\/';
var S2LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2LRDEMcontour\/';
var S2LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2LRDEMcolor\/';
var S1LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1LRDEMcontour\/';
var S1LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1LRDEMcolor\/';
var S1HROverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/highresolution\/'; 
var IndexOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/indextiles\/';
var S1OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/';
var S2OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2\/';
var S2HROverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2HRDEM\/';
var S3OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3\/';
var S4AOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4A\/';
var S4FOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4F\/';
var S5OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S5\/';

var tileSuffix = '';


//generate the tile urls and set up the overlay options
var S3LRDEMcontour
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S3LRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S3LRDEMcolor
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S3LRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S2LRDEMcontour = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S2LRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S2LRDEMcolor = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S2LRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S1LRDEMcontour = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S1LRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S1LRDEMcolor = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S1LRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S1HRDEM = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S1HROverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
    },
opacity: 0.7,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

var S2HRDEM = new
google.maps.ImageMapType({
getTileUrl: function(coord, zoom) {
      if (zoom < minZoom || zoom > maxZoom) {
        return null;
      }
      var numTiles = 1 << zoom;
      var x = ((coord.x % numTiles) + numTiles) % numTiles;
      return [S2HROverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
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
opacity: 1.0,
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
opacity: 1.0,
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
opacity: 1.0,
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
opacity: 1.0,
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
opacity: 1.0,
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
opacity: 1.0,
name: 'Rio Meander Map',
tileSize: new google.maps.Size(256, 256)
});

//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS 
function initMap() {

var mapOptions = {
center: {lat: 28.601088, lng: -101.068543},
zoom: 6,
maxZoom: 18,
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
  featureType: "transit",
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



//Marker interactions
var icon = {
  url: "https://storage.googleapis.com/riomap/Index/butterfly.png", // url
  scaledSize: new google.maps.Size(25, 25), // scaled size
  anchor: new google.maps.Point(15, 10) // anchor
};

var marker1 = new google.maps.Marker({
  position: {lat: 31.60731097762663, lng: -105.98259474086535}, 
  map,
  title: "Click to zoom",
  icon: icon,
});

marker1.addListener("click", () => {
  map.setZoom(10);
  map.panTo(marker1.position);
});



//once the map is generated, display the Terrain Map overlay
map.overlayMapTypes.insertAt(0, S5);
map.overlayMapTypes.insertAt(0, S4F);
map.overlayMapTypes.insertAt(0, S4A);
map.overlayMapTypes.insertAt(0, S3);
map.overlayMapTypes.insertAt(0, S2);
map.overlayMapTypes.insertAt(0, S1);
map.overlayMapTypes.insertAt(0, S2HRDEM);
map.overlayMapTypes.insertAt(0, S1HRDEM);
map.overlayMapTypes.insertAt(0, Index);
map.overlayMapTypes.insertAt(0, S1LRDEMcontour);
map.overlayMapTypes.insertAt(0, S1LRDEMcolor);
map.overlayMapTypes.insertAt(0, S2LRDEMcontour);
map.overlayMapTypes.insertAt(0, S2LRDEMcolor);
map.overlayMapTypes.insertAt(0, S3LRDEMcontour);
map.overlayMapTypes.insertAt(0, S3LRDEMcolor);

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

//////Center button////

const centerControlDiv = document.createElement("div");

CenterControl1(centerControlDiv, map);
CenterControl2(centerControlDiv, map);
CenterControl3(centerControlDiv, map);
CenterControl4(centerControlDiv, map);
CenterControl5(centerControlDiv, map);
CenterControl6(centerControlDiv, map);
CenterControl7(centerControlDiv, map);

map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv); 

}

/////Load////
window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
S1HRDEM.setOpacity(newOpacity);
S2HRDEM.setOpacity(newOpacity);
S1LRDEMcolor.setOpacity(newOpacity);
S1LRDEMcontour.setOpacity(newOpacity);
S2LRDEMcolor.setOpacity(newOpacity);
S2LRDEMcontour.setOpacity(newOpacity);
S3LRDEMcolor.setOpacity(newOpacity);
S3LRDEMcontour.setOpacity(newOpacity);
});