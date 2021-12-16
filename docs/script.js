



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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "volver al índice";
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 1";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 31.58931097762663, lng: -105.99259474086535});
    map.setZoom(10.30);
    map.setHeading(280);
    map.setTilt(47.5);
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 2";
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 1";
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 4A";
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 4F";
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
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "18px";
  controlText.style.lineHeight = "38px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "propagación 5";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 25.88205512070168, lng: -97.34156402206229});  
    map.setZoom(11.5);
  });
}

//create the Terrain map overlay
var minZoom =  6.0 ;
var maxZoom =  20.0 ;


//path to map tiles parent folder

//DEM overlays
var S5LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S5LRDEMcontour\/';
var S5LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S5LRDEMcolor\/';
var S4FLRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4FLRDEMcolor\/';
var S4FLRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4FLRDEMcontour\/';
var S4ALRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4LRDEMcolor\/';
var S4ALRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4LRDEMcontour\/';
var S3LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3LRDEMcontour\/';
var S3LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3LRDEMcolor\/';
var S2LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2LRDEMcontour\/';
var S2LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2LRDEMcolor\/';
var S1LRDEMcontourOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1LRDEMcontour\/';
var S1LRDEMcolorOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1justtext\/';
var S1HROverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/highresolution\/'; 
//Layout Overlays
var IndexOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/indextiles\/';
var S1OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S1\/';
var S2OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2\/';
var S2HROverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S2HRDEM\/';
var S3OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S3\/';
var S4AOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4A\/';
var S4FOverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S4F\/';
var S5OverlayUrl = 'https:\/\/storage.googleapis.com\/riomap\/S5\/';

var tileSuffix = '';

var TILE_URL = //'http://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png';
'https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=mh9DlzDurxhdAH4U2Nhb';
// Create a new ImageMapType layer.
var myMapType = new google.maps.ImageMapType({
  name: "MYLAYER",
  getTileUrl: function(coord, zoom) {
    var url = TILE_URL
      .replace('{x}', coord.x)
      .replace('{y}', coord.y)
      .replace('{z}', zoom);
    return url;
  },
  tileSize: new google.maps.Size(256, 256),
  minZoom: 1,
  maxZoom: 20,
  opacity: 0.2
});
var TILE_URL2 = 'https://api.maptiler.com/tiles/hillshades/{z}/{x}/{y}.png?key=mh9DlzDurxhdAH4U2Nhb';
// Create a new ImageMapType layer.
var myMapType2 = new google.maps.ImageMapType({
  name: "MYLAYER2",
  getTileUrl: function(coord, zoom) {
    var url = TILE_URL2
      .replace('{x}', coord.x)
      .replace('{y}', coord.y)
      .replace('{z}', zoom);
    return url;
  },
  tileSize: new google.maps.Size(256, 256),
  minZoom: 1,
  maxZoom: 20,
  opacity: 0.75
});
//generate the tile urls and set up the overlay options
var S5LRDEMcontour = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S5LRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S5LRDEMcolor = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S5LRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S4FLRDEMcolor = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S4FLRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S4FLRDEMcontour = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S4FLRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S4ALRDEMcolor = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S4ALRDEMcolorOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });

var S4ALRDEMcontour = new
google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
        if (zoom < minZoom || zoom > maxZoom) {
          return null;
        }
        var numTiles = 1 << zoom;
        var x = ((coord.x % numTiles) + numTiles) % numTiles;
        return [S4ALRDEMcontourOverlayUrl, zoom, '/', x, '/', coord.y, tileSuffix].join('');
      },
  opacity: 0.7,
  name: 'Rio Meander Map',
  tileSize: new google.maps.Size(256, 256)
  });


var S3LRDEMcontour = new
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

var S3LRDEMcolor = new
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
  opacity: 1,
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

/////Data Info Window

var infowindow = new google.maps.InfoWindow();





//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS 
function initMap() {



// The line below creates the map, assigning it to this variable. 
var map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 25.8845837, lng: -97.4649607 },
  gestureHandling: 'cooperative',
  zoom: 16.4,
  heading: 267,
  tilt: 90.5,
  mapId: "c56cde107fc8df71",
  scaleControl: true
});

var panorama = new google.maps.StreetViewPanorama(
  document.getElementById("street-view"),
  {
    position: { lat: 25.8790294, lng: -97.4813291 },
   pov: { heading: 37.04, pitch: 25 },
    zoom: 0,
    enableCloseButton: true
  }
);


 

////TEST

map.setStreetView(panorama);


//Marker interactions

var icon = {
  url: "https://storage.googleapis.com/riomap/Its_My_Life_Sri_Lankan_Version_Sandaru_Sathsara.gif", // url
//  scaledSize: new google.maps.Size(25, 25), // scaled size
 // anchor: new google.maps.Point(15, 10) // anchor
};
var icon2 = {
  url: "https://storage.googleapis.com/riomap/Index/arbitration%201911.png", // url
//  scaledSize: new google.maps.Size(25, 25), // scaled size
 // anchor: new google.maps.Point(15, 10) // anchor
};
var icon3 = {
  //url: "https://storage.googleapis.com/riomap/Index/S5river/storytest.gif"
url: "https://storage.googleapis.com/riomap/Index/S5river/josetextbeginning.gif"

}
var icon4 = {
  //url: "https://storage.googleapis.com/riomap/Index/S5river/storytest.gif"
url: "https://storage.googleapis.com/riomap/Index/S5river/Speaker_Icon.svg.png",
  scaledSize: new google.maps.Size(50, 50), // scaled size
}

var icon5 = {
  //url: "https://storage.googleapis.com/riomap/Index/S5river/storytest.gif"
url: "https://storage.googleapis.com/riomap/Index/S5river/eye.png",
  //scaledSize: new google.maps.Size(25, 25), // scaled size
}

var icon6 = {
  url: "https://storage.googleapis.com/riomap/Index/S5river/Screen%20Shot%202021-12-14%20at%204.25.17%20PM.png",
scaledSize: new google.maps.Size(50, 50), // scaled size
}

var marker1 = new google.maps.Marker({
  position: {lat: 31.48379, lng: -106.16370}, 
  map: panorama,
 //title: "Click to zoom",
  icon: icon,
});

var marker2 = new google.maps.Marker({
  position: {lat: 31.47933, lng: -106.15964}, 
  map: panorama,
 //title: "Click to zoom",
  icon: icon2,
});

var marker3 = new google.maps.Marker({
  position: {lat: 25.882778, lng: -97.476675},
  map: map,
  icon: icon4
});
var name = 'story1';
var name2 = 'story2';


//var marker4 = new google.maps.Marker({
 // position: { lat: 25.882778, lng: -97.476675 },
 // map: map,
 // icon: icon4,
//});

var marker5 = new google.maps.Marker({
  position: { lat: 25.8796, lng: -97.48065 },
  map: panorama,
  icon: icon3,
});

var marker6 = new google.maps.Marker({
  position: { lat: 25.8790294, lng: -97.4813291 },
  map: panorama,
  icon: icon5
});

var marker7 = new google.maps.Marker({
  position: { lat: 31.74791, lng: -106.48812},
  map: map,
  icon: icon4
});

//var marker8 = new google.maps.Marker({
 // position: { lat: 31.74819906821323, lng: -106.48809708598469}, 
 // map: panorama,
 //// icon: icon6
//});


var content1 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<div id="bodyContent">'+
'<iframe width="150" height="70" src="https://storage.googleapis.com/riomap/sample-3s.mp3" frameborder="1" allowfullscreen></iframe>'+
'</div>'+
'</div>';
var infowindow5 = new google.maps.InfoWindow({
  content: content1,
  maxWidth: 350
});

var content2 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<div id="bodyContent">'+ '<p>This is a place holder for one of Jose Villanuevas stories. In street view, the beginning of the story is seen. IN DEVOLOPMENT of locating other stories on the river.</p>' +
'<iframe width="50" height="50" src="https://www.youtube.com/embed/2t5_AAqGHSo?controls=0&amp;start=6197" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
'</div>'+
'</div>';
var infowindow6 = new google.maps.InfoWindow({
  content: content2,
  maxWidth: 150
});

var content3 = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<div id="bodyContent">'+ '<p> Audio playing is the oral argument held in the US supreme court on 11/12/19, in which the court held that the precedent established under the 1971 Bivens v. Six Unknown Named Agents decision did not extend to claims based on cross-border shootings. </p>' +
'<iframe width="750" height="750" src="https://storage.googleapis.com/riomap/Index/S5river/Screen%20Shot%202021-12-14%20at%204.25.17%20PM.png" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
'</div>'+
'</div>';
var infowindow7 = new google.maps.InfoWindow({
  content: content3,
  maxWidth: 800
});

marker2.addListener("click", () => {
  infowindow5.open(marker2.get("map"), marker2,);
  // map.setZoom(10);
  //map.panTo(marker1.position);
});

marker3.addListener("click", () => {
  infowindow6.open(marker3.get("map"), marker3,);
   map.setZoom(16);
  map.panTo(marker3.position);
  map.setTilt(90);
  map.setHeading(267.3);
});
marker7.addListener("click", () => {
  infowindow7.open(marker7.get("map"), marker7,);
   //map.setZoom(16);
  //map.panTo(marker3.position);
  //map.setTilt(90);
  //map.setHeading(267.3);
});

google.maps.event.addDomListener(document.getElementById(name), 'click', function() {
  //infowindow6.open(map,marker3);
   map.setZoom(16);
  map.panTo(marker3.position);
  map.setTilt(90);
  map.setHeading(267.3);
  panorama.setPosition(marker6.position);
  panorama.setVisible(true);
  panorama.setZoom(0);
  panorama.setPov({ heading: 37.04, pitch: 15 });
});
google.maps.event.addDomListener(document.getElementById(name2), 'click', function() {
  //infowindow6.open(map,marker3);
   map.setZoom(16);
  map.panTo(marker7.position);
  map.setTilt(90);
  map.setHeading(77.11);
  panorama.setPosition({lat: 31.7488949, lng: -106.4884716});
  panorama.setVisible(true);
  panorama.setZoom(5);
  panorama.setPov({ heading: 167.98, pitch: -2 });
});


//once the map is generated, display the Map overlays
map.overlayMapTypes.insertAt(0, myMapType2);
map.overlayMapTypes.insertAt(0, myMapType);
//map.overlayMapTypes.insertAt(0, S5);
//map.overlayMapTypes.insertAt(0, S4F);
//map.overlayMapTypes.insertAt(0, S4A);
//map.overlayMapTypes.insertAt(0, S3);
//map.overlayMapTypes.insertAt(0, S2);
//map.overlayMapTypes.insertAt(0, S1);
//map.overlayMapTypes.insertAt(0, S2HRDEM);
//map.overlayMapTypes.insertAt(0, S1HRDEM);
//map.overlayMapTypes.insertAt(0, Index);
//map.overlayMapTypes.insertAt(0, S1LRDEMcontour);
map.overlayMapTypes.insertAt(0, S1LRDEMcolor);
//map.overlayMapTypes.insertAt(0, S2LRDEMcontour);
//map.overlayMapTypes.insertAt(0, S2LRDEMcolor);
//map.overlayMapTypes.insertAt(0, S3LRDEMcontour);
//map.overlayMapTypes.insertAt(0, S3LRDEMcolor);
//map.overlayMapTypes.insertAt(0, S4ALRDEMcontour);
//map.overlayMapTypes.insertAt(0, S4ALRDEMcolor);
//map.overlayMapTypes.insertAt(0, S4FLRDEMcontour);
//map.overlayMapTypes.insertAt(0, S4FLRDEMcolor);
//map.overlayMapTypes.insertAt(0, S5LRDEMcontour);
//map.overlayMapTypes.insertAt(0, S5LRDEMcolor);

$("#layer2_checkbox").change(function() {
  if (this.checked) {
    data_layer_22.setMap(map);
  } else {
    data_layer_22.setMap(null);
  }
});

//Data Layer (Geojson)

var data_layer_1 = new google.maps.Data({map: map});
var data_layer_2 = new google.maps.Data({map: map});
var data_layer_3 = new google.maps.Data({map: map});
var data_layer_4 = new google.maps.Data({map: map});
var data_layer_5 = new google.maps.Data({map: map});
//S1
var data_layer_6 = new google.maps.Data({map: map});
var data_layer_7 = new google.maps.Data({map: map});
var data_layer_8 = new google.maps.Data({map: map});
var data_layer_9 = new google.maps.Data({map: map});
var data_layer_10 = new google.maps.Data({map: map});
var data_layer_11 = new google.maps.Data({map: map});
var data_layer_12 = new google.maps.Data({map: map});
var data_layer_13 = new google.maps.Data({map: map});
var data_layer_14 = new google.maps.Data({map: map});
var data_layer_15 = new google.maps.Data({map: map});
var data_layer_16 = new google.maps.Data({map: map});
var data_layer_17 = new google.maps.Data({map: map});
var data_layer_18 = new google.maps.Data({map: map});
var data_layer_19 = new google.maps.Data({map: map});
var data_layer_20 = new google.maps.Data({map: map});
var data_layer_21 = new google.maps.Data({map: map});
var data_layer_22 = new google.maps.Data({map: map});
var data_layer_23 = new google.maps.Data({map: map});
var data_layer_24 = new google.maps.Data({map: map});
var data_layer_25 = new google.maps.Data({map: map});
var data_layer_26 = new google.maps.Data({map: map});
var data_layer_27 = new google.maps.Data({map: map});

data_layer_2.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/treaty1944rivers.geojson');
data_layer_1.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/indigenouslanguages.geojson');
data_layer_5.loadGeoJson(
 'https://storage.googleapis.com/riomap/Index/S4A2020.geojson');
data_layer_4.loadGeoJson(
   'https://storage.googleapis.com/riomap/Index/S4A1970s.geojson');
data_layer_3.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/S4A1940s.geojson');
  ////S1
  data_layer_6.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/IBC/1852.geojson');
    data_layer_7.loadGeoJson(
   'https://storage.googleapis.com/riomap/Index/IBC/1889.geojson');
  data_layer_8.loadGeoJson(
     'https://storage.googleapis.com/riomap/Index/IBC/1899.geojson');
  data_layer_9.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/IBC/1907.geojson');
    data_layer_10.loadGeoJson(
      'https://storage.googleapis.com/riomap/Index/S1/1890s.geojson');
data_layer_11.loadGeoJson(
        'https://storage.googleapis.com/riomap/Index/S1/1910s.geojson');
        data_layer_12.loadGeoJson(
          'https://storage.googleapis.com/riomap/Index/S1/1930s.geojson'); 
          data_layer_13.loadGeoJson(
            'https://storage.googleapis.com/riomap/Index/S1/1940s.geojson');
            data_layer_14.loadGeoJson(
              'https://storage.googleapis.com/riomap/Index/S1/1950s.geojson');
              data_layer_15.loadGeoJson(
                'https://storage.googleapis.com/riomap/Index/S1/1970s.geojson');
                data_layer_16.loadGeoJson(
                  'https://storage.googleapis.com/riomap/Index/S1/1980s.geojson');
data_layer_17.loadGeoJson(
'https://storage.googleapis.com/riomap/Index/S5river/1930s.geojson');
data_layer_18.loadGeoJson(
'https://storage.googleapis.com/riomap/Index/S5river/1950s.geojson');
  data_layer_19.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/S5river/1960s.geojson');
  data_layer_20.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/S5river/1980s.geojson');
  data_layer_21.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/S5river/2000s.geojson');
    data_layer_22.loadGeoJson(
      'https://opendata.arcgis.com/datasets/e735940321bd4383bab528a91bf526f8_0.geojson');
  data_layer_23.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/border_fence_map.geojson');
    data_layer_24.loadGeoJson(
      'https://opendata.arcgis.com/datasets/c4abf391840049ce853a0a209ccbde55_0.geojson');
      data_layer_25.loadGeoJson(
        'https://storage.googleapis.com/riomap/Index/pipelines.geojson');
        data_layer_26.loadGeoJson(
          'https://storage.googleapis.com/riomap/Index/HAPCMAP.geojson');
          data_layer_27.loadGeoJson(
            'https://storage.googleapis.com/riomap/Index/HAPCMAP.geojson');


data_layer_1.setStyle({
  fillOpacity: "0.02",
    strokeWeight: .3,
    strokeColor: '#039dfc',
    zIndex:0
});
data_layer_2.setStyle({
    strokeColor: '#f65275',
    strokeWeight: 1,
    zIndex:1
});
data_layer_3.setStyle({
  fillColor: '#f3ba1e',
  fillOpacity: "0.9",
  strokeWeight: 0,
  zIndex: 4
});
data_layer_4.setStyle({
  fillColor: '#fe921c',
  fillOpacity: "0.9",
  strokeWeight: 0,
  zIndex: 3
});
data_layer_5.setStyle({
  fillColor: '#f65275',
  fillOpacity: "0.9",
  strokeWeight: 0,
  zIndex: 2
});
///S1
data_layer_6.setStyle({
  fillColor: '#b3c78c',
  fillOpacity: "1.0",
  strokeWeight: 0,
  zIndex:10
});
data_layer_7.setStyle({
fillColor: '#a0baa5',
fillOpacity: "1.0",
strokeWeight: 0,
zIndex: 9
});
data_layer_8.setStyle({
fillColor: '#e0ce72',
fillOpacity: "1.0",
strokeWeight: 0,
zIndex: 8
});
data_layer_9.setStyle({
fillColor: '#d39487',
fillOpacity: "1.0",
strokeWeight: 0,
zIndex: 7
});
data_layer_10.setStyle({
  fillColor: '#f68720',
  fillOpacity: "1.0",
  strokeWeight: 0,
  zIndex:6
});
data_layer_11.setStyle({
fillColor: '#53839f',
fillOpacity: "0.9",
strokeWeight: 0,
zIndex: 5
});
data_layer_12.setStyle({
fillColor: '#f8d880',
fillOpacity: "0.9",
strokeWeight: 0,
zIndex: 4
});
data_layer_13.setStyle({
fillColor: '#f3ba1e',
fillOpacity: "0.9",
strokeWeight: 0,
zIndex: 3
});
data_layer_14.setStyle({
  fillColor: '#fae1df',
  fillOpacity: "0.9",
  strokeWeight: 0,
  zIndex:2
});
data_layer_15.setStyle({
fillColor: '#f9b699',
fillOpacity: "0.9",
strokeWeight: 0,
zIndex: 1
});
data_layer_16.setStyle({
fillColor: '#f16321',
fillOpacity: "0.9",
strokeWeight: 0,
zIndex: 0
});
//1980s
data_layer_20.setStyle({
  fillColor: '#f16321',
  fillOpacity: "0.9",
  strokeWeight: 0,
  zIndex: 1
  });
  //2000s
  data_layer_21.setStyle({
    fillColor: '#f65275',
    fillOpacity: "0.9",
    strokeWeight: 0,
    zIndex: 0
  });
  //1950s
  data_layer_18.setStyle({
    fillColor: '#fae1df',
    fillOpacity: "0.9",
    strokeWeight: 0,
    zIndex: 3
  });
  //1930
  data_layer_17.setStyle({
    fillColor: '#f8d880',
    fillOpacity: "0.9",
    strokeWeight: 0,
    zIndex: 4
    });
    //1960s
    data_layer_19.setStyle({
      fillColor: '#f9b699',
      fillOpacity: "0.9",
      strokeWeight: 0,
      zIndex: 2
      }); 
      data_layer_22.setStyle({
        strokeColor: '#FFFF00',
        fillOpacity: "1",
        strokeWeight: 1,
        zIndex: 10
        });

        $("#layer1_checkbox").change(function() {
          if (this.checked) {
            data_layer_22.setMap(map);
          } else {
            data_layer_22.setMap(null);
          }
        });
        data_layer_23.setStyle({
          strokeColor: '#b7410e',
          fillOpacity: "1",
          strokeWeight: 1,
          zIndex: 11
          });
          data_layer_24.setStyle({
            strokeColor: '#FFFF00',
            fillOpacity: "1",
            strokeWeight: 1,
            zIndex: 11
            });
            data_layer_25.setStyle({
              strokeColor: '#b7410e',
              fillOpacity: "1",
              strokeWeight: 1,
              zIndex: 11
              });
              data_layer_26.setStyle({
                FillColor: '#e29a86',
                fillOpacity: ".7",
                strokeWeight: 1,
                zIndex: 12
                });
        

data_layer_1.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+ "Indigenous Language</a>";
  html += "<br>"+feat.getProperty('Name');
  //html += "<br>"+feat.getProperty('Country');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('description')+"'>Description</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_2.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+ "Treaty of 1944</a>";
  html += "<br>"+feat.getProperty('Name');
  html += "<br>"+feat.getProperty('Country');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_3.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_5.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_4.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_5.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_6.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_7.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_8.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_9.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_10.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_11.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_12.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_13.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_14.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_15.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});data_layer_16.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('PaperSpace');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_17.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('Layer');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_18.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('Layer');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_19.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('Layer');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_20.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('Layer');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_21.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('Layer');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_23.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('barrier');
  html += "<br>"+feat.getProperty('gen_type');
  
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_24.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('FEAT_TYPE');
  html += "<br>"+feat.getProperty('LEGAL_AUTH');
  
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_25.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('SDE_COMPAN');
  html += "<br>"+feat.getProperty('PROD_CODE');
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
data_layer_26.addListener('click', function(event) {
  var feat = event.feature;
  var html = "<b>"+feat.getProperty('DATACAVEAT');
  html += "<br>"+feat.getProperty('SITENAME_L');
  html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('LTTDT_LINK')+"'>Source</a>";
  infowindow.setContent(html);
  infowindow.setPosition(event.latLng);
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
  infowindow.open(map);
 // window.setTimeout(function(){infowindow.close();}, '2000');
});
////Info on Rivers


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

//////DATA TEST/////////////


map.data.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/S4F1983.geojson');
  
  //map.data.setStyle({strokeOpacity: "0.20", strokeWeight: 1});

  map.data.setStyle(function(feature) {
    var SD_NAME = feature.getProperty('PaperSpace');
    var color = "red";
    if (SD_NAME == "S4A1970s") {
      color = "green";
      
    }
    return {
      fillColor: color,
      strokeWeight: 1,
      fillOpacity: "0.10"
    }
  });

map.data.loadGeoJson(
 'https://storage.googleapis.com/riomap/Index/S4F1940.geojson');

map.data.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/S4F1950polygon.geojson');
  
map.data.loadGeoJson(
  'https://storage.googleapis.com/riomap/Index/S4F1950.geojson');

map.data.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/S4F1980polygon.geojson');

map.data.loadGeoJson(
      'https://storage.googleapis.com/riomap/Index/S4F1940polygon.geojson');
    
map.data.loadGeoJson(
      'https://storage.googleapis.com/riomap/Index/S31910.geojson');




//map.data.loadGeoJson(
//  'https://storage.googleapis.com/riomap/Index/S4A2020.geojson');

 // map.data.loadGeoJson(
 // 'https://storage.googleapis.com/riomap/Index/S4A1940s.geojson');


 // map.data.loadGeoJson(
  //  'https://storage.googleapis.com/riomap/Index/S4A1970s.geojson');

map.data.loadGeoJson(
    'https://storage.googleapis.com/riomap/Index/S4ADam.geojson');



  
  map.data.addListener('click', function(event) {
    var feat = event.feature;
    var html = "<b>"+feat.getProperty('PaperSpace');
    html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Linetype')+"'>Download Geojson file</a>";
    html += "<br><a class='normal_link' target='_blank' href='"+feat.getProperty('Text')+"'>Source</a>";
    infowindow.setContent(html);
    infowindow.setPosition(event.latLng);
    infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
    infowindow.open(map);
   // window.setTimeout(function(){infowindow.close();}, '2000');
});



 //map.data.addListener('mouseout', function(event) {
 /// infowindow.close(map);
//});


//google.maps.event.addDomListener(window, 'load', initialize);


}

/////Load////
window.onload = initMap;

//listen for changes to the opacity slider and update the overlay opacity
$('#slider1').change(function() {
var newOpacityStr = $(this).val();
var newOpacity = parseFloat(newOpacityStr);
Index.setOpacity(newOpacity);
S1HRDEM.setOpacity(newOpacity);
S2HRDEM.setOpacity(newOpacity);
S1LRDEMcolor.setOpacity(newOpacity);
S1LRDEMcontour.setOpacity(newOpacity);
S2LRDEMcolor.setOpacity(newOpacity);
S2LRDEMcontour.setOpacity(newOpacity);
S3LRDEMcolor.setOpacity(newOpacity);
S3LRDEMcontour.setOpacity(newOpacity);
S4ALRDEMcolor.setOpacity(newOpacity);
S4ALRDEMcontour.setOpacity(newOpacity);
S4FLRDEMcolor.setOpacity(newOpacity);
S4FLRDEMcontour.setOpacity(newOpacity);
S5LRDEMcontour.setOpacity(newOpacity);
S5LRDEMcolor.setOpacity(newOpacity);
myMapType.setOpacity(newOpacity);
myMapType2.setOpacity(newOpacity);
//data_layer_22.setOpacity(newOpacity);
});