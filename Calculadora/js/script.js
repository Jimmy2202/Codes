let display = document.querySelector('.display')
let number = document.querySelectorAll('.btn')
let operator = document.querySelectorAll('.btn2')
let del = document.querySelector('.del')
let displaynumber = ""
let displayaux = ""

function isOperator(char) {
    if (char == '+' || char == '-' || char == '/' || char == '*') {
        return 1
    }
    return 0
}

number.forEach((button) => {
    button.addEventListener("click", () => {
        displaynumber += button.textContent
        displayaux += button.textContent
        display.innerHTML = displaynumber
    })
})

const verifyExpression = () => {
    for (let i = 0; i < displayaux.length; i++) {
        if (isOperator(displayaux[i])) {
            if (i == 0) {
                displayaux = displaynumber = ""
                display.innerHTML = "EXPRESSÃO ERRADA"
                return 0
            }
            else if (isOperator(displayaux[i - 1]) || isOperator(displayaux[i + 1])) {
                displayaux = displaynumber = ""
                display.innerHTML = "EXPRESSÃO ERRADA"
                return 0
            }
        }
    }
    return 1
}

const evalExpression = (operador) => {
    let ver = 0
    console.log("EXPRESSÃO: ",displayaux)
    console.log("operador da vez: ", operador)
    if (operador != '=') {
        console.log("entrei")
        for (let i = 0; i < displayaux.length - 1; i++) {
            if (isOperator(displayaux[i])) {
                console.log("tem operador antes")
                ver = 1
                displayaux = eval(displayaux.substring(0, displayaux.length - 1)).toString() + `${operador}`
                displaynumber = ""
                display.innerHTML = displaynumber
                return "aguarde"
            }
        }
    }

    if (operador != '=' && ver == 0) {
        console.log("não tem operador antes")
        displaynumber = ""
        display.innerHTML = displaynumber
        return "aguarde"
    }

    if (operador == '=') {
        console.log("ue")
        return eval(displayaux)
    }
}

operator.forEach((operador) => {
    operador.addEventListener("click", () => {
        if (isOperator(operador.textContent)) {
            displayaux += operador.textContent
        }

        console.log(displayaux)

        if (verifyExpression()) {
            if (evalExpression(operador.textContent) != "aguarde") {
                display.innerHTML = evalExpression(operador.textContent).toString()
                displayaux = `${evalExpression(operador.textContent)}`
            }
        }
    })
})

del.addEventListener("click", () =>{
    display.innerHTML = displayaux = displaynumber = ""
})
