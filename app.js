const button = document.querySelector('.button');
const dice = document.querySelector('.dice-1');



function changeDice(dice) {
  dice.className = `dice dice-${Math.ceil(Math.random() * 6)}`;
}

button.addEventListener('click', function(){
  changeDice(dice);
});