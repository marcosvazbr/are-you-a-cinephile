export function inputNameMovie () {
  console.log('chegou aqui')
  if(inputSearch.value.length >= 3) {
    let nameMovie = inputSearch.value.replaceAll(" ", "+")
    movieApi(nameMovie)
  } else {
    document.querySelector('ul').innerHTML = " "
  }
  console.log(inputSearch.value)
  
}
