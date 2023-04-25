const form = document.querySelector('form')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

form.addEventListener('submit', function(e) {
  const valorA = parseInt(campoA.value)
  const valorB = parseInt(campoB.value)

  if (valorB > valorA) {
  } else {
    alert('O valor do campo B deve ser maior que o valor do campo A.')
    e.preventDefault()
  }
})
