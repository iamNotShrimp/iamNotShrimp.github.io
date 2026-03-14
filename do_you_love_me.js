const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");


// NO button movement (fixed for mobile)

noBtn.addEventListener("mouseover", () => {

const maxX = window.innerWidth - noBtn.offsetWidth;
const maxY = window.innerHeight - noBtn.offsetHeight;

const newX = Math.random() * maxX;
const newY = Math.random() * maxY;

noBtn.style.position = "fixed";
noBtn.style.left = newX + "px";
noBtn.style.top = newY + "px";

});


// YES button animation

yesBtn.addEventListener("click", () => {

  // send message to Formspree silently
  fetch("https://formspree.io/f/xyknwykv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "She Said YES ❤️"
    })
  });

  // your animation continues normally
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);

});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*1
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,182,193,0.7)";

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

p.y += p.d;

if(p.y > canvas.height){
p.y = 0;
p.x = Math.random()*canvas.width;
}

});

requestAnimationFrame(draw);

}

draw();