from decimal import *
import json

#Quis fazer em um formato JSON pra ficar mais organizado
fat_estados ="""[
    {
		"estado": "SP",
		"valor": 67836.43
	},
    {
		"estado": "RJ",
		"valor": 36678.66
	},
    {
		"estado": "MG",
		"valor": 29229.88
	},
    {
		"estado": "ES",
		"valor": 27165.48
	},
    {
		"estado": "Outros",
		"valor": 19849.53
	}]
    """

dic = json.loads(fat_estados)

total = 0.0
porc = 0.0

for i in dic:
    total = total + i['valor']

for i in dic:
    getcontext().prec = 4 #escolhi uma precisão de 2 casas decimais
    porc = Decimal(i['valor']*100)/Decimal(total) #fórmula básica de toda porcentagem
    estado = i['estado']
    print(f'O estado {estado} tem aproximadamente {porc} % do total de {total}')

