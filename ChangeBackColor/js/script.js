const colors = ["green","red","rgba(133,122,200)"]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const wordcolor = document.querySelector('.container')

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber()
    randomNumber = Math.floor(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    wordcolor.style.color = colors[randomNumber]
})

function getRandomNumber(){
    return Math.random() * colors.length
}