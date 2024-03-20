const node = document.getElementById('text');

function changeSize() {
    node.style.fontSize = Math.floor(Math.random() * 36) + 10 + 'px';
}

function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    node.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function rotate() {
    const direction = Math.random().toFixed(1);
    node.style.transform = `rotate(${direction}turn)`;
}

let randomValue;

setInterval(() => {
    randomValue = Math.random();
    if (randomValue > 0.66) {
        changeColor();
    } else if (randomValue > 0.33) {
        changeSize();
    } else {
        rotate();
    }
}, 1000);