/* https://www.youtube.com/watch?v=424eiD9mVYY */
/* https://www.youtube.com/watch?v=d7wTA9F-l8c */

// Set up map - Leaflet.js
const map = new L.Map('map', {
	layers: [
		new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			'attribution': '© Esri © OpenStreetMap Contributors',
		})
	],
	center: [5.236302, 79.006576],
	zoom: 2.5,
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  dragging: false
});

// define locations on map for handleMap()
const carlsberg_coords = [[2.373797, 66.737612],
              [4.380684, 62.429438],
              [9.970776, 56.972417]]
const cir_coords =[[-25.118328, 70.210527],
              [-18.180195, 65.244708],
              [-16.544627, 67.310286],
              [-9.947222, 66.454319],
              [-8.061379, 68.297939],
              [-2.161675, 68.100408],
              [2.577678, 66.783537]]
const swir_coords = [
              [-53.474694, 26.868533],
              [-44.925778, 35.292749],
              [-43.646402, 41.557721],
              [-41.022548, 42.773135],
              [-40.221424, 45.939607],
              [-38.843359, 46.155025],
              [-38.628128, 47.673547],
              [-37.818706, 49.135189],
              [-37.098933, 52.202136], 
              [-36.187667, 52.285214], 
              [-33.633664, 56.310720], 
              [-33.573793, 57.077483], 
              [-31.901013, 57.029561], 
              [-30.072937, 60.719608],
              [-29.035821, 61.235669],
              [-27.877205, 63.943301],
              [-27.834835, 64.757987],
              [-27.239930, 66.818663],
              [-26.470362, 67.561464],
              [-25.609213, 69.957599]
              ]

const seir_coords = [[-25.479406, 70.021145],
              [-28.872491, 74.698421],
              [-33.726130, 77.389815],
              [-35.001474, 78.733993],
              [-35.445656, 78.238232],
              [-36.401986, 79.187020],
              [-37.092138, 78.110372],
              [-39.039951, 76.964057],
              [-42.122123, 79.308772],
              [-40.792464, 81.182807],
              [-42.846964, 83.456419],
              [-40.965133, 85.653002],
              [-45.379910, 96.583034],
              [-46.388228, 95.661224],
              [-47.998775, 99.480151]]

const daxi = L.circle([7.452681, 59.710312], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000}); //daxi
const wocan = L.circle([6.5711, 60.6650], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// wocan
const tianxiu = L.circle([3.665019, 64.252313], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});//  tianxiu
const onnuri = L.circle([-11.41528,66.42361], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// onnuri
const dodo = L.circle([-18.3470, 65.3050], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// dodo
const solitaire_dot = L.circle([-19.5450, 65.8500], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000}).bindPopup('<b>Solitaire</b>');// solitaire
const edmond = L.circle([-23.8780, 69.5960], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// edmond
const kairei_dot = L.circle([-25.319444, 70.04], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000}).bindPopup('<b>Kairei</b>');// kairei
const pelagia = L.circle([-26.340781, 71.655239], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// pelagia
const tiancheng = L.circle([-27.9670, 63.5500], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});//tiancheng
const longqi_dot = L.circle([-37.7838, 49.6494], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000}).bindPopup('<b>Longqi</b>');// longqi
const duanqiao = L.circle([-37.6579, 50.4671], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// duanqiao
const site_21 = L.circle([-41.112621, 78.780207], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 50000});// site 21


var carlsberg_polyline = L.polyline(carlsberg_coords, {color: 'red'})
var cir_polyline = L.polyline(cir_coords, {color: 'red'});              
var swir_polyline = L.polyline(swir_coords, {color: 'red'});
var seir_polyline = L.polyline(seir_coords, {color: 'red'});
const mor_tooltip = L.tooltip([-29.035821, 61.235669], {content: "Mid-Ocean Ridge", permanent:true, direction:'top'});

const kairei = L.marker([-25.319444, 70.04], {draggable:'false'}).bindPopup('<b>Kairei</b>');
const solitaire = L.marker([-19.5450, 65.8500], {draggable:'false'}).bindPopup('<b>Solitaire</b>');
const longqi  = L.marker([-37.7838, 49.6494], {draggable:'false'}).bindPopup('<b>Longqi</b>');
const kairei_pop = L.circle([-25.319444, 70.04], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
const solitaire_pop = L.circle([-19.5450, 65.8500], {color: "red",fillColor: "#f03",fillOpacity: 0.5,radius: 500000});
const longqi_pop = L.circle([-37.7838, 49.6494], {color: "blue",fillColor: "#06f",fillOpacity: 0.5,radius: 500000});

const kairei_tooltip = L.tooltip([-25.319444, 70.04], {content: "Kairei", permanent:true, direction: 'top'});
const solitaire_tooltip = L.tooltip([-19.5450, 65.8500], {content: "Solitaire", permanent:true, direction: 'top'});
const longqi_tooltip = L.tooltip([-37.7838, 49.6494], {content: "Longqi", permanent:true, direction: 'top'});

const carlsberg = L.tooltip([5.799063, 61.811835], {content: "Carlsberg", permanent:true, direction: 'right'});
const cir = L.tooltip([-13.669079, 67.399708], {content: "Central Indian", permanent:true, direction: 'right'});
const swir = L.tooltip([-35.05078945, 54.94630462], {content: "Southwest Indian", permanent:true, direction:'left'});
const seir = L.tooltip([-35.343472, 79.011726], {content: "Southeast Indian", permanent:true, direction: 'right'});

const layers = [cir_polyline, swir_polyline, seir_polyline, carlsberg_polyline, kairei, solitaire, longqi, kairei_pop, solitaire_pop, longqi_pop, carlsberg, cir, swir, seir, daxi, wocan, tianxiu, onnuri, dodo, solitaire_dot, edmond, kairei_dot, pelagia, tiancheng, longqi_dot, duanqiao, site_21, kairei_tooltip, solitaire_tooltip, longqi_tooltip]

// get img elements from DOM for handleAnatomy()
const scales = document.querySelector("#scales");
const shell = document.querySelector("#shell");
const nervous = document.querySelector("#nervous");
const circulatory = document.querySelector("#circulatory");
const anat_stack = [scales, shell, nervous, circulatory]

// get img elements from DOM for handleWaterColumn()
const wc_zones = document.querySelector("#zones");
const wc_phyto = document.querySelector("#phyto");
const wc_carbon = document.querySelector("#carbon");
const wc_snail = document.querySelector("#snail");
const wc_stack = [wc_zones, wc_phyto, wc_carbon, wc_snail];

// get img elements from DOM for handleSclerite()
const sclerite_sulfur = document.querySelector("#sclerite_sulfur");
const sclerite_bacteria = document.querySelector("#sclerite_bacteria");
const sclerite_iron = document.querySelector("#sclerite_iron");
const sclerite_delta = document.querySelector("#sclerite_delta");
const sclerite_compare = document.querySelector("#sclerite_compare");
const sclerite_final = document.querySelector("#sclerite_final");
const sclerite_stack = [sclerite_sulfur, sclerite_bacteria, sclerite_iron, sclerite_delta, sclerite_compare, sclerite_final];

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

function handleWaterColumn(stepData) {
  if (stepData == "wc_a") {
    resetVisible(wc_stack);
    wc_zones.classList.add("visible");
  } else if (stepData == "wc_b") {
    resetVisible(wc_stack);
    wc_phyto.classList.add("visible");
  } else if (stepData == "wc_c") {
    resetVisible(wc_stack);
    wc_carbon.classList.add("visible");
  } else if (stepData == "wc_d") {
    resetVisible(wc_stack);
    wc_snail.classList.add("visible");
  } else {
    resetVisible(wc_stack);
    wc_zones.classList.add("visible");
  }
}

function handleMap(stepData) {
  if (stepData == "map_a") {
    map.flyTo([-19.946597, 62.654194], 3);
    removeLayers(layers);
    map.addLayer(swir_polyline);
    map.addLayer(carlsberg_polyline);
    map.addLayer(cir_polyline);
    map.addLayer(seir_polyline);
    map.addLayer(carlsberg);
    map.addLayer(cir);
    map.addLayer(swir);
    map.addLayer(seir);
  } else if (stepData == "map_b") {
    map.flyTo([-17.808091, 65.355545], 3.5);
    removeLayers(layers);
    map.addLayer(daxi);
    map.addLayer(wocan);
    map.addLayer(tianxiu);
    map.addLayer(onnuri);
    map.addLayer(dodo); 
    map.addLayer(solitaire_dot);
    map.addLayer(edmond); 
    map.addLayer(kairei_dot);
    map.addLayer(pelagia);
    map.addLayer(tiancheng);
    map.addLayer(longqi_dot);
    map.addLayer(duanqiao);
    map.addLayer(site_21);
    
  } else if (stepData == "map_c") {
    map.flyTo([-28.786227, 57.832342], 4);
    removeLayers(layers);
    map.addLayer(kairei_dot);
    map.addLayer(solitaire_dot);
    map.addLayer(longqi_dot);
    map.addLayer(kairei_tooltip);
    map.addLayer(solitaire_tooltip);
    map.addLayer(longqi_tooltip);
  } else if (stepData == "map_d") {
    map.flyTo([-19.5450, 65.8500], 4.5);
    removeLayers(layers);
    map.addLayer(solitaire_dot);
    map.addLayer(solitaire_tooltip);
  } else if (stepData == "map_e") {
    map.flyTo([-28.786227, 57.832342], 4)
    removeLayers(layers);
    map.addLayer(kairei_pop);
    map.addLayer(solitaire_pop);
    map.addLayer(longqi_pop);
    map.addLayer(kairei_tooltip);
    map.addLayer(solitaire_tooltip);
    map.addLayer(longqi_tooltip);

  } else {
    map.flyTo([5.236302, 79.006576], 2.5)
    removeLayers(layers);
  }
}

function handleSclerite(stepData) {
  if (stepData == "sclerite_a") {
    resetVisible(sclerite_stack);
    sclerite_sulfur.classList.add("visible");
  } else if (stepData == "sclerite_b") {
    resetVisible(sclerite_stack);
    sclerite_sulfur.classList.add("visible");
    sclerite_bacteria.classList.add("visible");
  } else if (stepData == "sclerite_c") {
    resetVisible(sclerite_stack);
    sclerite_sulfur.classList.add("visible");
    sclerite_bacteria.classList.add("visible");
    sclerite_iron.classList.add("visible");
  } else if (stepData == "sclerite_d") {
    resetVisible(sclerite_stack);
    sclerite_sulfur.classList.add("visible");
    sclerite_bacteria.classList.add("visible");
    sclerite_delta.classList.add("visible");
  } else if (stepData == "sclerite_e") {
    resetVisible(sclerite_stack);
    sclerite_compare.classList.add("visible");
  } else if (stepData == "sclerite_f") {
    resetVisible(sclerite_stack);
    sclerite_final.classList.add("visible");
  } else {
    resetVisible(sclerite_stack);
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
    } else if (stepData.startsWith("wc_")) {
      handleWaterColumn(stepData);
    } else if (stepData.startsWith("sclerite_")) {
      handleSclerite(stepData);
    }
  })
  .onStepExit((response) => {
    console.log("exit", response);
    let el = response.element;
    el.classList.remove("active");
  });
// end scroller


