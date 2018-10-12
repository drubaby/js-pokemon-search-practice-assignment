document.addEventListener("DOMContentLoaded", function() {
  // //pokemons is a variable imported from db.json via index.html as a script tag
  // console.log(pokemons)
  // renderAllPokemons()
  inputListener()
})

let parentContainer = document.querySelector('#pokemon-container')


function renderAllPokemons(){
  pokemons.forEach(render)
}

function inputListener(){
  let inputField = document.querySelector('#pokemon-search-input')
  inputField.addEventListener('keyup', userSearchTerm)
}

function userSearchTerm(){
  let inputField = document.querySelector('#pokemon-search-input')
  let searchTerm = inputField.value
  clearHTML()
  pokemons.forEach(function(pokemon){
    if (pokemon.name.includes(searchTerm)){
      // debugger
      // console.log('search matches')
      // console.log(`${pokemon.name}`)
      render(pokemon)
    }
  })
}

function clearHTML(){
  let parentNode = document.querySelector('#pokemon-container')
  while (parentNode.children.length > 3){
    parentNode.removeChild(parentNode.lastChild)
  }
}


// returns strings for pokemon: name, front img and back img
function render(obj){
  // debugger
  let objName = obj.name
  let objImageURLs = obj.sprites
  let frontPic = objImageURLs['front']
  let backPic = objImageURLs['back']

  let pokemonContainer = document.querySelector('#pokemon-container')

  let string =
  `<div class="pokemon-container">
         <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
         <h1 class="center-text">${objName}</h1>
         <div style="width:239px;margin:auto">
           <div style="width:96px;margin:auto">
             <img src="${frontPic}">
           </div>
         </div>
         <p style="padding:10px;" class="center-text flip-image" data-pokename="s${objName}" data-action="flip-image">flip card</p>
         </div>
       </div>`
  pokemonContainer.innerHTML += string
}



// make function that appends div child filled with many pokemon containers
// filter through pokemon names, return any that contain search term
