let yourScoreButton = document.querySelector('.button-score')
let yourScore = document.querySelector('.score')
let yourFilmsScore = []


export function listOfMovies(filme) {
  document.querySelector('.background').classList.add("hide")
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
  <td class="mobile tablet" id="typeMovie" >${filme.release_date}</td>
  <td class="mobile" id="yearMovie" >${filme.vote_count}</td>
  <td id="scoreMovie" >${filme.vote_average.toFixed(2)}</td>`
  
    document.querySelector('tbody').append(filmTr)
  
yourFilmsScore.push(filme.vote_average)
}

yourScoreButton.addEventListener('click', () => {
  let score = 0
  if(yourFilmsScore.length <= 2){
    alert("You need more films in your list!!!")
    return
  } else { 
    for(let i=0; i <= yourFilmsScore.length - 1; i++) {
      score = score + yourFilmsScore[i]
    }
    score = score / yourFilmsScore.length
    yourScore.innerText = score.toFixed(2)
    yourScoreButton.classList.add('hide')
    yourScore.classList.remove('hide')

    console.log(Math.round(score))
    switch(Math.round(score)) {
      case 9:
      case 8:
        document.querySelector('.score-90').classList.remove('hide')
        break
      case 7:
        document.querySelector('.score-80').classList.remove('hide')
        break
      case 6:
        document.querySelector('.score-60').classList.remove('hide')
        break
      default:
        document.querySelector('.score-00').classList.remove('hide')

    }
  }

})