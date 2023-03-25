let inputSearch = document.querySelector('#searchInput')
let buttonSearch = document.querySelector('#searchButton')

buttonSearch.addEventListener('click', function() {
  let nameMovie = inputSearch.value
  console.log(nameMovie)
  movieApi(nameMovie)
})

function movieApi(name) {

  fetch('https://api.themoviedb.org/3/search/movie?api_key=051e015fad5371e8aa5efffc2cf78b4b&query=clube+da+luta&language=pt-BR')
  .then( res => res.json())
  .then(data => data.results[0])
  .then((filme) => {

    let objMovie = {
      'nameOri': filme.original_title,

    }
    console.log(filme)
  })

  
 
}

