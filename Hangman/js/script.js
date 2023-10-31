/* ARTHUR DE OLIVEIRA PINTO 27/10/2023*/
/* ----------------------------- Manipulação DOM ---------------------------------*/
let wordlen = document.querySelector('.tampalavra')
let cont = document.querySelector('.container')
let palmostr = document.querySelector('.palavra_mostrada')
let reload = document.querySelector('.reload')
let painel = document.querySelector('.painel')
let tipo = document.createElement("div")
let erros = document.createElement("div")
let chosenLetters = document.querySelector('.LetrasEscolhidas')
let msgword = document.querySelector('.msg_word')
let canva = document.getElementById("cv")
let ctx = canva.getContext("2d")
let msg = document.createElement("div")
const bod = document.body
/* ----------------------------- Adicionar classes ---------------------------------*/
tipo.classList.add("tipo")
erros.classList.add("erro")
msg.classList.add("Mensagem")
/* ----------------------------- Adicionar ao body ---------------------------------*/
bod.appendChild(tipo)
bod.appendChild(erros)
bod.appendChild(msg)
/* ----------------------------- Variáveis globais ---------------------------------*/
let errorcount = 0
let array = []
let showword = ""
let universalword = ""
let arr = ""
msg.style.display = "none"


for (let i = 0; i < 26; i++) {
    let button = document.createElement("button")
    button.classList.add("btn")
    button.innerHTML = String.fromCharCode(65 + i)
    cont.appendChild(button)
}

let butWord = document.querySelectorAll('.btn')

const fetchWord = async () => {
    const jsonn = await fetch(`./dados.json`)
    const data = await jsonn.json()
    const obj = data.palavras[Math.floor(Math.random() * data.palavras.length)]
    return obj
}

const funcCanva = () => {

    if (errorcount == 1) {
        let centerX = 100
        let centerY = 40
        let radius = 15
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3
        ctx.stroke()
    }
    if (errorcount == 2) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 55)
        ctx.lineTo(100, 100)
        ctx.stroke()
    }
    if (errorcount == 3) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 100)
        ctx.lineTo(140, 160)
        ctx.stroke()
    }
    if (errorcount == 4) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 100)
        ctx.lineTo(60, 160)
        ctx.stroke()
    }
    if (errorcount == 5) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 75)
        ctx.lineTo(140, 100)
        ctx.stroke()
    }
    if (errorcount == 6) {
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = "white"
        ctx.moveTo(100, 75)
        ctx.lineTo(60, 100)
        ctx.stroke()

        setTimeout(() => {
            ctx.clearRect(0, 0, canva.width, canva.height)
        }, 2000);
    }
}

function modString(x) {
    let str = ""
    for (i = 0; i < x; i++) {
        str += "__ "
    }

    return str
}

const initialDraw = () => {
    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = "white"
    ctx.moveTo(20, 200)
    ctx.lineTo(20, 20)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 8
    ctx.strokeStyle = "white"
    ctx.moveTo(16, 20)
    ctx.lineTo(110, 20)
    ctx.stroke()
}

const main = async () => {
    errorcount = 0
    const obj = await fetchWord()
    const word = obj.palavra
    universalword = word
    initialDraw()
    tipo.innerHTML = `${obj.tipo}`
    erros.innerHTML = `Erros: ${errorcount}`
    wordlen.innerHTML = `Tamanho da palavra: ${word.length} letras`
    showword = modString(word.length)
    palmostr.innerHTML = showword
    reajustTam(palmostr.clientWidth)
}

const reajustTam = newwidth => {
    let porc = (newwidth * 20)/100
    painel.style.width = `${newwidth + porc}px`
}

function verifyOtherLetter(character, x) {
    let newstr = ""

    if (character.toLowerCase() == 'c') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'c' || universalword[i].toLowerCase() == 'ç') {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    } else if (character.toLowerCase() == 'a') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'a' || universalword[i].toLowerCase() == 'ã' || universalword[i].toLowerCase() == 'á') {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    } else if (character.toLowerCase() == 'e') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'e' || universalword[i].toLowerCase() == 'é' || universalword[i].toLowerCase() == 'ê' ) {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    } else if (character.toLowerCase() == 'i') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'i' || universalword[i].toLowerCase() == 'í') {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    } else if (character.toLowerCase() == 'o') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'o' || universalword[i].toLowerCase() == 'ó' || universalword[i].toLowerCase() == 'õ' || universalword[i].toLowerCase() == 'ô') {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    } else if (character.toLowerCase() == 'u') {
        for (let i = 0; i < universalword.length; i++) {
            if (universalword[i].toLowerCase() == 'u' || universalword[i].toLowerCase() == 'ú') {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    }
    return x
}

const verifyWinner = () => {
    if (showword.split(' ').join('').toLowerCase() == universalword.toLocaleLowerCase()) {
        msg.innerHTML = "PARABÉNS VOCÊ VENCEU"
        chosenLetters.innerHTML = arr = ""
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
            ctx.clearRect(0, 0, canva.width, canva.height)
        }, 2000);
        return 1
    }
    return 0
}

const verifyLoser = () => {
    if (errorcount == 6) {
        msg.innerHTML = "Que Pena Você Perdeu"
        chosenLetters.innerHTML = arr = ""
        msg.style.display = "block";
        palmostr.innerHTML = universalword.split('').join(' ').toUpperCase()
        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
        return 1
    }
    return 0
}

const countError = x => {
    if (x == 0) {
        errorcount++
        funcCanva()
        erros.innerHTML = `Erros: ${errorcount}`
        erros.style.backgroundColor = "rgb(255,0,0,0.4)"
        setTimeout(() => {
            erros.style.backgroundColor = "rgb(0,0,0,0.5)"
        },500)
    }
}

function verifyWord(character, word) {
    let x = 0

    console.log(word)
    if (character == 'A' || character == 'C' || character == 'E' || character == 'I' || character == "O" || character == "U") {
        x = verifyOtherLetter(character, x)
    } else {
        for (let i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() == character.toLowerCase()) {
                newstr = showword.substring(0,i*3) + " " + `${universalword[i].toUpperCase()}` + " " + showword.substring(i*3+3)
                console.log(newstr)
                showword = newstr
                palmostr.innerHTML = showword
                reajustTam(palmostr.clientWidth)
                x++
            }
        }
    }

    verifyWinner()
    countError(x)
    verifyLoser()
}

reload.addEventListener('click', () => {
    main()
    msg.style.display = "none"
    chosenLetters.innerHTML = arr = ""
    ctx.clearRect(0, 0, canva.width, canva.height)
})

butWord.forEach((button) => {
    button.addEventListener('click', (event) => {
        const letra = event.target.textContent

        if (arr.indexOf(letra) !== -1) {
            msgword.innerHTML = "Letra Já escolhida"
            setTimeout(() => {
                msgword.innerHTML = ""
            }, 3000)
        } else if (verifyLoser() != 1 && verifyWinner() != 1) {
            arr += `${letra} - `
            chosenLetters.innerHTML = arr
            verifyWord(letra, universalword)
        }
    })
})

main()
