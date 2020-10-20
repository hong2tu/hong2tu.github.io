// You may wish to find an effective randomizer function on MDN.

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.

  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
      // console.log('fromServer', fromServer);
      
      const countries = range(10).map((i) => fromServer[getRandomInt(fromServer.length)]);

      countries.sort((b, a) => sortFunction(a, b, 'name'));
      console.log(countries)

      const orderedList = document.createElement('ol');
      orderedList.setAttribute('class', 'flex-inner');
      countries.map((country) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox'); 
        checkbox.setAttribute('id', country.code);
        checkbox.value = country.code;
        checkbox.name = 'hong';
        const label = document.createElement('label');
        label.setAttribute('for', country.code);
        label.innerText = country.name; 
        li.appendChild(checkbox);
        li.appendChild(label);
        orderedList.appendChild(li);
      });

      const container = document.getElementById('checklistContainer');
      
      container.innerHTML = '';
      container.appendChild(orderedList);


    })
    .catch((err) => console.log(err));
});