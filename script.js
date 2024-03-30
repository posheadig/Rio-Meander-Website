let map, panorama, overlay;

map = new google.maps.Map(document.getElementById('container'), {
  center: { lat: 31.7564809, lng: -106.4290277 },
  zoom: 15,
  tilt: 70,
  heading: 105.75,
  gestureHandling: 'greedy',
  mapId: "1014eb8ffcc7cc09",
  mapTypeControlOptions: {
      mapTypeIds: ['satellite']
  }
});

map.setMapTypeId('satellite');

panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"), {
        position: { lat: 31.7567014, lng: -106.4290472 },
        pov: { heading: 186.17, pitch: 25 },
        zoom: 0,
        enableCloseButton: false
});

map.setStreetView(panorama);


google.maps.event.addListenerOnce(map, 'idle', function(){
  // This code will run after the map has finished loading
  console.log("Map is ready!");

    const controls = [
        { backgroundColor: "#f3ba1e", textContent: "Start", center: { lat: 31.7564809, lng: -106.4290277 }, zoom: 15, heading: 105.75, tilt: 70 },
        { backgroundColor: "#FFA100", textContent: "Juarez/ElPaso", center: {lat: 31.7501169, lng: -106.48412}, zoom: 12, heading: 55.57, tilt: 65 },
        { backgroundColor: "#fe911c", textContent: "Amistad", center: {lat: 29.4669617, lng: -101.0734737}, zoom: 11, heading: 323.3, tilt: 47.5 },
        { backgroundColor: "#fe911c", textContent: "Delta", center: {lat: 25.8820551, lng: -97.3415640}, zoom: 11.5, heading: 350.3, tilt: 47.5 }
    ];
  
    const centerControlDiv = document.createElement("div");
    controls.forEach(({backgroundColor, textContent, center, zoom, heading, tilt}) => {
      const controlUI = document.createElement("div");
      controlUI.classList.add("control-ui");
    //  controlUI.style.backgroundColor = backgroundColor; // Keep dynamic background color
      controlUI.title = "Click to recenter the map";
      
      const controlText = document.createElement("div");
      controlText.classList.add("control-text");
      controlText.innerHTML = textContent;
      controlUI.appendChild(controlText);
      

        controlUI.addEventListener("click", () => {
            map.setCenter(center);
            map.setZoom(zoom);
            map.setHeading(heading);
            map.setTilt(tilt);
        });

        centerControlDiv.appendChild(controlUI);
    });
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);



    window.setTooltip = ({ x, y, object }) => {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = object ? 'block' : 'none';
        info.style.left = `${x}px`;
        info.style.top = `${y}px - 60px`;
        if (object) {
            tooltip.innerHTML = `${object.properties.PaperSpace}<br><a class='normal_link' target='_blank' href='${object.properties.Linetype}'>Download Geojson file</a>`;
        }
    };



    const infowindow = new google.maps.InfoWindow({ maxWidth: "350vw", disableAutoPan: true });
    const markersArray = [];

    // Icons
    const icons = {
        speaker: { url: './map_markers/Speaker_Icon.svg.png', scaledSize: new google.maps.Size(20, 20) },
        panorama1: "./pan_markers/josetextbeginning.gif",
        panorama2: "./pan_markers/Screen%20Shot%202021-12-14%20at%204.25.17%20PM.png"
    };

    // Locations data
    const locations = [
        {
          position: { lat: 31.6706534, lng: -106.3409514 },
          title: '[realtime data] Live Cam Feed',
          content: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GC5RY3zipa4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          icon: icons.speaker,
          pov: { heading: 55.06, pitch: -10, zoom: 1 } // Example POV

        },
        {
            position: { lat: 21.936574766630688, lng: -100.04679402371038 },
            title: '[poetry] Jose Villanueva',
            content: '<iframe title="YouTube video player" class="youtube-player" allow="autoplay"type="text/html" width="280" height="100" src="./audio/Jose_Villanueva_Part 2.m4a" frameborder="0"></iframe><p style="color:grey;font-family:georgia;color:rgb(0, 0, 0);font-size:150%"> Written and spoke by Jose Villanueva. </p><p style="color:grey;font-family:georgia;"> In the street view below, the beginning of the story is seen.</p>',
            icon: icons.speaker
        },
        {
            position: { lat: 25.8790294, lng: -97.4813291 },
            title: '[poetry] Jose Villanueva',
            content: '<iframe title="YouTube video player" class="youtube-player" allow="autoplay"type="text/html" width="280" height="100" src="./audio/Jose_Villanueva_Part%202.m4a" frameborder="0"></iframe>' + '<p> This is one of Jose Villanuevas stories. In street view, the beginning of the story is seen.</p>',
            icon: icons.speaker,
            pov: {heading: 48.86, pitch: 10, zoom: 1 }
        },
        {
            position: { lat: 32.759244, lng: -96.864269 },
            title: '[poetry] Jose Villanueva',
            content: '<iframe title="YouTube video player" class="youtube-player" allow="autoplay"type="text/html" width="280" height="100" src="./audio/Jose_Villanueva_Part%203.m4a" frameborder="0"></iframe>' + '<p> This is one of Jose Villanuevas stories. In street view, the beginning of the story is seen.</p>',
            icon: icons.speaker
        },
        {
            position: { lat: 31.7474093, lng: -106.4890997 },
            title: '[archive] sergio adrián hernández güereca',
            content: '',
            icon: icons.speaker
        },
        
    ];
    // Function to add markers to the map
    locations.forEach((location, index) => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            icon: location.icon
        });

        marker.addListener('click', function() {
            infowindow.setContent(location.content);
            infowindow.open(map, marker);
            panorama.setPosition(location.position);
            if(location.pov) { panorama.setPov(location.pov);}
            map.panTo(location.position);
            map.setZoom(15);
        });

        markersArray.push(marker);
    });
    function generateRandomSVGIcon(text) {
      // Generates a random color in hexadecimal format
     // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  const randomColor = "black"
      // Define SVG attributes
      const width = 2000;
      const height = 400;
  
      // Construct the SVG icon with the text
      const svgIcon = `
          <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="${randomColor}" />
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="108">
                  ${text}
              </text>
          </svg>
      `;
  
      // Encode the SVG to be used as a data URL
      return `data:image/svg+xml;base64,${btoa(svgIcon)}`;
  }
    // Panorama Markers - assuming these are separate and need to be placed on the panorama view
    const panoramaMarkers = [
        { position: { lat: 25.8796, lng: -97.48065 }, icon: icons.panorama1 },
        { position: { lat: 31.747747226269677, lng: -106.48863317128271 }, icon: icons.panorama2 },
        { position: { lat: 31.7557014, lng: -106.4290472 }, icon: generateRandomSVGIcon("                                                           ")},
        { position: {lat: 31.671069936214998, lng: -106.34033234925143}, icon: generateRandomSVGIcon("                                   ")},
    ];

    panoramaMarkers.forEach(markerData => {
        new google.maps.Marker({
            position: markerData.position,
            map: panorama,
            icon: markerData.icon
        });
    });

    // Link interaction
    $('#markers').on('click', '.marker-link', function (e) {
        e.preventDefault();
        const markerId = $(this).data('markerid');
        google.maps.event.trigger(markersArray[markerId], 'click');
    });

    locations.forEach((location, index) => {
      // Append a list item for each location
      $('#markers').append(`<li class="marker-link" data-markerid="${index}">${location.title}</li>`);
    });



function createBaseGeoJsonLayer(options) {
    const baseConfig = {
      extruded: true,
      filled: options.filled || true,
      pointRadiusMinPixels: 5,
      pointBillboard: true,
      opacity: 0.8,
      pointRadiusScale: 50,
      wireframe: true,
      pickable: true,
      autoHighlight: true,
      onHover: commonOnHover,
      onClick: commonOnClick,
      getElevation: options.getElevation || 10,
    };
    return new deck.GeoJsonLayer({ ...baseConfig, ...options });
  }
  
  function commonOnHover({ object, x, y }) {
    const info = document.getElementById('tooltip');
    if (object) {
      const displayText = object.properties.PaperSpace || object.properties.Layer ||object.properties.layer|| object.properties.Name || `${object.properties.barrier} ${object.properties.gen_type}` || 'Mexico and US border 2022';
      info.innerHTML = `<h1>${displayText}</h1>`;
      info.style.display = 'block';
      info.style.opacity = 0.9;
      info.style.left = `${x}px`;
      info.style.top = `${y}px - 60px`;
    } else {
      info.style.opacity = 0.0;
    }
  }
  
  function commonOnClick({ object }) {
    if (object) {
      const url = object.properties.link || 'data_directory.html#Relative';
      window.open(url);
    }
  }
  

    const layerConfigs = [
        // Use brighter and more saturated colors
        { id: 'S11852', data: './IBC/1852.geojson', getFillColor: [209, 229, 90] }, // Brighter green
        { id: 'S11889', data: './IBC/1889.geojson', getFillColor: [90, 216, 145] }, // Vibrant teal
        { id: 'S11890', data: './S1/1890s.geojson', getFillColor: [246, 135, 32], link: 'data_directory.html#TX_Fort Hancock_123977_1894_125000_geo' }, // Already vibrant orange
        { id: 'S11899', data: './IBC/1899.geojson', getFillColor: [234, 226, 54] }, // Bright yellow
        { id: 'S11907', data: './IBC/1907.geojson', getFillColor: [231, 78, 105] }, // Vibrant pink
        { id: 'S11908', data: './S1/1908.geojson', getFillColor: [246, 42, 22], link: 'data_directory.html#TX_El Paso_123948_1908_125000_geo' }, // Bright red
        { id: 'S11910', data: './S1/1910s.geojson', getFillColor: [33, 181, 229], link: 'data_directory.html#TX_Eagle Mountain_123927_1916_125000_geo' }, // Bright blue
        { id: 'S11930', data: './S1/1930s.geojson', getFillColor: [248, 236, 68], link: 'data_directory.html#TX_Ysleta_117325_1939_62500_geo' }, // Brighter yellow
        { id: 'S11940', data: './S1/1940s.geojson', getFillColor: [253, 186, 30], link: 'data_directory.html#TX_Clint_108727_1941_62500_geo' }, // Vibrant yellow
        { id: 'S11950', data: './S1/1950s.geojson', getFillColor: [250, 225, 223], link: 'data_directory.html#TX_El Paso_107860_1953_250000_geo' }, // Soft pink (consider contrast)
        { id: 'S11970', data: './S1/1970s.geojson', getFillColor: [249, 102, 83], link: 'data_directory.html#TX_Acala_106119_1972_24000_geo' }, // Brighter coral
        { id: 'S11980', data: './S1/1980s.geojson', getFillColor: [241, 99, 33], link: 'data_directory.html#TX_El Paso_107864_1983_1000000_geo.tif' }, // Vibrant orange
        { id: 'S51910', data: './S5/1910s.geojson', getFillColor: [0, 153, 255], link: 'data_directory.html#TX_SanJuan_128360_1914_48000_geo_tif' }, // Bright blue
        { id: 'S51930', data: './S5/1930s.geojson', getFillColor: [248, 216, 128], link: 'data_directory.html#TX_La Paloma_128247_1929_24000_geo' }, // Soft yellow (consider contrast)
        { id: 'S51950', data: './S5/1950s.geojson', getFillColor: [255, 125, 223], link: 'data_directory.html#TX_McAllen_707467_1954_250000_geo' }, // Bright pink
        { id: 'S51960', data: './S5/1960s.geojson', getFillColor: [249, 182, 153], link: 'data_directory.html#TX_Las Milpas_110314_1962_24000_geo' }, // Coral
        { id: 'S52000', data: './S5/2000s.geojson', getFillColor: [246, 32, 117], link: 'data_directory.html#TX_Hidalgo_117835_2002_24000_geo' }, // Vibrant pink
        { id: 'A2', data: './S4/S4A1970s.geojson', getFillColor: [254, 146, 28], getElevation: 2000, link: 'data_directory.html#TX_Amistad Dam_105672_1972_24000_geo' }, // Vibrant orange
        { id: 'A1', data: './S4/S4A1940s.geojson', getFillColor: [243, 186, 30], getElevation: 3000, link: 'data_directory.html#TX_Feely_108056_1941_62500_geo' }, // Vibrant yellow
        { id: 'A3', data: './S4/S4A2020.geojson', getFillColor: [246, 82, 117], getElevation: 1000, link: 'data_directory.html#TX_Shafter Canyon_124039_1983_24000_geo' }, // Vibrant pink
        { id: 'line', data: 'https://opendata.arcgis.com/datasets/e735940321bd4383bab528a91bf526f8_0.geojson', getFillColor: [255, 255, 0], getElevation: 2000, link: 'https://hub.arcgis.com/datasets/e735940321bd4383bab528a91bf526f8_0/explore' }, // Bright yellow
        { id: 'fence', data: './index/usmexicoborderfence.geojson', getFillColor: [233, 65, 14], getElevation: 250}, // Brighter orange
        { id: 'treaty', data: './index/treaty1944rivers.geojson', getLineWidth: 50, getLineColor: [220, 20, 60, 190], stroked: true, filled: false, link: 'https://www.ibwc.gov/Treaties_Minutes/treaties.html'}, // Bright pink line
    ];

    const language =   new deck.GeoJsonLayer({
        id: 'languages',
        data: './index/indigenouslanguages.geojson',
        stroked: true,
        filled: false,
        lineWidthMinPixels: 2,
        getLineColor: [255, 255, 255],
        getFillColor: [204, 204, 204],
        pickable: true,
        autoHighlight: true,
        highlightColor: [255, 255, 255],
        opacity: .51,
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
      
      const baseLayers = layerConfigs.map(config =>
        createBaseGeoJsonLayer({
          ...config,
          getText: f => f.properties.PaperSpace,
          getTextSize: 10,
          getPointRadius: 5,
        })
      );  
      
      const layers = [
        ...baseLayers, 
        language,      
        marineboundary 
    ];
    overlay = new deck.GoogleMapsOverlay({ layers });
    overlay.setMap(map);

    document.getElementById("languageSwitch").addEventListener("click", function() {
      var currentLang = document.documentElement.lang;
    
      // Determine the new language and appropriate file based on the current language
      var newLang = (currentLang === "es") ? "en" : "es";
      var newFile = newLang === "en" ? "index.html" : "espanol.html";
      
      // Redirect to the new file
      window.location.href = newFile;
    });
    

  });