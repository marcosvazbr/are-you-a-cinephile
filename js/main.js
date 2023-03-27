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

    function listConstructor(listOfOptions) {
      document.querySelector('ul').innerHTML = " "
      listOfOptions.forEach(element => {
        let eachFilme = document.createElement('li')
  
        eachFilme.innerHTML = `<li class="option"><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="filme"> <span>${element.title}</span>  </li>`
        
        document.querySelector('ul').append(eachFilme) 

        eachFilme.addEventListener('click', function (){
          listOfFilmes(element)
          document.querySelector('ul').innerHTML = " "
          inputSearch.value = ""
        })
      }) 
    }

    function listOfFilmes(filme) {
        console.log('chegou aqui')
        console.log(filme)

        
        let filmTr = document.createElement('tr')
        filmTr.innerHTML = `<td id="name-movie">
        <div id="img-movie">
          <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="Capa do filme">
        </div>
        <div>
          <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">${filme.original_title} 
            <p>${filme.title}</p>
          </a>
          
        </div>
      </td> 
      <td id="typeMovie">${filme.release_date}</td>
          <td id="yearMovie">${filme.vote_count}</td>
          <td id="scoreMovie">${filme.vote_average}</td>`
        

          document.querySelector('tbody').append(filmTr)
        

      }
    
    



