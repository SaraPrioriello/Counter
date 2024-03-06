let score = 0;

function updateCounter() {
    const counter = document.getElementById('counter');
    counter.innerText = score;
}

function increment() {
    score++;
    updateCounter();

    const gunshot = new Audio("assets/audio/shot.wav");
    gunshot.play();

    const gunshotImg = document.getElementById('gunshot');
    gunshotImg.style.transform = 'translate(-50%, -50%) scale(1)';
    setTimeout(() => {
        gunshotImg.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 500);
}

function decrement() {
    score--;
    updateCounter();

    const decrementSound = new Audio("assets/audio/arthur-voce.mp3");
    decrementSound.play();
}

function createNewElement(tagName, className, innerHTML, parent) {
    const newElement = document.createElement(tagName);
    newElement.className = className;
    newElement.innerHTML = innerHTML;
    parent.append(newElement);
    return newElement;
}

function startGame() {
    const btnsContainer = document.querySelector(".buttons-container");
    const decrementBtn = createNewElement("button", "minus", "-", btnsContainer);
    const incrementBtn = createNewElement("button", "plus", "+", btnsContainer);
    const resetButton = createNewElement("button", "reset", "Reset", btnsContainer);
    const soundtrack = document.getElementById('soundtrack');
    soundtrack.pause();
    soundtrack.style.display = 'none';

    

    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);
    resetButton.addEventListener('click', reset);

    incrementBtn.style.display = 'inline-block';
    decrementBtn.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';

    const containerPage = document.getElementById('container-page');
    containerPage.style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('counter').style.opacity = '1';
    document.body.style.backgroundImage = "url('assets/img/red-dead.jpg')";
  
}

function reset() {
    score = 0;
    updateCounter();
}

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('resetButton').addEventListener('click', reset);





