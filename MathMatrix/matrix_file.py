
class Matriz:

    def __init__(self, n_linhas, n_colunas):
        self.n_linhas = n_linhas
        self.n_colunas = n_colunas

    def setLinhas(self, n_linhas):
        self.n_linhas = n_linhas

    def setColunas(self, n_colunas):
        self.n_colunas = n_colunas

    def getLinhas(self, n_linhas):
        return self.n_linhas

    def getColunas(self, n_colunas):
        return self.n_colunas

    def print_matriz(self, n_linhas, n_colunas, matriz):
        print("\n")
        for i in matriz:
            print(' '.join(map(str, i)))
        print("\n\n")


    matriz1 = []
    matriz2 = []
    matriz3 = []