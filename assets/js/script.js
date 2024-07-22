  
const ganondorfPopsUp = document.getElementById('ganondorf-btn');
const daleZeldaDale = document.getElementById('bestSong');
    bestSong.volume = 0.2;
const messageFromNavi = document.getElementById('formBtn');
const swordSkill = document.getElementById('firstSkill');
const archSkill = document.getElementById('secondSkill');
const horseSkill = document.getElementById('thirdSkill');
const musicSkill = document.getElementById('fourthSkill');
const stealthSkill = document.getElementById('fifthSkill');
const bombSkill = document.getElementById('sixthSkill');

//    Funciones

function changeButtonText() {
    ganondorfPopsUp.textContent = "¿O sí?"
}

function resetButtonText() {
    ganondorfPopsUp.textContent = "No tocar"
}

function startPlayingSong() {
    daleZeldaDale.play();
}

function answerFromNavi() {
    alert('!Gracias por comunicarte con Link! \nIré de inmediato a entregarle el mensaje. \n - Navi');
}

function changeTextFirstSkill() {
    swordSkill.textContent = "Espadachín"
}

function changeTextSecondSkill() {
    archSkill.textContent = "Tiro al Arco"
}

function changeTextThirdSkill() {
    horseSkill.textContent = "Equitación"
}

function changeTextFourthSkill() {
    musicSkill.textContent = "Música"
}

function changeTextFifthSkill() {
    stealthSkill.textContent = "Sigilo"
}

function changeTextSixthSkill() {
    bombSkill.textContent = "Explosivos"
}

//    Eventos

ganondorfPopsUp.addEventListener('mouseover', changeButtonText);
ganondorfPopsUp.addEventListener('mouseout', resetButtonText);
ganondorfPopsUp.addEventListener('click', startPlayingSong);
messageFromNavi.addEventListener('click', answerFromNavi);
swordSkill.addEventListener('mouseover', changeTextFirstSkill);
archSkill.addEventListener('mouseover', changeTextSecondSkill);
horseSkill.addEventListener('mouseover', changeTextThirdSkill);
musicSkill.addEventListener('mouseover', changeTextFourthSkill);
stealthSkill.addEventListener('mouseover', changeTextFifthSkill);
bombSkill.addEventListener('mouseover', changeTextSixthSkill);