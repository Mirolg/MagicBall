const img = document.querySelector('img');
const input = document.querySelector('input');
const pAnswer = document.querySelector('.answer');
const pError = document.querySelector('.error');

const answers = ['Tak', 'Nie', 'Może', 'Zapomnij', 'Nie chcesz znać odpowiedzi na to pytanie ;/'];
function shake() {
    pAnswer.textContent = '';
	img.classList.add('shake-animation');
	setTimeout(() => {
		img.classList.remove('shake-animation');
		checkError();
	}, 1000);
}
function randomAnswer() {
	return (answer = answers[Math.floor(Math.random() * answers.length)]);
}
function checkError() {
	if (input.value === '') {
		pAnswer.textContent = '';
		pError.textContent = 'Musisz zadać pytanie';
		return;
	}
	if (input.value.includes('?')) {
		pError.textContent = '';
		pAnswer.textContent = "Odpowiedź: "+ randomAnswer();
	} else {
		pAnswer.textContent = '';
		pError.textContent = `Pytanie musi mieć na końcu "?"`;
	}
}

img.addEventListener('click', shake);
document.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        shake()
    }
})
