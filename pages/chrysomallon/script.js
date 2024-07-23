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

// locations on map
var indian_ocean = L.marker([-20.424956, 72.565296], {draggable:'false'}).bindPopup('<b>Indian Ocean</b>');
var kairei = L.marker([-25.319444, 70.04], {draggable:'false'}).bindPopup('<b>Kairei</b>');
var solitaire = L.marker([-19.5450, 65.8500], {draggable:'false'}).bindPopup('<b>Solitaire</b>');
var longqi  = L.marker([-37.7838, 49.6494], {draggable:'false'}).bindPopup('<b>Longqi</b>');
var kairei_pop = L.circle([-25.319444, 70.04], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
var solitaire_pop = L.circle([-19.5450, 65.8500], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
var longqi_pop = L.circle([-37.7838, 49.6494], {color: "blue",fillColor: "#06f",fillOpacity: 0.5,radius: 500000});

//const steps = d3.selectAll(".step");
var main = document.querySelector("body");
var mapSection = main.querySelector("#discovering");
var steps = mapSection.querySelectorAll(".step");
console.log(steps);

// get variables for anatomy
const base = document.querySelector("#base");
const scales = document.querySelector("#scales");
const shell = document.querySelector("#shell");
const nervous = document.querySelector("#nervous");
const circulatory = document.querySelector("#circulatory");
const anat_layers = [scales, shell, nervous, circulatory]

function resetVisible(layers) {
  for (i in layers) {
    layers[i].classList.remove("visible");
  }
}

function handleAnatomy() {
  if (stepData == "anat_b") {
    resetVisible(anat_layers);
    scales.classList.add("visible");
  } else if (stepData == "anat_c") {
    resetVisible(anat_layers);
    shell.classList.add("visible");
  } else if (stepData == "anat_d") {
    resetVisible(anat_layers);
    nervous.classList.add("visible");
  } else if (stepData == "anat_e") {
    resetVisible(anat_layers);
    circulatory.classList.add("visible");
  } else {
    resetVisible(anat_layers);
  }
}

function handleMap() {
  if (stepData == "map_a") {
    console.log("hello")
    map.flyTo([-20.424956, 72.565296], 3);
    map.removeLayer(kairei);
    map.removeLayer(solitaire);
    map.removeLayer(longqi);
  } else if (stepData == "map_b") {
      map.flyTo([-25.319444, 70.04], 4);
      map.addLayer(kairei);
      map.removeLayer(solitaire);
      map.removeLayer(longqi);
  } else if (stepData == "map_c") {
      map.flyTo([-28.786227, 57.832342], 4);
      map.removeLayer(kairei);
      map.addLayer(solitaire);
      map.addLayer(longqi);
      map.removeLayer(kairei_pop);
      map.removeLayer(solitaire_pop);
      map.removeLayer(longqi_pop);
  } else if (stepData == "map_d") {
      map.flyTo([-27.786227, 58.832342], 3.5);
      map.addLayer(kairei);
      map.addLayer(solitaire);
      map.addLayer(longqi);
      map.addLayer(kairei_pop);
      map.addLayer(solitaire_pop);
      map.addLayer(longqi_pop);
  } else {
      map.flyTo([5.236302, 79.006576], 2.5)
      map.removeLayer(kairei);
      map.removeLayer(solitaire);
      map.removeLayer(longqi);
      map.removeLayer(kairei_pop);
      map.removeLayer(solitaire_pop);
      map.removeLayer(longqi_pop);
  }
}
// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
    offset: 0.5
  })
  .onStepEnter((response) => { // handle step enter
    
    var el = response.element;
    console.log(el)
    stepData = el.attributes['data-step'].value;
    console.log(stepData);

    steps.forEach(step => step.classList.remove("active"));
    el.classList.remove("invisible");
    el.classList.add("active");

    if (stepData.startsWith("anat_")) {
      handleAnatomy();
    } else if (stepData.startsWith("map_")) {
      handleMap();
    }
    // { element, index, direction }

    console.log("enter", response);
  })
  .onStepExit((response) => {
    // { element, index, direction }
    console.log("exit", response);
    var el = response.element;
    el.classList.remove("active");
    el.classList.add("invisible");
  });
// end scroller


