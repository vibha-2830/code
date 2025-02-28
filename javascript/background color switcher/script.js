const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click' , function (eventobjct) {
    console.log(eventobjct);
    console.log(eventobjct.target);
    if (eventobjct.target.id === 'gray') {
        body.style.backgroundColor = eventobjct.target.id;
    }
    if (eventobjct.target.id === 'pink') {
        body.style.backgroundColor = eventobjct.target.id;
    }
    if (eventobjct.target.id === 'blue') {
        body.style.backgroundColor = eventobjct.target.id;
    }
    if (eventobjct.target.id === 'yellow') {
        body.style.backgroundColor = eventobjct.target.id;
    }
 })
})