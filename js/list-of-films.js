export function listOfMovies(filme) {

  let filmTr = document.createElement('tr')
  filmTr.classList.add('table-body')
  filmTr.innerHTML = `
  <td id="name-movie" >
    <div id="img-movie" >
      <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="Capa do filme">
    </div>
    <div>
      <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank">${filme.original_title} 
        <p class="title" >${filme.title}</p>
      </a>
    
    </div>
  </td> 
  <td id="typeMovie" >${filme.release_date}</td>
  <td id="yearMovie" >${filme.vote_count}</td>
  <td id="scoreMovie" >${filme.vote_average.toFixed(2)}</td>`
  

    document.querySelector('tbody').append(filmTr)
  
yourFilmsScore.push(filme.vote_average)

}