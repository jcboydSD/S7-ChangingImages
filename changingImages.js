const lightbulb = document.querySelector('#lightbulb');
const pumpkins = document.querySelector('#pumpkins');

pumpkins.addEventListener("click", () => {
    if(pumpkins.getAttribute('src') == "pumpkins.jpg") {
        pumpkins.src = "pumpkins-lit.jpg";
    }
    else {
        pumpkins.src = "pumpkins.jpg";
    }
});

lightbulb.addEventListener("mouseover", () => {
    lightbulb.src="light_bulb_on.png";
});

lightbulb.addEventListener("mouseout", () => {
    lightbulb.src="light_bulb_off.png";
});
