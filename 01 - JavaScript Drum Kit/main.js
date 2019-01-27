function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
