// Animated hero cards

const cards = ['#card-laser', '#card-printer', '#card-solutions'];
const zIndexValues = [1, 2, 3];
const blurIndexValues = [0.5,0.5,0]
let rotationIndex = 0;

setInterval(() => {
  cards.forEach((card, index) => {
    const zIndex = zIndexValues[(index + rotationIndex) % 3];
    const blurIndex = blurIndexValues[(index + rotationIndex) % 3];
    card =document.querySelector(card);
    card.style.zIndex = zIndex;
    card.style.filter = `blur(${blurIndex}rem)`;

    if (zIndex ===3){
      card.style.animationPlayState = 'running';
    }else{
      card.style.animationPlayState = 'paused';
    }
  });
  rotationIndex = (rotationIndex + 1) % 3;
}, 2200); // adjust the interval to your liking (10 seconds in this example)