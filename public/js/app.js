axios.get('/api/burgers')
  .then(({ data: burgers }) => {
    burgers.forEach(burger => {
      let burgerElem = document.createElement('div')
      burgerElem.innerHTML =`
      <h5>${burger.name}</h5>
    <p>
    <button class="moveBurger" data-id="${burger.id}">I Ate This Burger!</button>
        </p>
        <button class="deleteBurger" data-id="${burger.id}">Delete Burger</button>
        <hr>
    `
      document.getElementById('burgerSec').append(burgerElem)
    })
      .catch(err => console.log(err))
  })


document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault();

  axios.post('/api/burgers', {
    name: document.getElementById('burgerName').value
  })
    .then(({ data: burger }) => {
      let burgerElem = document.createElement('div')
      burgerElem.innerHTML =
        `<h5>${burger.name}</h5>
        <p>
        <button class="moveBurger" data-id="${burger.id}">I Ate This Burger!</button>
        </p>
        <button class="deleteBurger" data-id="${burger.id}">Delete Burger</button>
        <hr>`
      document.getElementById('burgerSec').append(burgerElem)

      document.getElementById('burgerName').value = ''
    })
    .catch(err => console.log(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteBurger') {
    axios.delete(`/api/burgers/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.log(err))
  }
})