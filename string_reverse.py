word = input("Digite a palavra desejada: ")
reverse = []
length = len(word)

for i in range(length - 1, -1, -1): #contando regressivamente a palavra do usuário
    reverse.append(word[i])#e preenchendo o array reverse com as letras regressivamente

print(reverse)
