
def calc_fib(numero,index): 
    if numero == fibonacci[index]:#verifica se o numero do usuário é igual ao número atualmente gerado
        print("Faz parte da sequência de Fibonacci")
        return 1
    elif numero < fibonacci[index]:#se o número atualmente gerado é maior que o número do usuário,
                                   #significa que não existe mais possibilidade de o número do usuário estar na sequência
        print("Não faz parte da sequência de Fibonacci")
        return 0
    else:   #se o número gerado for menor que o número do usuário, significa que a sequência ainda não chegou nele, logo teremos que
            #continuar gerando os números da sequência de fibonacci e refazer todas as verificações anteriores 
        if fibonacci[index] == 0:
            fibonacci.append(1)
            index = index + 1
            calc_fib(numero,index)
        else:
            fibonacci.append(fibonacci[index] + fibonacci[index - 1])
            index = index + 1
            calc_fib(numero,index)
            #a recursividade é usada exatamente para refazer as verificações logo após a inserção de um número na sequência

def main():
    numero = int(input("Digite o número: "))
    global fibonacci
    fibonacci = [0]
    global index
    index  = 0
    calc_fib(numero,index)

main()
