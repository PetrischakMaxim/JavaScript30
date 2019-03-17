const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const step = 500;

function shadow(e) {
    const {
        offsetWidth: width,
        offsetHeight: height
    } = hero;

    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const stepX = Math.round((x / width * step) - (step / 2));
    const stepY = Math.round((y / height * step) - (step / 2));

    text.style.textShadow = `
        ${stepX}px ${stepY}px 0 red,
        ${stepX*-1}px ${stepY}px 0 green,
        ${stepX*2}px ${stepY*2}px 10px yellow,
        ${stepY*-1}px ${stepX}px 5px pink
        `
}

hero.addEventListener('mousemove', shadow);
