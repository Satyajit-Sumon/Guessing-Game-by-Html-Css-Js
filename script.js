let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = document.querySelector('#guessingNumber');
const checkButton = document.querySelector('#check');
const resultText = document.querySelector('.resultText')
const wonLostMessage = document.createElement('p');
const remainingAttempts = document.querySelector('.remainingAttempts');


form.addEventListener('submit', function(event){
    event.preventDefault();

    attempts ++;
    if(attempts == 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;

    }if(attempts < 6){
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts-attempts}`;

    };
});

function checkResult(guessingNumber){
    let randomNumber = getRandomNumber(5);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = `You have Won` 
        totalWons ++;
    }else{
        resultText.innerHTML = `You have Lost : Random number was:${randomNumber}`
        totalLosts ++;
    }
    wonLostMessage.innerHTML = `Won; ${totalWons}, Lost: ${totalLosts}`;
    wonLostMessage.classList.add('large-text');
    cardBody.appendChild(wonLostMessage);
}
function getRandomNumber(limit){

    return Math.floor(Math.random() * limit) + 1;

};