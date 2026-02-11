const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const originalBg = "linear-gradient(#fff0f5, #ffe6f0)";

// Store No button's original position relative to page
let noOriginal = {
  left: noBtn.offsetLeft,
  top: noBtn.offsetTop
};
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
function moveNoButton() {
  document.body.style.background = "red";

  // mobile vibration
  if (navigator.vibrate) {
    navigator.vibrate(200);
  }

  noBtn.style.position = "absolute";
  noBtn.style.transition = "left 0.4s ease, top 0.4s ease";

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  message.textContent = "No, you don’t have this option 😌";
  message.style.color = "white";
  message.style.background = "crimson";
  message.style.display = "block";
  message.style.opacity = "1";
}



// --- YES button hover ---
yesBtn.addEventListener("mouseover", () => {
  document.body.style.background = "green";
  message.textContent = "Excellent choice 👍";
  message.style.color = "white";
  message.style.background = "darkgreen";
  message.style.display = "block";
  message.style.opacity = "1";

  // Keep No button next to Yes
  noBtn.style.position = "relative";
  noBtn.style.left = "0";
  noBtn.style.top = "0";
  noBtn.style.zIndex = 1;

});

// --- YES click ---
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1500);
});

setTimeout(() => {
  optionMessage.textContent = "You don't have any option 😌";
  optionMessage.style.display = "block";

  setTimeout(() => {
    optionMessage.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    optionMessage.style.opacity = "0";

    setTimeout(() => {
      window.location.href = "page4.html";
    }, 800);

  }, 3000);

}, 5000);