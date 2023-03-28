import { movieApi } from "./list-of-options.js"

let inputSearch = document.querySelector('#searchInput')

inputSearch.addEventListener('keyup', function(){
  if(inputSearch.value.length >= 3) {
  let nameMovie = inputSearch.value.replaceAll(" ", "+")
  movieApi(nameMovie, inputSearch)
  } else {
    document.querySelector('ul').innerHTML = " "
  }
})


    
    



