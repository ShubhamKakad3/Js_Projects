const divEle = document.querySelector('.card-container');

  const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/1`);
  req.send();

  req.addEventListener('load', function () {
    console.log(responseText);
  });
