let inputSearch = document.querySelector('#searchInput')
let buttonSearch = document.querySelector('#searchButton')


inputSearch.addEventListener('keyup', function(e) {
  console.log(e.key)
  if(inputSearch.value.length >= 3) {
    let nameMovie = inputSearch.value.replaceAll(" ", "+")
    movieApi(nameMovie)
  } else {
    document.querySelector('ul').innerHTML = " "
  }
  console.log(inputSearch.value)
  
})

buttonSearch.addEventListener('click', function() {
  let nameMovie = inputSearch.value.replaceAll(" ", "+")

  movieApi(nameMovie)
})

function movieApi(name) {
  let films = []
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=051e015fad5371e8aa5efffc2cf78b4b&query=${name}&language=pt-BR`)
  .then( res => res.json())
  .then(data => {
    for (let i=0; i<=5; i++) {
      films.push(data.results[i])
      }
    listConstructor(films)
  })
}

    function listConstructor(listOfFilms) {
      document.querySelector('ul').innerHTML = " "
      listOfFilms.forEach(element => {
        let eachFilme = document.createElement('li')
  
        eachFilme.innerHTML = `<li class="option"><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="filme"> <span>${element.title}</span>  </li>`
        
        document.querySelector('ul').append(eachFilme) 
      })
    }



