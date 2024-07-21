/* https://www.youtube.com/watch?v=424eiD9mVYY */
/* https://www.youtube.com/watch?v=d7wTA9F-l8c */

function makeVisible(ident) {
    document.getElementById(ident).style.opacity=1;
}

function makeInvisible(ident) {
    document.getElementById(ident).style.opacity=0;
}

//const steps = d3.selectAll(".step");
var main = document.querySelector("body");
var mapSection = main.querySelector("#map-section");
var steps = mapSection.querySelectorAll(".step");
console.log(steps);

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => { // handle step enter
    
    var el = response.element;
    steps.forEach(step => step.classList.remove("active"));
    el.classList.add("active");
    // { element, index, direction }

    console.log("enter", response);
    
    if (response.index == 5) {
        makeVisible("kairei");
        makeInvisible("solitaire");
        makeInvisible("longqi");
    } else if (response.index == 6) {
        makeInvisible("kairei");
        makeVisible("solitaire");
        makeVisible("longqi");
    } else {
        makeInvisible("kairei");
        makeInvisible("solitaire");
        makeInvisible("longqi");
    }
  })
  .onStepExit((response) => {
    // { element, index, direction }
    console.log("exit", response);
    steps.forEach(step => step.classList.remove("active"));
  });