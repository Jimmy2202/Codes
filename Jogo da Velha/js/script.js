let draw = [[0,0,0],[0,0,0],[0,0,0]]
let jogo = document.querySelector('.jogo')

for(let i = 0; i < draw.length;i++){
    for(let j = 0; j < draw.length;j++){
        let button = document.createElement("button")
        button.classList.add('btn')
        button.dataset.row = i;
        button.dataset.col = j;
        jogo.appendChild(button)
    }
}

const verify_specific_case = () =>{
    if(draw[1][1] == draw[2][2] && draw[2][2] == "X"){
        if(draw[0][2] == 0){
            draw[0][2] = "O"
            let botao = document.querySelector(`button[data-row='${0}'][data-col='${2}']`);
            botao.innerHTML = "O"
        return 1
        }
    }else{
        return 0
    }
}

const verify_empty = () =>{
    let x = 0, count = 0
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(draw[i][j] == "X"){
                x++
            }else if(draw[i][j] == 0){
                count++
            }
        }
    }
    if(count == 9){
        return 2
    }else if(x == 1){
        return 1
    }else{
        return 0
    }
}

const atack_horizontal = () => {
    let circle = 0, zero = 0, x = 0, y = 0
    console.log(draw)
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(draw[i][j] == "O"){
                circle++
            } else if(draw[i][j] == 0){
                zero++
                x = i
                y = j
            }

            if(circle == 2 && zero != 0){
                console.log("Não retorna mano?")
                draw[x][y] = "O"
                let botao = document.querySelector(`button[data-row='${x}'][data-col='${y}']`);
                botao.innerHTML = "O"
                return 1
            }
        }
        circle = 0
        zero = 0
    }
    return 0
}

const atack_vertical = () => {
    let cricle = 0, zero = 0, x = 0, y = 0

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(draw[j][i] == "O"){
                cricle++
            } else if(draw[j][i] == 0){
                zero++
                x = j
                y = i
            }

            if(cricle == 2 && zero != 0){
                draw[x][y] = "O"
                let botao = document.querySelector(`button[data-row='${x}'][data-col='${y}']`);
                botao.innerHTML = "O"
                return 1
            }
        }
        cricle = 0
        zero = 0
    }
    return 0
}

const atack_diagonal_princip = () => {
    let cricle = 0, zero = 0, x = 0
    for(let i = 0; i < 3; i++){
        if(draw[i][i] == "O"){
            cricle++
        } else if(draw[i][i] == 0){
            zero++
            x = i
        }

        if(cricle == 2 && zero != 0){
            draw[x][x] = "O"
            let botao = document.querySelector(`button[data-row='${x}'][data-col='${x}']`);
            botao.innerHTML = "O"
            return 1
        }
    }
    return 0
}

const atack_diagonal_sec = () => {
    let cricle = 0, zero = 0, x = 0, y = 0
    console.log("Entra?")
    for(let i = 0; i < 3; i++){
        if(draw[i][3 - i - 1] == "O"){
            cricle++
        } else if(draw[i][3 - i - 1] == 0){
            zero++
            x = i
            y = 3 - i -1
        }

        console.log("circle: " + cricle + " Zeros: " + zero)

        if(cricle == 2 && zero != 0){
            console.log("Entra 2?")
            draw[x][y] = "O"
            let botao = document.querySelector(`button[data-row='${x}'][data-col='${y}']`);
            botao.innerHTML = "O"
            return 1
        }
    }
    return 0
}

const horizontal = (linha) => {
    let x = 0, y = 0
    for(let i = 0; i < draw.length; i++){
        if(draw[linha][i] == "X"){
            x++
            if(x == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${linha}'][data-col='${j}']`);
                    botao.classList.add('btn-green')
                }
            }
        }else if(draw[linha][i] == "O"){
            y++
            if(y == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${linha}'][data-col='${j}']`);
                    botao.classList.add('btn-red')
                }
            }
        }
    }

    if(x == 3){
        return 1
    }else if(y == 3){
        return 2
    }else{
        return 0
    }
}

const vertical = (coluna) => {
    let x = 0, y = 0
    for(let i = 0; i < draw.length; i++){
        if(draw[i][coluna] == "X"){
            x++
            if(x == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${coluna}']`);
                    botao.classList.add('btn-green')
                }
            }
        }else if(draw[i][coluna] == "O"){
            y++
            if(y == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${coluna}']`);
                    botao.classList.add('btn-red')
                }
            }
        }
    }

    if(x == 3){
        return 1
    }else if(y == 3){
        return 2
    }else{
        return 0
    }
}

const diagonal_principal = () => {
    let x = 0, y = 0
    for(let i = 0; i < draw.length; i++){
        if(draw[i][i] == "X"){
            x++
            if(x == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${j}']`);
                    botao.classList.add('btn-green')
                }
            }
        }else if(draw[i][i] == "O"){
            y++
            if(y == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${j}']`);
                    botao.classList.add('btn-red')
                }
            }
        }
    }

    if(x == 3){
        return 1
    }else if(y == 3){
        return 2
    }else{
        return 0
    }
}

const diagonal_sec = () => {
    let x = 0, y = 0

    for(let i = 0; i < draw.length; i++){
        if(draw[i][draw.length - i - 1] == "X"){
            x++
            if(x == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${3 - j - 1}']`);
                    botao.classList.add('btn-green')
                }
            }
        }else if(draw[i][draw.length - i - 1] == "O"){
            y++
            if(y == 3){
                for(let j = 0; j < 3; j++){
                    let botao = document.querySelector(`button[data-row='${j}'][data-col='${3 - j - 1}']`);
                    botao.classList.add('btn-red')
                }
            }
        }
    }

    if(x == 3){
        return 1
    }else if(y == 3){
        return 2
    }else{
        return 0
    }
}

const verify_winner = () => {

    for(let i = 0; i < draw.length; i++){
        if(horizontal(i) == 1){
            return "Jogador Venceu"
        }else if(horizontal(i) == 2){
            return "CPU Venceu"
        }else if(vertical(i) == 1){
            return "Jogador Venceu"
        }else if(vertical(i) == 2){
            return "CPU Venceu"
        }
    }

    if(diagonal_principal() == 1){
        return "Jogador Venceu"
    }else if(diagonal_principal() == 2){
        return "CPU Venceu"
    }else if(diagonal_sec() == 1){
        return "Jogador Venceu"
    }else if(diagonal_sec() == 2){
        return "CPU Venceu"
    }

    return 0
}

const velha = () => {
    let zero = 0

    for(let i = 0; i < draw.length;i++){
        for(let j = 0; j < draw.length;j++){
            if(draw[i][j] == 0){
                zero++
            }
        }
    }

    if(zero == 0 && verify_winner() == 0){
        return "Velha"
    }else{
        return 0
    }
}

const verif_vertical = (coluna) => {
    let count = 0, zero = 0

    for (let i = 0; i < draw.length; i++){
        if(draw[i][coluna] == "X"){
            count++
        }else if(draw[i][coluna] == 0){
            zero++
        }
    }

    if (count == 2 && zero != 0){
        return 1
    }else{
        return 0
    }
}

const verif_horizontal = (linha) => {
    let count = 0, zero = 0

    for (let i = 0; i < draw.length; i++){
        if(draw[linha][i] == "X"){
            count++
        }else if(draw[linha][i] == 0){
            zero++
        }
    }

    if (count == 2 && zero != 0){
        return 1
    }else{
        return 0
    }
}

const verif_diagonalprincipal = () => {
    let count = 0, zero = 0

    for (let i = 0; i < draw.length; i++){
        if(draw[i][i] == "X"){
            count++
        }else if(draw[i][i] == 0){
            zero++
        }
    }

    if (count == 2 && zero != 0){
        return 1
    }else{
        return 0
    }
}

const verifi_func_diagonalsec = () =>{
    let count = 0, zero = 0

    for(let i = 0; i < draw.length; i++){
        if(draw[i][draw.length - i - 1] == "X"){
            count++
        }else if(draw[i][draw.length - i - 1] == 0){
            zero++
        }
    }

    if(count == 2 && zero != 0){
        return 1
    }else{
        return 0
    }
}

const func_horizontal = linha => {
    let count = 0
    let x = -1

    for (let i = 0; i < draw.length; i++){
        if(draw[linha][i] == "X"){
            count++
        }else if(draw[linha][i] == 0){
            x = i
        }
    }

    if(x != -1){
        draw[linha][x] = "O"
        let botao = document.querySelector(`button[data-row='${linha}'][data-col='${x}']`);
        botao.innerHTML = "O"
        return 1
    }else{
        return 0
    }
}

const func_vertical = coluna =>{
    let count = 0
    let x = -1

    for (let i = 0; i < draw.length; i++){
        if(draw[i][coluna] == "X"){
            count++
        }else if(draw[i][coluna] == 0){
            x = i
        }
    }

    if(x != -1){
        draw[x][coluna] = "O"
        let botao = document.querySelector(`button[data-row='${x}'][data-col='${coluna}']`);
        botao.innerHTML = "O"
        return 1
    }else{
        return 0
    }
}

const func_diagonalprinc = () =>{
    let count = 0
    let x = -1

    for(let i = 0; i < draw.length; i++){
        if(draw[i][i] == "X"){
            count++
        }else if(draw[i][i] == 0){
            x = i
        }
    }

    if(x != -1){
        draw[x][x] = "O"
        let botao = document.querySelector(`button[data-row='${x}'][data-col='${x}']`);
        botao.innerHTML = "O"
        return 1
    }else{
        return 0
    }
}

const func_diagonalsec = () =>{
    let x = -1, y = -1, count = 0

    for(let i = 0; i < draw.length; i++){
        if(draw[i][draw.length - i - 1] == "X"){
            count++
        }else if(draw[i][draw.length - i - 1] == 0){
            x = i
            y = draw.length - i - 1
        }
    }

    if(x != -1){
        draw[x][y] = "O"
        let botao = document.querySelector(`button[data-row='${x}'][data-col='${y}']`);
        botao.innerHTML = "O"
        return 1
    }else{
        return 0
    }
}

const verify_others_horizo = (linha) => {
    let count = 0, zero = 0, x = 0, y = 0

    for(let i  = 0; i < draw.length; i++){
        for(let j = 0; j < draw.length; j++){
            if(i != linha){
                if(draw[i][j] == "X"){
                    count++
                }else if(draw[i][j] == 0){
                    zero++
                    x = i
                    y = j
                }

                if(count == 2 && zero != 0){
                    draw[x][y] = "O"
                    let botao = document.querySelector(`button[data-row='${x}'][data-col='${y}']`);
                    botao.innerHTML = "O"
                    return 1
                }
            }
        }
        zero = 0
    }
    return 0
}

const verify_others_verti = (coluna) => {
    let count = 0, zero = 0, x = 0, y = 0

    for(let i  = 0; i < draw.length; i++){
        for(let j = 0; j < draw.length; j++){
            if(i != coluna){
                if(draw[j][i] == "X"){
                    count++
                }else if(draw[j][i] == 0){
                    zero++
                    x = i
                    y = j
                }

                if(count == 2 && zero != 0){
                    draw[y][x] = "O"
                    let botao = document.querySelector(`button[data-row='${y}'][data-col='${x}']`);
                    botao.innerHTML = "O"
                    return 1
                }
            }
        }
    }
    return 0
}

const IA_Draw_Hard = (a,b) => {
    let aux = 0
    let z = -1

    if(a != 1 && b != 1){
        if(verify_empty()){
            draw[1][1] = "O"
            let botao = document.querySelector(`button[data-row='${1}'][data-col='${1}']`);
            botao.innerHTML = "O"
            return
        }
    }

    if(a == 1 && b == 1){
        if(verify_empty()){
            if(draw[0][0] == 0){
                draw[0][0] = "O"
                let botao = document.querySelector(`button[data-row='${0}'][data-col='${0}']`);
                botao.innerHTML = "O"
                return
            }else if(draw[0][2] == 0){
                draw[0][2] = "O"
                let botao = document.querySelector(`button[data-row='${0}'][data-col='${2}']`);
                botao.innerHTML = "O"
                return
            }else if(draw[2][0] == 0){
                draw[2][0] = "O"
                let botao = document.querySelector(`button[data-row='${2}'][data-col='${0}']`);
                botao.innerHTML = "O"
                return
            }else if(draw[2][2] == 0){
                draw[2][2] = "O"
                let botao = document.querySelector(`button[data-row='${2}'][data-col='${2}']`);
                botao.innerHTML = "O"
                return
            }
        }
    }

    //FUNÇÕES DE ATAQUE DA IA
    if(atack_horizontal()){
        return
    }else if(atack_vertical()){
        return
    }else if(atack_diagonal_princip()){
        return
    }else if(atack_diagonal_sec()){
        return
    }

    //VERIFICO SE NA LINHA OU COLUNA ESPECIFICA HÁ DOIS X
    if(verif_horizontal(a)){
        z = func_horizontal(a)
        return
    }else if(verif_vertical(b)){
        z = func_vertical(b)
        return
    }else if(verif_diagonalprincipal()){
        z = func_diagonalprinc()
        return
    }else if(verifi_func_diagonalsec()){
        z = func_diagonalsec()
        return
    }

    //AGORA, VERIFICO SE EXISTE OUTRAS HORIZONTAIS OU VERTICAIS COM 2 X
    if(verify_others_horizo(a)){
        return
    } else if(verify_others_verti(b)){
        return
    }

    if(verify_specific_case()){
        return
    }

    if(a == b == 0 || a == b == 2){
        aux++
        if(func_horizontal(a)){
            aux++
            return
        } else if(func_vertical(b)){
            aux++
            return
        } else if(func_diagonalprinc()){
            aux++
            return
        }
    }

    if((a == 0 && b == 2) || (a == 2 && b == 0)){
        if(func_horizontal(a)){
            aux++
            return
        } else if(func_vertical(b)){
            aux++
            return
        } else if(func_diagonalsec()){
            aux++
            return
        }
    }

    if(a == b == 1) {
        if(func_horizontal(a)){
            aux++
            return
        } else if(func_vertical(b)){
            aux++
            return
        } else if(func_diagonalsec()){
            aux++
            return
        } else if (func_diagonalprinc()){
            aux++
            return
        }
    }

    if(func_horizontal(a)){
        aux++
        return
    } else if(func_vertical(b)){
        aux++
        return
    }
}

const reload = () => {
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3;j++){
            draw[i][j] = 0
            let botao = document.querySelector(`button[data-row='${i}'][data-col='${j}']`);
            botao.innerHTML = ""
            botao.classList.remove('btn-green')
            botao.classList.remove('btn-red')
        }
    }
    let msg =document.querySelector('.message')
    msg.remove()
}

let but_jogo = document.querySelectorAll('.btn')

but_jogo.forEach((button) =>{
    button.addEventListener('click', (e) => {
        let numero_linha = parseInt(e.target.dataset.row)
        let numero_coluna = parseInt(e.target.dataset.col)
        let x = 0

        if(draw[numero_linha][numero_coluna] == 0){
            draw[numero_linha][numero_coluna] = "X"
            e.target.textContent = "X"
            x = 1
        }else{
            console.log("Já existe um símbolo neste lugar")
        }

        if(verify_winner() == 0 || velha() == 0){
            if(x == 1){
                IA_Draw_Hard(numero_linha,numero_coluna)
            }else{
                return
            }
        }

        if(verify_winner() != 0){
            console.log(verify_winner())
            let mensagem = document.createElement("div")
            mensagem.classList.add("message")
            let bod = document.body
            mensagem.innerHTML = verify_winner()
            bod.appendChild(mensagem)

            setTimeout(function(){
                mensagem.innerHTML = ""
                reload()
            },3000)
            return
        }
        
        if(velha() != 0){
            console.log(velha())
            let mensagem = document.createElement("div")
            mensagem.classList.add("message")
            let bod = document.body
            mensagem.innerHTML = velha()
            bod.appendChild(mensagem)

            setTimeout(function(){
                mensagem.innerHTML = ""
                reload()
            },3000)

            return
        }
    })
})
