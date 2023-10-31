const pokemonname = document.querySelector('.pokemon_name') // const pokemonmae = span class=pokemon_name
const pokemonnumber = document.querySelector('.pokemon_number') 
const pokemonimage = document.querySelector('.pokemon__image')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const btnprev = document.querySelector('.btn_prev')
const btnnext = document.querySelector('.btn_next')
let position = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)//fetch retorna uma Promise, logo, a função deve ser assíncrona
    if(APIResponse.status == 200){
    const data = await APIResponse.json()
    return data
    }
}

const renderPokemon = async (pokemon) => {

    pokemonname.innerHTML = "Procurando..."    

    const data = await fetchPokemon(pokemon)
    if(data){
    pokemonname.innerHTML = data.name
    pokemonnumber.innerHTML = data.id
    position = data.id
    pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }else{
        pokemonname.innerHTML = "Não Encontrado"
        pokemonnumber.innerHTML = " "
    }
}

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    renderPokemon(input.value)
    input.value = ''
})

renderPokemon(`${position}`)

btnprev.addEventListener('click', (event) =>{
    event.preventDefault()
    let prev = position - 1
    if(position > 1){
    renderPokemon(`${prev}`)
    }
})

btnnext.addEventListener('click', (event) =>{
    event.preventDefault()
    let next = position + 1
    renderPokemon(`${next}`)
})