/* https://www.youtube.com/watch?v=424eiD9mVYY */
/* https://www.youtube.com/watch?v=d7wTA9F-l8c */

// Set up map - Leaflet.js
const map = new L.Map('map', {
	layers: [
		new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			'attribution': '© Esri © OpenStreetMap Contributors'
		})
	],
	center: [5.236302, 79.006576],
	zoom: 2.5
});

// define locations on map for handleMap()
const kairei = L.marker([-25.319444, 70.04], {draggable:'false'}).bindPopup('<b>Kairei</b>');
const solitaire = L.marker([-19.5450, 65.8500], {draggable:'false'}).bindPopup('<b>Solitaire</b>');
const longqi  = L.marker([-37.7838, 49.6494], {draggable:'false'}).bindPopup('<b>Longqi</b>');
const kairei_pop = L.circle([-25.319444, 70.04], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
const solitaire_pop = L.circle([-19.5450, 65.8500], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
const longqi_pop = L.circle([-37.7838, 49.6494], {color: "blue",fillColor: "#06f",fillOpacity: 0.5,radius: 500000});
const layers = [kairei, solitaire, longqi, kairei_pop, solitaire_pop, longqi_pop]

const carlsberg = L.tooltip([5.799063, 61.811835], {content: "Carlsberg", permanent:true, direction: 'top'});
const cir = L.tooltip([-13.669079, 67.399708], {content: "Central Indian", permanent:true, direction: 'top'});
const swir = L.tooltip([-35.05078945, 54.94630462], {content: "Southwest Indian", permanent:true, direction:'top'});
const seir = L.tooltip([-35.343472, 79.011726], {content: "Southeast Indian", permanent:true, direction: 'top'});


// get img elements from DOM for handleAnatomy()
const base = document.querySelector("#base");
const scales = document.querySelector("#scales");
const shell = document.querySelector("#shell");
const nervous = document.querySelector("#nervous");
const circulatory = document.querySelector("#circulatory");
const anat_stack = [scales, shell, nervous, circulatory]

// get .step divs from DOM for markActiveStep()
let steps = document.querySelectorAll(".step");

function resetVisible(stack) {
  // Make all images in stack invisible
  stack.forEach(cel => cel.classList.remove("visible"));
}

function removeLayers(layers) {
  // Make all map layers invisible
  layers.forEach(layer => map.removeLayer(layer));
}

function markActiveStep(el) {
  steps.forEach(step => step.classList.remove("active"));
  el.classList.add("active");
}

function handleAnatomy(stepData) {
  if (stepData == "anat_b") {
    resetVisible(anat_stack);
    scales.classList.add("visible");
  } else if (stepData == "anat_c") {
    resetVisible(anat_stack);
    shell.classList.add("visible");
  } else if (stepData == "anat_d") {
    resetVisible(anat_stack);
    nervous.classList.add("visible");
  } else if (stepData == "anat_e") {
    resetVisible(anat_stack);
    circulatory.classList.add("visible");
  } else {
    resetVisible(anat_stack);
  }
}

function handleMap(stepData) {
  if (stepData == "map_a") {
    map.flyTo([-21, 60], 3);
    removeLayers(layers);
    map.addLayer(carlsberg);
    map.addLayer(cir);
    map.addLayer(swir);
    map.addLayer(seir);
  } else if (stepData == "map_b") {
    map.flyTo([-25.319444, 70.04], 4);
    removeLayers(layers);
    map.addLayer(kairei);
  } else if (stepData == "map_c") {
    map.flyTo([-28.786227, 57.832342], 4);
    removeLayers(layers);
    map.addLayer(solitaire);
    map.addLayer(longqi);
  } else if (stepData == "map_d") {
    map.flyTo([-27.786227, 58.832342], 3.5);
    layers.forEach(layer => map.addLayer(layer))
  } else {
    map.flyTo([5.236302, 79.006576], 2.5)
    removeLayers(layers);
  }
}


// Instantiate Scrollama
const scroller = scrollama();

// Setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
    offset: 0.5
  })
  .onStepEnter((response) => { // Handle step enter
    console.log("enter", response);

    let el = response.element;
    let stepData = el.attributes['data-step'].value;

    markActiveStep(el);
    
    if (stepData.startsWith("anat_")) {
      handleAnatomy(stepData);
    } else if (stepData.startsWith("map_")) {
      handleMap(stepData);
    }
  })
  .onStepExit((response) => {
    console.log("exit", response);
    let el = response.element;
    el.classList.remove("active");
  });
// end scroller


