import { movieApi } from "./list-of-options.js"


let inputSearch = document.querySelector('#searchInput')
let yourScoreButton = document.querySelector('.button-score')
let yourScore = document.querySelector('.score')
let yourFilmsScore = []





inputSearch.addEventListener('keyup', function(){
  if(inputSearch.value.length >= 3) {
  let nameMovie = inputSearch.value.replaceAll(" ", "+")
  movieApi(nameMovie, inputSearch)
  } else {
    document.querySelector('ul').innerHTML = " "
  }
})

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
              document.querySelector('.score-90').classList.remove('hide')
              break
            case 8:
            case 7:
              document.querySelector('.score-80').classList.remove('hide')
              break
            case 6:
            case 5:
              document.querySelector('.score-60').classList.remove('hide')
              break
            default:
              document.querySelector('.score-00').classList.remove('hide')

          }
        }

      })
    
    



