const envelope = document.querySelector(".envelope-wrapper");
const letter = document.getElementsByClassName('letter');
// letter.style.overflowY = "hidden";
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
//   letter.style.overflowY = "visible";
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('hearts');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '🩷';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);