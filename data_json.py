import json

with open("dados.json",encoding='utf-8') as data_json:
    dic = json.load(data_json)

index = 0
maior = 0.0
menor = 0.0
soma = 0.0
num_dias = 0
total = 0

for i in dic:
    if index == 0:#inicializo o primeiro termo como menor
        menor = i['valor'] 
    
    if i['valor'] < menor and i['valor'] != 0.0: #se eventualmente achar um valor menor do que a variável menor, esse será o novo menor
        menor = i['valor']

    index = index + 1 

print(f'Menor: {menor}')

for i in dic:
    if index == 0: #inicializo o primeiro termo como maior
        maior = i['valor'] 
    
    if i['valor'] > maior: #se eventualmente achar um maior valor do que a variável maior, esse será o novo maior
        maior = i['valor']

    index = index + 1

print(f'Maior: {maior}')

for i in dic:
    if i['valor'] != 0.0:
        soma = soma + i['valor'] #soma todos os valores que não tenha faturamento 0.0
        num_dias = num_dias + 1 #conta a quantidade de dias que não tem faturamento 0.0

media = soma/num_dias #se calcula a média

for i in dic:
    if i['valor'] > media: #encontra quantos dias tem o faturamento maior que a média
        total = total + 1

print(f'Nº de dias em que o valor de faturamento diário foi superior à média mensal : {total} dias')