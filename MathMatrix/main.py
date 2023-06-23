# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

from database import *
from operations import *
menu = 0

def Login():
    print("                                                               || LOGIN ||")
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    user = input("Usuário: ")
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    password = input("Senha: ")
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")

    global res
    res = 0
    users2 = DataBase()
    users2.conecta()
    autenticado = users2.check_user(user.upper(), password)

    if autenticado.lower() == "sem acesso":
        print("                                                             *** VOCE NÃO POSSUI CADASTRO ***\n\n")
        Cadastro()
    elif autenticado.lower() == "ok":
        res = 1
        print("                                                             *** LOGIN EFETUADO COM SUCESSO ***\n\n")
        print("\n" * 130)
        return res
    elif autenticado.lower() == "senha invalida":
        print("                                                             *** SENHA INCORRETA ***\n\n")
        Login()

    print("\n" * 130)
    return res

def Menu():
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    print("                                                             ++++ MATRIXMATH ++++")
    print("                                                                 || MENU ||")
    print("                                             Tecle o número correspondente a operação que deseja")
    print("1 - ADIÇÃO\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIAGONAL PRINCIPAL\n5 - MATRIZ TRANSPOSTA\n6 - SAIR")
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    menu = input("Tecle: ")
    print("\n" * 130)

    return menu

def Cadastro():
    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    print("                                                                 || CADASTRO ||        ")
    name = input("Nome: ")
    user = input("Usuário: ")
    password = input("Senha: ")
    while (input("Confirmar senha: ") != password):
        print("**   SENHAS DIFERENTES TENTE DE NOVO   **")

    print("--------------------------------------------------------------------------------------------------------------------------------------------------")
    db = DataBase()
    db.conecta()
    db.insert_user(name, user, password)
    db.close_connection()

    print("\n" * 130)
    Login()

def main():
    global menu
    menu = 0
    resposta = Login()
    if resposta == 1:
        menu = Menu()

    while menu != 0:
        if menu == '1':
            Operacoes.Add(Operacoes)
            menu = Menu()
        elif menu == '2':
            Operacoes.Sub(Operacoes)
            menu = Menu()
        elif menu == '3':
            Operacoes.Mult(Operacoes)
            menu = Menu()
        elif menu == '4':
            Operacoes.Diag(Operacoes)
            menu = Menu()
        elif menu == '5':
            Operacoes.Transp(Operacoes)
            menu = Menu()
        else:
            return

main()