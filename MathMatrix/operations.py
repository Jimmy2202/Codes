from matrix_file import *

class Operacoes:

    def build_matrix(self, row,col,matriz):
        for i in range(row):
            for j in range(col):
                matriz[i][j] = int(input(f'Elemento[{i+1}][{j+1}]: '))

    def Add(self):
        print("         ***   EM UMA SOMA DE MATRIZES, AS DUAS MATRIZES DEVEM SER DE MESMA ORDEM, OU SEJA, SE VOCÊ ESCOLHEU UMA MATRIZ 2X2, DEVE SOMÁ-LA COM OUTRA 2X2      ***\n")
        mat_row1 = int(input("Digite o número de linhas da Matriz 1: "))
        mat_col1 = int(input("Digite o número de colunas da Matriz 1: "))
        print("\n")
        for i in range(mat_row1):
            Matriz.matriz1.append([0] * mat_col1)

        Operacoes.build_matrix(Operacoes,mat_row1,mat_col1,Matriz.matriz1)
        print("\nMatriz 1: ")
        Matriz.print_matriz(Matriz,mat_row1,mat_col1,Matriz.matriz1)

        while True:

            mat_row2 = int(input("Digite o número de linhas da Matriz 2: "))
            mat_col2 = int(input("Digite o número de colunas da Matriz 2: "))
            print("\n")

            if mat_row2 != mat_row1 or mat_col2 != mat_col1:
                print("                                      *** ATENÇÃO: AS MATRIZES DEVEM TER O MESMO NÚMERO DE LINHAS E COLUNAS   ***\n")

            if mat_row2 == mat_row1 and mat_col2 == mat_col1:
                break


        for i in range(mat_row2):
            Matriz.matriz2.append([0] * mat_col2)

        Operacoes.build_matrix(Operacoes,mat_row2,mat_col2,Matriz.matriz2)
        print("\nMatriz 2: ")
        Matriz.print_matriz(Matriz, mat_row2,mat_col2,Matriz.matriz2)

        for i in range(mat_row2):
            Matriz.matriz3.append([0] * mat_col2)

        for i in range(mat_row1):
            for j in range(mat_col1):
                print(" ---------------------------------------------------------------------------------------------------------- ")
                print(f'               SOMA - SE O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 1 COM O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 2')
                print(f'               OU SEJA, SOMAMOS MATRIZ1[{i+1}][{j+1}] = {Matriz.matriz1[i][j]} COM MATRIZ2[{i+1}][{j+1}] = {Matriz.matriz2[i][j]}')
                print(f'               O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 3 = MATRIZ1[{i+1}][{j+1}] + MATRIZ2[{i+1}][{j+1}] = {Matriz.matriz1[i][j]} + {Matriz.matriz2[i][j]} = {Matriz.matriz1[i][j] + Matriz.matriz2[i][j]}\n')
                print(" ---------------------------------------------------------------------------------------------------------- ")
                Matriz.matriz3[i][j] = Matriz.matriz1[i][j] + Matriz.matriz2[i][j]

        print(" MATRIZ SOMADA ")
        Matriz.print_matriz(Matriz, mat_row2, mat_col2, Matriz.matriz3)

        Matriz.matriz3.clear()
        Matriz.matriz2.clear()
        Matriz.matriz1.clear()

    def Sub(self):
        print("***          EM UMA SUBTRAÇÃO DE MATRIZES, AS DUAS MATRIZES DEVEM SER DE MESMA ORDEM, OU SEJA, SE VOCÊ ESCOLHEU UMA MATRIZ 2X2, DEVE SOMÁ-LA COM OUTRA 2X2      ***")
        mat_row1 = int(input("Digite o número de linhas da Matriz 1: "))
        mat_col1 = int(input("Digite o número de colunas da Matriz 1: "))
        print("\n")
        for i in range(mat_row1):
            Matriz.matriz1.append([0] * mat_col1)

        Operacoes.build_matrix(Operacoes,mat_row1,mat_col1,Matriz.matriz1)
        print("\nMatriz 1: ")
        Matriz.print_matriz(Matriz, mat_row1, mat_col1, Matriz.matriz1)

        while True:

            mat_row2 = int(input("Digite o número de linhas da Matriz 2: "))
            mat_col2 = int(input("Digite o número de colunas da Matriz 2: "))
            print("\n")

            if mat_row2 != mat_row1 or mat_col2 != mat_col1:
                print("                                      *** ATENÇÃO: AS MATRIZES DEVEM TER O MESMO NÚMERO DE LINHAS E COLUNAS   ***\n")

            if mat_row2 == mat_row1 and mat_col2 == mat_col1:
                break


        for i in range(mat_row2):
            Matriz.matriz2.append([0] * mat_col2)

        Operacoes.build_matrix(Operacoes,mat_row2,mat_col2,Matriz.matriz2)
        print("\nMatriz 2: ")
        Matriz.print_matriz(Matriz, mat_row2,mat_col2,Matriz.matriz2)

        for i in range(mat_row2):
            Matriz.matriz3.append([0] * mat_col2)

        for i in range(mat_row1):
            for j in range(mat_col1):
                print(" ---------------------------------------------------------------------------------------------------------- ")
                print(f'               SUBTRAI - SE O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 1 COM O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 2')
                print(f'               OU SEJA, SUBTRAIMOS MATRIZ1[{i+1}][{j+1}] = {Matriz.matriz1[i][j]} COM MATRIZ2[{i+1}][{j+1}] = {Matriz.matriz2[i][j]}')
                print(f'               O ELEMENTO [{i+1}][{j+1}] DA MATRIZ 3 = MATRIZ1[{i+1}][{j+1}] - MATRIZ2[{i+1}][{j+1}] = {Matriz.matriz1[i][j]} - {Matriz.matriz2[i][j]} = {Matriz.matriz1[i][j] - Matriz.matriz2[i][j]}\n')
                print(" ---------------------------------------------------------------------------------------------------------- ")
                Matriz.matriz3[i][j] = Matriz.matriz1[i][j] - Matriz.matriz2[i][j]

        print(" MATRIZ DEPOIS DA SUBTRAÇÃO ")
        Matriz.print_matriz(Matriz, mat_row2, mat_col2, Matriz.matriz3)

        Matriz.matriz3.clear()
        Matriz.matriz2.clear()
        Matriz.matriz1.clear()

    def Mult(self):

        global aux
        aux = 0

        print( "          ***   EM UMA MULTIPLICAÇÃO DE MATRIZES, O NUMERO DE COLUNAS DA PRIMEIRA TEM QUE SER IGUAL AO NUMERO DE LINHAS DA SEGUNDA   ***")
        mat_row1 = int(input("Digite o número de linhas da Matriz 1: "))
        mat_col1 = int(input("Digite o número de colunas da Matriz 1: "))
        print("\n")
        for i in range(mat_row1):
            Matriz.matriz1.append([0] * mat_col1)

        Operacoes.build_matrix(Operacoes, mat_row1, mat_col1, Matriz.matriz1)
        print("\nMatriz 1: ")
        Matriz.print_matriz(Matriz, mat_row1, mat_col1, Matriz.matriz1)

        while True:

            mat_row2 = int(input("Digite o número de linhas da Matriz 2: "))
            mat_col2 = int(input("Digite o número de colunas da Matriz 2: "))
            print("\n")

            if mat_col1 != mat_row2:
                print("                           *** ATENÇÃO: O NUMERO DE COLUNAS DA PRIMEIRA TEM QUE SER IGUAL AO NUMERO DE LINHAS DA SEGUNDA MATRIZ   ***\n")

            if mat_col1 == mat_row2:
                break

        for i in range(mat_row2):
            Matriz.matriz2.append([0] * mat_col2)

        Operacoes.build_matrix(Operacoes, mat_row2, mat_col2, Matriz.matriz2)
        print("\nMatriz 2: ")
        Matriz.print_matriz(Matriz, mat_row2, mat_col2, Matriz.matriz2)

        for i in range(mat_row1):
            Matriz.matriz3.append([0] * mat_col2)

        for i in range(mat_row1):
            for j in range(mat_col2):
                print(f'O elemento [{i}][{j}] da Matriz de resultado será:')
                for x in range(mat_row2):
                    print(f'Matriz1[{i}][{x}] x Matriz2[{x}][{j}] = {Matriz.matriz1[i][x] * Matriz.matriz2[x][j]} +')
                    aux = aux + Matriz.matriz1[i][x] * Matriz.matriz2[x][j]
                print(f' = {aux}\n')
                Matriz.matriz3[i][j] = aux
                aux = 0

        Matriz.print_matriz(Matriz, mat_row1, mat_col2, Matriz.matriz3)

        Matriz.matriz3.clear()
        Matriz.matriz2.clear()
        Matriz.matriz1.clear()

    def Diag(self):
        print("                         ***      A DIAGONAL PRINCIPAL DE UMA MATRIZ É COLEÇÃO DE ENTRADAS I,J ONDE I = J       ***\n")
        while True:

            mat_row1 = int(input("Digite o número de linhas da Matriz : "))
            mat_col1 = int(input("Digite o número de colunas da Matriz : "))

            if mat_col1 != mat_row1:
                print( "\n                                      *** ATENÇÃO: O NUMERO DE COLUNAS E LINHAS DA MATRIZ DEVEM SER IGUAIS   ***\n")

            if mat_col1 == mat_row1:
                break

        print("\n")

        for i in range(mat_row1):
            Matriz.matriz1.append([0] * mat_col1)

        Operacoes.build_matrix(Operacoes, mat_row1, mat_col1, Matriz.matriz1)
        print("\nMatriz: ")
        Matriz.print_matriz(Matriz, mat_row1, mat_col1, Matriz.matriz1)

        for i in range(mat_row1):
            for j in range(mat_col1):
                if i == j:
                    print(f'O elemento [{i}][{j}] possui i = j e seu valor é [{Matriz.matriz1[i][j]}]')

        print("DIAGONAL PRINCIPAL\n----------------------------------------------------------------------------- ")
        for i in range(mat_row1):
            for j in range(mat_col1):
                if i == j:
                    print(f'[{Matriz.matriz1[i][j]}]')
        print("----------------------------------------------------------------------------------------")

        Matriz.matriz3.clear()
        Matriz.matriz2.clear()
        Matriz.matriz1.clear()

    def Transp(self):
        print("               *** A TRANSPOSTA DE UMA MATRIZ É UMA CÓPIA DA MATRIZ ORIGINAL ONDE LINHA VIRA COLUNA E COLUNA VIRA LINHA ***\n")
        mat_row1 = int(input("Digite o número de linhas da Matriz : "))
        mat_col1 = int(input("Digite o número de colunas da Matriz : "))
        print("\n")
        for i in range(mat_row1):
            Matriz.matriz1.append([0] * mat_col1)

        Operacoes.build_matrix(Operacoes, mat_row1, mat_col1, Matriz.matriz1)
        print("\nMatriz: ")
        Matriz.print_matriz(Matriz, mat_row1, mat_col1, Matriz.matriz1)

        Matriz.matriz3 = list(map(list, zip(*Matriz.matriz1)))

        print("                          *** Note que o que era linha virou coluna e o que era coluna virou linha ***\n")
        print("Matriz Transposta: ")
        Matriz.print_matriz(Matriz, mat_col1, mat_row1, Matriz.matriz3)

        Matriz.matriz3.clear()
        Matriz.matriz2.clear()
        Matriz.matriz1.clear()