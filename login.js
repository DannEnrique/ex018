const input = document.querySelector('.login_input');
const buttom = document.querySelector('.login_buttom');
const form = document.querySelector('.login_form')

const validateInput = ({ target })   => {
    if (target.value.length > 2) {
        buttom.removeAttribute('disabled');
        return;
    } 
        buttom.setAttribute('disabled', '');
    
}

const handleSubmit = () => {
 localStorage.setItem('player', input.value);
 window.location = 'game.html';0
 Event.preventDefault();

}


input.addEventListener('input', validateInput);
input.addEventListener('submit', handleSubmit);