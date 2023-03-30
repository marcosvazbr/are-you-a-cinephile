import { listOfMovies } from "./list-of-films.js"


export function movieApi(name, ) {
  let films = []
  
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=051e015fad5371e8aa5efffc2cf78b4b&query=${name}&language=pt-BR`)
  .then((response) => response.json())
  .then(data => {
    let numberOptions = data.results.length <= 5 ? data.results.length - 1 : 5
    for (let i=0; i <= numberOptions; i++) {
      films.push(data.results[i])
      }
    listConstructor(films)
  })
}

function listConstructor(listOfOptions) {
  document.querySelector('ul').innerHTML = " "
  listOfOptions.forEach(element => {
    let eachFilme = document.createElement('li')

    eachFilme.innerHTML = `<li class="option"><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="filme"> <span>${element.title}</span>  </li>`
    
    document.querySelector('ul').append(eachFilme) 

    eachFilme.addEventListener('click', function (){
      cleanListOptions()
      
      listOfMovies(element)
    })
  }) 
}

function cleanListOptions(){
  document.querySelector('ul').innerHTML = " "
  document.querySelector('#searchInput').value = ""
}

