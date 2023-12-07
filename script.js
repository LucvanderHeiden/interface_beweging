// Consts
const startButton = document.querySelector("#start-button");
const fireButton = document.querySelector("#fire-button");
const waterButton = document.querySelector("#water-button");
const restartButton = document.querySelector("#restart-button");

// Audio
const landingAudio = new Audio('audio/landing.mp3');
const lighterAudio = new Audio('audio/lightersoundtrim.mp3');
const waveAudio = new Audio('audio/wave.mp3');

// Button setup
fireButton.disabled = true;
waterButton.disabled = true;

//Gif
let gifAnim = document.querySelector("img");

// Start function (animation)
function Start(){
    startButton.disabled = true;
    startButton.style.backgroundColor = "grey";

    gifAnim.src = "images/lighter_intro.gif";

    setTimeout(function() {
        landingAudio.play();
      }, 730);

    setTimeout(function() {
        gifAnim.src = "images/lighter_idle.gif";
        fireButton.disabled = false;
        fireButton.style.backgroundColor = "red";
      }, 5300);
}

// Fire function (animation)
function Fire() {
    fireButton.disabled = true;
    fireButton.style.backgroundColor = "grey";

    setTimeout(function() {
        lighterAudio.play();
      }, 2100);

    gifAnim.src = "images/lighter_fire.gif";
    setTimeout(function() {
        gifAnim.src = "images/lighter_fire_idle.gif";
        waterButton.disabled = false;
        waterButton.style.backgroundColor = "skyblue";
      }, 6100);
}

// Water function (animation)
function Water() {
    waterButton.disabled = true;
    waterButton.style.backgroundColor = "grey";
    waveAudio.play();

    setTimeout(function() {
        gifAnim.src = "images/lighter_water.gif";
      }, 500);
    
    setTimeout(function() {
        gifAnim.src = "images/lighter_idle.gif";
        fireButton.disabled = false;
        fireButton.style.backgroundColor = "red";
      }, 8800);
}

function refreshPage(){
    window.location.reload();
} 

// Eventlisteners
startButton.addEventListener('click', Start);
fireButton.addEventListener('click', Fire);
waterButton.addEventListener('click', Water);
restartButton.addEventListener('click', refreshPage);
