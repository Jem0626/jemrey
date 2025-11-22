/* PAGE SWITCH */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* TYPEWRITER */
document.querySelectorAll('.typewriter').forEach(el=>{
  const text=el.textContent; el.textContent=""; let i=0;
  function type(){ if(i<text.length){ el.textContent+=text[i++]; setTimeout(type,45); } }
  type();
});

/* GIFT BOX */
const giftBox = document.getElementById('giftBox');
const lid = giftBox.querySelector('.lid');
const surpriseContent = document.getElementById('surpriseContent');
const balloonsContainer = document.getElementById('balloonsContainer');
const confettiContainer = document.getElementById('confettiContainer');

giftBox.addEventListener('click', () => {
  lid.style.transform = 'rotateX(-130deg)';
  surpriseContent.style.opacity = '1';
  giftBox.classList.add('glow-box');
  createBalloons();
  createConfetti();
});

function createBalloons(){
  balloonsContainer.innerHTML = "";
  for(let i=0;i<15;i++){
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    // start slightly offset from center
    balloon.style.left = (-10 + Math.random()*20) + 'px'; 
    balloon.style.width = 20 + Math.random()*20 + 'px';
    balloon.style.height = 30 + Math.random()*30 + 'px';
    balloon.style.background = `hsl(${Math.random()*360},70%,60%)`;
    
    const duration = 6 + Math.random()*4; // 6-10s
    const delay = Math.random()*2; // small delay
    balloon.style.animationDuration = duration + 's';
    balloon.style.animationDelay = delay + 's';
    
    balloonsContainer.appendChild(balloon);
  }
}



/* CONFETTI */
function createConfetti(){
  confettiContainer.innerHTML="";
  for(let i=0;i<50;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    c.style.left=Math.random()*100+'vw';
    c.style.top=Math.random()*50+'vh';
    c.style.background=`hsl(${Math.random()*360},80%,70%)`;
    confettiContainer.appendChild(c);
    const x=(Math.random()-0.5)*400; 
    const y=(Math.random()-0.5)*500;
    c.animate([
      {transform:"translate(0,0) rotate(0deg)"},
      {transform:`translate(${x}px, ${y}px) rotate(${Math.random()*360}deg)`}
    ],{duration:1000+Math.random()*800,easing:"ease-out",fill:"forwards"});
  }
}

/* FLOATING HEARTS */
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-floating");
  heart.textContent="❤️";
  const size = Math.random()*25+15;
  heart.style.fontSize=size+"px";
  heart.style.left=Math.random()*100+"vw";
  heart.style.color=`hsl(${Math.random()*360},80%,70%)`;
  heart.style.transform=`rotate(${Math.random()*360}deg) scale(${Math.random()+0.5})`;
  heart.style.bottom="-30px";
  heart.style.opacity = 0.9;
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
}
setInterval(createFloatingHeart,200);



/* MULTICOLOR SPARKLES */
const sparklesContainer = document.createElement('div');
document.body.appendChild(sparklesContainer);
sparklesContainer.style.position = 'fixed';
sparklesContainer.style.top = '0';
sparklesContainer.style.left = '0';
sparklesContainer.style.width = '100%';
sparklesContainer.style.height = '100%';
sparklesContainer.style.pointerEvents = 'none';
sparklesContainer.style.overflow = 'hidden';
sparklesContainer.style.zIndex = '1500';

const sparkleColors = ["#FFD700","#FF69B4","#FF1493","#FF4500","#BA55D3","#7B68EE","#00CED1","#FFB6C1"];

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const size = 3 + Math.random() * 6;
    sparkle.style.width = sparkle.style.height = size + 'px';
    const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    sparkle.style.background = `radial-gradient(circle, ${color} 0%, #fff 80%)`;
    sparkle.style.borderRadius = '50%';
    sparkle.style.position = 'absolute';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.opacity = 0.8;
    sparkle.style.animation = `sparkle-float ${2 + Math.random()*2}s ease-in-out forwards, sparkle-twinkle ${Math.random()*2 + 1}s ease-in-out infinite alternate`;
    sparklesContainer.appendChild(sparkle);
    setTimeout(()=>sparkle.remove(),5000);
}
setInterval(createSparkle,100);

const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
@keyframes sparkle-float {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(-20px) scale(1.5); opacity: 0.7; }
  100% { transform: translateY(-50px) scale(0); opacity: 0; }
}
@keyframes sparkle-twinkle {
  0% {opacity:0.8;}
  50% {opacity:1;}
  100% {opacity:0.8;}
}

/* Gift box glow */
.glow-box::after {
  content:"";
  position:absolute;
  width:300px;
  height:300px;
  background: radial-gradient(circle, rgba(255,192,203,0.5) 0%, transparent 70%);
  top:-40px; left:-40px;
  border-radius:50%;
  pointer-events:none;
  animation: glowPulse 1.5s ease-in-out infinite alternate;
  z-index:1;
}
@keyframes glowPulse {
  0% { transform: scale(0.9); opacity:0.6; }
  100% { transform: scale(1.1); opacity:1; }
}`;
document.head.appendChild(sparkleStyle);

function showPage(pageId){
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

/* FLOATING BUTTERFLIES */
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  butterfly.innerHTML = "🦋";

  const size = Math.random() * 20 + 20;
  butterfly.style.fontSize = size + "px";
  butterfly.style.position = "fixed";
  butterfly.style.left = Math.random() * 100 + "vw";
  butterfly.style.bottom = "-40px";
  butterfly.style.opacity = 0.9;
  butterfly.style.animation = `butterfly-float ${6 + Math.random()*4}s ease-in-out forwards`;

  document.body.appendChild(butterfly);

  setTimeout(() => butterfly.remove(), 9000);
}

setInterval(createButterfly, 600);

const butterflyStyle = document.createElement('style');
butterflyStyle.innerHTML = `
@keyframes butterfly-float {
  0% { transform: translate(0,0) rotate(0deg); opacity:1; }
  50% { transform: translate(-20px, -150px) rotate(20deg); opacity:0.8; }
  100% { transform: translate(40px, -300px) rotate(-10deg); opacity:0; }
}
`;
document.head.appendChild(butterflyStyle);

/* SOFT PAGE TRANSITION */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
    p.style.opacity = 0;
    p.style.transform = "translateY(30px)";
  });

  const newPage = document.getElementById(id);
  newPage.classList.add('active');

  setTimeout(()=>{
    newPage.style.opacity = 1;
    newPage.style.transform = "translateY(0)";
  }, 50);
}
const pageAnim = document.createElement('style');
pageAnim.innerHTML = `
.page {
  transition: all 0.7s ease;
}
`;
document.head.appendChild(pageAnim);

function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const newPage = document.getElementById(id);
  newPage.classList.add('active');

  // Disable floating effects on pages with class "no-effects"
  if(newPage.classList.contains("no-effects")){
    disableFloating();
  } else {
    enableFloating();
  }
}

function disableFloating(){
  document.getElementById("hearts-container").style.display = "none";
  sparklesContainer.style.display = "none";
}

function enableFloating(){
  document.getElementById("hearts-container").style.display = "block";
  sparklesContainer.style.display = "block";
}

function playTrain(){
  const train = document.querySelector(".train");
  if (train) {
    train.style.animation = "none";
    void train.offsetWidth; 
    train.style.animation = "trainMove 12s linear forwards";
  }
}

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const newPage=document.getElementById(id);
  newPage.classList.add('active');

  if(newPage.classList.contains("no-effects")){
    disableFloating();
    playTrain(); // 🚂 Only plays here
  } else {
    enableFloating();
  }
}
