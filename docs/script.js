

/////MAP CONTROLS////

 
function CenterControl1(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#f3ba1e";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 2px rgba(0,0,0,.3)";
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
  controlText.style.fontSize = "12px";
  controlText.style.lineHeight = "18px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "vista exterior";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({ lat: 31.2354325, lng: -103.3310181 });
    map.setZoom(6);
  map.setHeading(112.55);
  map.setTilt(60);
  });
}
function CenterControl2(controlDiv, map) {
  // Set CSS for the control border.
  const controlUI = document.createElement("div");

  controlUI.style.backgroundColor = "#FFA100";
  controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 2px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "right";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "12px";
  controlText.style.lineHeight = "18px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
  controlText.innerHTML = "Juarez/ElPaso";
  controlUI.appendChild(controlText);
  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener("click", () => {
    map.setCenter({lat: 31.6313169, lng: -106.3459812});
  map.setZoom(11.30);
  map.setHeading(323.07);
  map.setTilt(60);
  });
}
function CenterControl3(controlDiv, map) {
// Set CSS for the control border.
const controlUI = document.createElement("div");

controlUI.style.backgroundColor = "#fe911c";
controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 2px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "right";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "12px";
  controlText.style.lineHeight = "18px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
controlText.innerHTML = "Amistad";
controlUI.appendChild(controlText);
// Setup the click event listeners: simply set the map to Chicago.
controlUI.addEventListener("click", () => {
  map.setCenter({lat: 29.4669617, lng: -101.0734737});  
  map.setZoom(11);
  map.setHeading(323.3);
  map.setTilt(47.5);
});
}
function CenterControl4(controlDiv, map) {
// Set CSS for the control border.
const controlUI = document.createElement("div");

controlUI.style.backgroundColor = "#fe911c";
controlUI.style.border = "2px solid #fff";
  controlUI.style.borderRadius = "1px";
  controlUI.style.boxShadow = "0 2px 2px rgba(0,0,0,.3)";
  controlUI.style.cursor = "pointer";
  controlUI.style.marginTop = "5px";
  controlUI.style.marginBottom = "5px";
  controlUI.style.marginRight = "10px";
  controlUI.style.textAlign = "right";
  controlUI.title = "Click to recenter the map";
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  const controlText = document.createElement("div");

  controlText.style.color = "rgb(255,255,255)";
  controlText.style.fontFamily = "georgia";
  controlText.style.fontSize = "12px";
  controlText.style.lineHeight = "18px";
  controlText.style.paddingLeft = "5px";
  controlText.style.paddingRight = "5px";
controlText.innerHTML = "Delta";
controlUI.appendChild(controlText);
// Setup the click event listeners: simply set the map to Chicago.
controlUI.addEventListener("click", () => {
  map.setCenter({lat: 25.88205512070168, lng: -97.34156402206229});  
  map.setZoom(11.5);
  map.setHeading(350.3);
  map.setTilt(47.5);
});
}

//////TOOLTIP/////
function setTooltip({ x, y, object }) {
  const tooltip = document.getElementById('tooltip');
  if (object) {
    tooltip.style.display = 'block';
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.interactionsEnabled = true;
    tooltip.innerHTML = object.properties.PaperSpace;
    tooltip.innerHTML += "<br><a class='normal_link' target='_blank' href=" + object.properties.Linetype + "'>Download Geojson file</a>";
  } else {
    tooltip.style.display = 'none';
  }
}


///////STORIES MARKERS/////
var markers = new Array();


var locations = [
[new google.maps.LatLng(21.936574766630688, -100.04679402371038), '<a style="color:red">STORIES</a><br>' , ''],
//Jose map 
[new google.maps.LatLng(21.936574766630688, -100.04679402371038), '<br><li style="color:black">Jose Villanueva #1</li>', '<audio controls autoplay>' +
    '<source src="https://storage.googleapis.com/riomap/Stories%20Audio/Jose_Villanueva_Part%201.m4a" type="audio/mp3">' +
    '</audio>' + '<p style="color:grey;font-family:georgia;color:rgb(0, 0, 0);font-size:150%"> Written and spoke by Jose Villanueva. </p>' + '<p style="color:grey;font-family:georgia;"> In the street view below, the beginning of the story is seen.</p>'],
  [new google.maps.LatLng(25.8790294, -97.4813291), '<li style="color:black">Jose Villanueva #2</li>', '<audio controls autoplay>' +
    '<source src="https://storage.googleapis.com/riomap/Stories%20Audio/Jose_Villanueva_Part%202.m4a" type="audio/mp3">' +
    '</audio>' + '<p> This is one of Jose Villanuevas stories. In street view, the beginning of the story is seen.</p>'],
  [new google.maps.LatLng(32.759244, -96.864269), '<li style="color:black">Jose Villanueva #3</li>', '<audio controls autoplay>' +
    '<source src="https://storage.googleapis.com/riomap/Stories%20Audio/Jose_Villanueva_Part%203.m4a" type="audio/mp3">' +
    '</audio>' + '<p> This is one of Jose Villanuevas stories. In street view, the beginning of the story is seen.</p>'],
    [new google.maps.LatLng(31.7474093, -106.4890997), '<li style="color:black">sergio adrián hernández güereca</li>', '']
];

/////MAP///
const map = new google.maps.Map(document.getElementById('container'), {
  center: { lat: 31.2354325, lng: -103.3310181 },
  zoom: 5,
  tilt: 70,
  heading: 112.55,
  gestureHandling: 'greedy',
  mapId: "1014eb8ffcc7cc09"});

/////PANORAMA///

const panorama = new google.maps.StreetViewPanorama(
  document.getElementById("street-view"),
  { position: { lat: 25.8790294, lng: -97.4813291 },
    pov: { heading: 37.04, pitch: 25 },
    zoom: 0,
    enableCloseButton: false});

map.setStreetView(panorama);

///////MAP CONTROLS//////
const centerControlDiv = document.createElement("div");

CenterControl1(centerControlDiv, map);
CenterControl2(centerControlDiv, map);
CenterControl3(centerControlDiv, map);
CenterControl4(centerControlDiv, map);

map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);

//////DECK GL LAYERS/////

//raster
const terrain =   new deck.TileLayer({
      data: 'https://api.maptiler.com/tiles/hillshades/{z}/{x}/{y}.png?key=mh9DlzDurxhdAH4U2Nhb',
      minZoom: 0,
      maxZoom: 15,
      tileSize: 256,
      renderSubLayers: props => {
        const {
          bbox: { west, south, east, north }
        } = props.tile;
        return new deck.BitmapLayer(props, {
          data: null,
          image: props.data,
          bounds: [west, south, east, north]
        });
  }
});
//native-lands
const language =   new deck.GeoJsonLayer({
      id: 'INDIGENOUS',
      data: 'https://storage.googleapis.com/riomap/Index/indigenouslanguages.geojson',
      stroked: true,
      filled: false,
      lineWidthMinPixels: 2,
      getLineColor: [51, 102, 255],
      getFillColor: [204, 204, 204],
      pickable: true,
      autoHighlight: true,
      highlightColor: [255, 255, 255],
      opacity: .01,
      //onHover: setTooltip,
      onClick: ({ object, x, y }) => {
        window.open(`${object.properties.description}`)
      },
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Name } } = object;
          info.innerHTML = `<h1> ${Name}</h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;
        }
      },


    });
//treaty of 1944 
const treaty =    new deck.GeoJsonLayer({
      id: 'airports',
      data: 'https://storage.googleapis.com/riomap/Index/treaty1944rivers.geojson',
      getLineWidth: 50,
      getLineColor: [200, 0, 90, 190],
      stroked: true,
      //pointBillboard: true,
      opacity: 1,
      getText: f => f.properties.name,
      getTextSize: 14,
      extruded: false,
      //pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Name } } = object;
          info.innerHTML = `<h1> ${Name}</h1>` + 'Treaty of 1944</a>';
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open(`https://www.ibwc.gov/Treaties_Minutes/treaties.html`)
      },
    });
//story test
const Jose2 =   new deck.GeoJsonLayer({
      id: 'josenum2',
      data: 'https://storage.googleapis.com/riomap/Stories%20geojson/jose%20story%202%20edited.geojson',
      extruded: true,
      getElevation: 3000,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: 1,
      pointRadiusScale: 50,
      getText: f => f.properties.name,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [250, 200, 80, 180],
      pointType: 'circle+text',
      pickable: false,
      autoHighlight: true,
      onClick: setTooltip
      //onClick: ({object, x, y}) => {
      // audioElement.play(),
      //map.setZoom(16);
      //map.panTo({lat: 25.882778, lng: -97.476675});
      // map.setTilt(90);
      // map.setHeading(267.3);
      //    },

    });
//AMISTAD
const Amistad1970 = new deck.GeoJsonLayer({
      id: 'A2',
      data: 'https://storage.googleapis.com/riomap/Index/S4A1970s.geojson',
      extruded: true,
      getElevation: 2000,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .2,
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [254, 146, 28],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> Amistad 1970 </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Amistad Dam_105672_1972_24000_geo')
      }
    });
const Amistad1940 = new deck.GeoJsonLayer({
      id: 'A1',
      data: 'https://storage.googleapis.com/riomap/Index/S4A1940s.geojson',
      extruded: true,
      getElevation: 3000,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .2,
      material: true,
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [243, 186, 30],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> Amistad 1940 </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Feely_108056_1941_62500_geo')
      }
    });
const Amistad2020 =   new deck.GeoJsonLayer({
      id: 'A3',
      data: 'https://storage.googleapis.com/riomap/Index/S4A2020.geojson',
      extruded: true,
      getElevation: 1000,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .2,
      material: true,
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [246, 82, 117],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> Amistad 2020 </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Shafter Canyon_124039_1983_24000_geo')
      }
    });
///S1
const elpaso1852 =   new deck.GeoJsonLayer({
      id: 'S11852',
      data: 'https://storage.googleapis.com/riomap/Index/IBC/1852.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      material: true,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [179, 199, 140],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#Relative')
      }
    });
const elpaso1889 = new deck.GeoJsonLayer({
      id: 'S11889',
      data: 'https://storage.googleapis.com/riomap/Index/IBC/1889.geojson',
      extruded: true,
      getElevation: 10,
      material: true,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [160, 186, 165],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#Relative')
      }
    });
const elpaso1890 = new deck.GeoJsonLayer({
      id: 'S11890',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1890s.geojson',
      extruded: true,
      getElevation: 10,
      material: true,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [246, 135, 32],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Fort Hancock_123977_1894_125000_geo')
      }
    });
const elpaso1899 = new deck.GeoJsonLayer({
      id: 'S11899',
      data: 'https://storage.googleapis.com/riomap/Index/IBC/1899.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [224, 206, 114],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#Relative')
      }
    });
const elpaso1907 = new deck.GeoJsonLayer({
      id: 'S11907',
      data: 'https://storage.googleapis.com/riomap/Index/IBC/1907.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [211, 148, 135],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#Relative')
      }
    });
const elpaso1908 = new deck.GeoJsonLayer({
      id: 'S11908',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1908.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [246, 142, 122],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_El Paso_123948_1908_125000_geo')
      }
    });
    const elpaso1910 = new deck.GeoJsonLayer({
      id: 'S11910',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1910s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [83, 131, 159],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Eagle Mountain_123927_1916_125000_geo')
      }
    });
const elpaso1930 = new deck.GeoJsonLayer({
      id: 'S11930',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1930s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [248, 216, 128],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Ysleta_117325_1939_62500_geo')
      }
    });
const elpaso1940 = new deck.GeoJsonLayer({
      id: 'S11940',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1940s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [243, 186, 30],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Clint_108727_1941_62500_geo')
      }
    });
const elpaso1950 = new deck.GeoJsonLayer({
      id: 'S11950',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1950s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      material: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [250, 225, 223],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_El Paso_107860_1953_250000_geo')
      }
    });
const elpaso1970 = new deck.GeoJsonLayer({
      id: 'S11970',
      data: 'https://storage.googleapis.com/riomap/Index/S1/1970s.geojson',
      extruded: true,
      getElevation: 10,
      material: true,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [249, 182, 153],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Acala_106119_1972_24000_geo')
      }
    });
const elpaso1980 = new deck.GeoJsonLayer({
      id: 'S11980',
      data:'https://storage.googleapis.com/riomap/Index/S1/1980s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      material: true,
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [241, 99, 33],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { PaperSpace } } = object;
          info.innerHTML = `<h1> ${PaperSpace} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_El Paso_107864_1983_1000000_geo.tif')
      }
    });
//FALCON

    ///S5
    const delta1910 = new deck.GeoJsonLayer({
      id: 'S51910',
      data:'https://storage.googleapis.com/riomap/Index/S5river/1910s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [0, 153, 255],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { layer } } = object;
          info.innerHTML = `<h1> ${layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_SanJuan_128360_1914_48000_geo_tif')
      }
    });
const delta1930 = new deck.GeoJsonLayer({
      id: 'S51930',
      data:'https://storage.googleapis.com/riomap/Index/S5river/1930s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [248, 216, 128],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> ${Layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_La Paloma_128247_1929_24000_geo')
      }
    });
const delta1950 = new deck.GeoJsonLayer({
      id: 'S51950',
      data:'https://storage.googleapis.com/riomap/Index/S5river/1950s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [250, 225, 223],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> ${Layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_McAllen_707467_1954_250000_geo')
      }
    });
const delta1960 = new deck.GeoJsonLayer({
      id: 'S51960',
      data:'https://storage.googleapis.com/riomap/Index/S5river/1960s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [249, 182, 153],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> ${Layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Las Milpas_110314_1962_24000_geo')
      }
    });
const delta1980 = new deck.GeoJsonLayer({
      id: 'S51980',
      data:'https://storage.googleapis.com/riomap/Index/S5river/1980s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [241, 99, 33],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> ${Layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_East Brownsville_122284_1983_24000_geo')
      }
    });
const delta2000 = new deck.GeoJsonLayer({
      id: 'S52000',
      data:'https://storage.googleapis.com/riomap/Index/S5river/2000s.geojson',
      extruded: true,
      getElevation: 10,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .5,  
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [246, 82, 117],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> ${Layer} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#TX_Hidalgo_117835_2002_24000_geo')
      }
    });
///APIs
const border = new deck.GeoJsonLayer({
      id: 'line',
      data:'https://opendata.arcgis.com/datasets/e735940321bd4383bab528a91bf526f8_0.geojson',
      getLineWidth: 20,
      stroked: true,
      opacity: 10,
      extruded: true,
      //pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
   getElevation: 2000,
      getLineColor: [255, 255, 0],
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { Layer } } = object;
          info.innerHTML = `<h1> Mexico and US border 2022 </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('https://hub.arcgis.com/datasets/e735940321bd4383bab528a91bf526f8_0/explore')
      }
    });
const fencemap = new deck.GeoJsonLayer({
      id: 'fence',
      data: 'https://storage.googleapis.com/riomap/Index/usmexicoborderfence.geojson',
      extruded: true,
      getElevation: 250,
      filled: true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: .1,
      pointRadiusScale: 50,
      getText: f => f.properties.PaperSpace,
      getTextSize: 10,
      getRadius: 5,
      getFillColor: [183, 65, 14],
      pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { barrier, gen_type } } = object;
          info.innerHTML = `<h1> border ${barrier} ${gen_type} </h1>`;
         
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('Data_directory.html#')
      }
    });
const marineboundary = new deck.GeoJsonLayer({
      id: 'marineline',
      data: 'https://opendata.arcgis.com/datasets/c4abf391840049ce853a0a209ccbde55_0.geojson',
      getLineWidth: 200,
      stroked: true,
      opacity: 10,
      extruded: true,
      //pointType: 'circle+text',
      pickable: true,
      autoHighlight: true,
   getElevation: 2000,
      getLineColor: [255, 255, 15],
      pickable: true,
      autoHighlight: true,
      onHover: ({ object, x, y }) => {
        const info = document.getElementById('tooltip');
        if (object) {
          const { properties: { FEAT_TYPE, LEGAL_AUTH } } = object;
          info.innerHTML = `<h1> ${FEAT_TYPE} <br> ${LEGAL_AUTH} </h1>`;
          info.style.display = 'block';
          info.style.opacity = 0.5;
          info.style.left = x + 'px';
          info.style.top = y + 'px';
        } else {
          info.style.opacity = 0.0;}
      },
      onClick: ({ object, x, y }) => {
        window.open('https://hub.arcgis.com/datasets/c4abf391840049ce853a0a209ccbde55_0/explore')
      }
    });




const overlay = new deck.GoogleMapsOverlay({
layers: [language, border, treaty, terrain, Amistad2020, Amistad1940, Amistad1970, elpaso1852, elpaso1889, elpaso1890, elpaso1899, elpaso1907, elpaso1908, elpaso1910, elpaso1930, elpaso1940, elpaso1950, elpaso1970, elpaso1980, delta1910, delta1930, delta1950, delta1960, delta1980, delta2000,fencemap, marineboundary]});
//layers: [ delta1910, delta1930, delta1950, delta1960, delta1980, delta2000]});

/////PANORAMA ICONS////
var icon2 = {url: "https://storage.googleapis.com/riomap/Index/S5river/Screen%20Shot%202021-12-14%20at%204.25.17%20PM.png",
//scaledSize: new google.maps.Size(100, 100), // scaled size
};
var icon3 = {url: "https://storage.googleapis.com/riomap/Index/S5river/josetextbeginning.gif"};

////SPEAKER ICON///
var icon = {url: 'https://storage.googleapis.com/riomap/Index/S5river/Speaker_Icon.svg.png', scaledSize: new google.maps.Size(20, 20)};


/////INFOWINDOW MAIN////
var infowindow = new google.maps.InfoWindow({ maxWidth: 350, disableAutoPan: true });

//////ARRAY MARKER LINK MAGIC////
for (var i = 0; i < locations.length; i++) {

// Append a link to the markers DIV for each marker
$('#markers').append('<a class="marker-link" data-markerid="' + i + '" href="#">' + locations[i][1] + '</a> ');

var marker = new google.maps.Marker({
position: locations[i][0],
map: map,
title: locations[i][1],
icon: icon});



//////PANORAMA MARKERS//////
var marker2 = new google.maps.Marker({
position: { lat: 25.8796, lng: -97.48065 },
map: panorama,
icon: icon3});
var marker3 = new google.maps.Marker({
position: { lat: 31.747747226269677, lng: -106.48863317128271}, 
map: panorama,
icon: icon2});

//////MARKER MAGIC CONTINUED////

google.maps.event.addListener(marker, 'click', (function (marker, i) {

return function () {
      infowindow.setContent(locations[i][2]);
      infowindow.open(map, marker);
      panorama.setPosition(marker.position);
      map.panTo(marker.position);
      map.setTilt(90);
      map.setHeading(97.3);
      map.setZoom(15);
}

})(marker, i));

// Add marker to markers array
markers.push(marker);
}

// Trigger a click event on each marker when the corresponding marker link is clicked
$('.marker-link').on('click', function () {

  google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
});




//////FINAL///////

overlay.setMap(map);
//overlay.finalize();