//queryselectorall for all buttons and store in the variable
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); //queryselectorfor body
buttons.forEach(function (button) {
  button.addEventListener('click', function (myEvent) {
    console.log(myEvent);
    console.log(myEvent.target);
    if (myEvent.target.id === 'red') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'grey') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'white') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'green') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'blue') {
      body.style.backgroundColor = myEvent.target.id;
    }
    if (myEvent.target.id === 'yellow') {
      body.style.backgroundColor = myEvent.target.id;
    }
  });
});
