const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOn() {
console.log('image clicked');

if (elem.src === imgOff){
    elem.src = imgOn;
} else {
    elem.src = imgOff;
}

}
