const yesBtn=document.querySelector(".yes-btn")
const noBtn=document.querySelector(".no-btn")

const question=document.querySelector(".question-container")
const result=document.querySelector(".result-container")
const loader = document.querySelector(".cssload-main")

const noTexts=[
"No",
"Are you sure?",
"Think again",
"Really?",
"Last chance",
"Don't lie 😑",
"YES is better"
]

let textIndex=0

function moveNo(){

const maxX=window.innerWidth-noBtn.offsetWidth
const maxY=window.innerHeight-noBtn.offsetHeight

const x=Math.random()*maxX
const y=Math.random()*maxY

noBtn.style.position="fixed"
noBtn.style.left=x+"px"
noBtn.style.top=y+"px"

textIndex=(textIndex+1)%noTexts.length
noBtn.innerText=noTexts[textIndex]

}

noBtn.addEventListener("mouseover",moveNo)
noBtn.addEventListener("touchstart",moveNo)
noBtn.addEventListener("click",moveNo)



yesBtn.addEventListener("click",()=>{

fetch("https://formspree.io/f/YOUR_FORM_ID",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:"She clicked YES ❤️"
})
})

question.style.display="none"
loader.style.display="block"

setTimeout(() => {
  loader.style.display = "none"
  result.style.display = "block"

  const video = document.querySelector("video")
  video.currentTime = 0
  video.play()
}, 3000)

})



const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<70;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*0.7
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="rgba(255,182,193,.8)"

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y+=p.d

if(p.y>canvas.height){

p.y=0
p.x=Math.random()*canvas.width

}

})

requestAnimationFrame(draw)

}

draw()