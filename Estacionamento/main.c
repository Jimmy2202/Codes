#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <conio.h>
#include <windows.h>
#include "estacionamento.h"
int veru = 0,npi,ncar,nru,u,verificacaomaior;

int menu();
int estacionamento_cheio(Pilha* pi);
void printarpirec(Pilha* pi,int maior,int menor,float temp);
Pilha* criar_estacionamento(Pilha *pi);

int main()
{
    int men;
    Pilha *pi = (Pilha*)malloc(sizeof(Pilha));
    puts("                      ______________________________________________________________________");
    puts("                                    SEJA BEM VINDO AO ESTACIONAMENTO");
    puts("                      ______________________________________________________________________\n\n");

    setlocale(LC_ALL, "Portuguese");

    for(;;)
    {
        men = menu();
        switch(men)
        {
        case 1:
            pi = criar_estacionamento(pi);
            veru++;
            break;
        case 2:
            if(veru == 0)
            {
                puts("                                           Estacionamento n�o feito ainda\n\n");
                break;
            }
            printarpi(pi,1);
            break;
        case 3:
            pi = inserir(pi);
            break;
        case 4:
            pi = remover(pi,0,veru);
            if(pi == NULL)
                puts("NULL");

            break;
        case 5:
            pi = remover(pi,1,veru);
            if(pi == NULL)
                puts("NULL");

            break;
        case 6:
            puts("Obrigado por utilizar o programa");
            exit(0);
        }
    }
}

int menu()
{
    int b;
    do
    {
        puts("-----------------------------------------------------|| M E N U ||----------------------------------------------------\n");
        if(veru == 0)
        {
            puts("1- Configurar estacionamento\n");
        }
        puts("2- Mostrar a situa��o corrente do estacionamento\n");
        puts("3- Inserir um carro\n");
        puts("4- Retirar um dado carro\n");
        puts("5- Sequ�ncia de retirada\n");
        puts("6- Sair do programa\n");
        puts("-----------------------------------------------------|| M E N U ||----------------------------------------------------\n");
        scanf("%i",&b);
        printf("\n");
    }
    while(b<=0 || b>6);

    return b;
}

Pilha* criar_estacionamento(Pilha *pi)//cria um estacionamento din�micamente
{
    if(veru == 1)
    {
        puts("                                               Estacionamento j� feito\n\n\n");
        return pi;
    }

    puts("Digite o n�mero de fileiras de carros que deseja:");
    scanf("%i",&npi);
    fflush(stdin);

    pi =(Pilha*) malloc(npi*sizeof(Pilha));
    puts("Digite o n�mero de carros que deseja em cada fileira:");
    scanf("%i",&ncar);
    fflush(stdin);

    puts("Digite o n�mero de carros que deseja na rua:");
    scanf("%i",&nru);
    fflush(stdin);

    atribuicao(npi,ncar,nru,u);

    ru.elementos = 0;
    ru.carr = (Carro*)malloc(nru*sizeof(Carro));

    for(int i=0; i<nru; i++)
    {
        strcpy(ru.carr[i].placa,"0");
    }

    for(int i=0; i<npi; i++)
    {
        pi[i] = inicia(pi[i]);
        pi[i].elementos = 0;

        for(int j=0; j<ncar; j++)
        {
            strcpy(pi[i].car[j].placa,"0");
            pi[i].car[j].tempo = 0.0;
        }
    }

    printf("\n");
    return pi;
}

Pilha* inserir(Pilha* pi)
/* A heuristica segue a seguinte ideia: o programa ir� recomendar em primeiro lugar uma fileira que est� vazia
Se n�o houver nenhuma vazia, vai achar a menor pilha para evitar congestionamento de carros
Se houverem mais de uma pilha com o menor tamanho, o programa ir� recomendar a pilha que tenha menos carros com um menor
tempo de retirada que o carro que o usu�rio ir� inserir, ou seja, quanto menos carros com tempo de retirada menor que
o tempo do carro que o usu�rio ir� introduzir, menos movimentos. Por fim, o crit�rio de desempate caso existirem o mesmo
n�mero de carros com menor tempo que o carro do usu�rio, � achar o �ltimo carro com maior tempo das fileiras com menos quantidades
e com a menor quantidade de carros com tempo menor do que o do carro do usu�rio */
{
    int ver2 = 0;
    int ver3;
    float temp;
    int menor,dif,maior,num,soma=0;
    char placa[15];
    int x = 0;
    ver3 = 0;
    u = 0;

    if(veru == 0)
    {
        puts("                                       Estacionamento n�o feito ainda");
        return pi;
    }

    if(estacionamento_cheio(pi) == 1)
    {
        puts("                                      Estacionamento cheio, imposs�vel adicionar mais carros");
        return pi;
    }

    menor = pi[0].elementos;

    for(int i=0; i< npi-1 ; i++)
    {

        if(pi[i+1].elementos < pi[i].elementos)
            menor = pi[i+1].elementos;
        else if(pi[i+1].elementos == pi[i].elementos)
            ver2++;
    }

    if(pi[npi-1].elementos < pi[0].elementos)
    {
        menor = pi[npi-1].elementos;
    }

    if(ver2 == npi-1)
    {
        menor = pi[0].elementos;//Acha a pilha de menor quantidade de carros
    }

    for(int i=0; i<npi; i++)
    {
        if(pi[i].elementos == menor)//verifica seexistem mais de uma pilha com a menor quantidade
        {
            ver3++;
        }
    }

    if(ver3 >1)
    {
        u = 1;
    }

    atribuicao(npi,ncar,nru,u);

    puts("Digite a previs�o de retirada do carro");
    scanf("%f",&temp);
    fflush(stdin);

    puts("Digite a placa do carro:");
    gets(placa);
    fflush(stdin);

    for(int i=0; i<npi; i++)
    {
        for(int j=0; j<ncar; j++)
        {
            if(strcmp(pi[i].car[j].placa,placa) == 0)
            {
                puts("\n\n                                  ||Carro j� existe no estacionamento||\n\n");
                return pi;
            }
        }
    }

    if(temp == (int)temp)
    {
        temp = temp * 1.00;
    }

    for(int i=0; i<npi; i++)
    {
        for(int j=0; j<pi[i].elementos; j++)
        {

            dif = peso(pi[i].car[j].tempo,temp);
            soma = soma + dif;
        }
        pi[i].peso = soma;
        soma = 0;
        x++;
    }

    for(int i=0; i<npi; i++)
    {
        if(pi[i].elementos == menor)
        {
            maior = pi[i].peso;
            break;
        }
    }

    for(int i=0; i<npi; i++)
    {
        if(pi[i].elementos == menor)
        {
            if(pi[i].peso > maior)
                maior = pi[i].peso;
        }
    }

    int contmaior = 0;

    for(int i=0; i<npi; i++)
    {
        if(pi[i].peso == maior)
            contmaior++;
    }

    verificacaomaior = 0;
    if(contmaior > 1)
        verificacaomaior = 1;

    puts(" \n\nPodem ser recomendados mais de uma posi��o do estacionamento. Caso isso aconte�a, voc� deve escolher apenas uma delas.\n");
    printarpirec(pi,maior,menor,temp);

    puts("Aceita a recomenda��o?\n1-Sim\n2-N�o");
    scanf("%i",&num);
    fflush(stdin);

    if(num == 1)
    {
        do
        {
            printarpirec(pi,maior,menor,temp);
            puts("Digite uma das filas recomendadas caso forem recomendadas mais de uma:");
            scanf("%i",&num);
            fflush(stdin);
            if(pi[num - 1].recomendado != 1)
                puts("A fila escolhida n�o � recomendada");
        }
        while(pi[num - 1].recomendado != 1);

        if(pi[num-1].elementos == ncar)
        {
            puts("                                             Fila cheia");
            return pi;
        }

        strcpy(pi[num-1].car[pi[num-1].elementos].placa,placa);
        pi[num-1].car[pi[num-1].elementos].tempo = temp;
        pi[num-1].elementos++;
    }
    else
    {
        do
        {
            printarpi(pi,0);
            puts("Digite a fila que deseja");
            scanf("%i",&num);
            fflush(stdin);
        }
        while(num<=0 || num>npi);

        if(pi[num-1].elementos == ncar)
        {
            puts("                                                  Fila cheia");
            return pi;
        }

        for(int i=0; i<npi; i++)
        {
            for(int j=0; j<ncar; j++)
            {
                if(strcmp(pi[i].car[j].placa,placa) == 0)
                {
                    puts("                                        Carro j� existe no estacionamento");
                    return pi;
                }
            }
        }
        strcpy(pi[num-1].car[pi[num-1].elementos].placa,placa);
        pi[num-1].car[pi[num-1].elementos].tempo = temp;
        pi[num-1].elementos++;
    }

    for(int i=0; i<npi; i++)
    {
        pi[i].peso = 0;
    }

    puts("\n\n\n\n                                            || Carro adicionado com Sucesso ||\n\n\n");

    for(int i=0; i<npi; i++)
    {
        pi[i].recomendado = 0;
    }
    return pi;
}

void printarpirec(Pilha* pi,int maior,int menor,float temp)
{
    float mai;
    int ext;
    for(int k=0; k<npi; k++)
    {
        if(pi[k].peso == maior)
        {
            mai = pi[k].car[pi[k].elementos - 1].tempo;
            break;
        }
    }

    for(int k=0; k<npi; k++)
    {
        if(pi[k].peso == maior)
        {
            if(pi[k].car[pi[k].elementos - 1].tempo > mai)
            {
                mai = pi[k].car[pi[k].elementos - 1].tempo;
            }
        }
    }

    ext = 0;

    for(int i=0; i<npi; i++)
    {
        printf("------------------------------------------    (%i)\n",i+1);
        for(int j=0; j< ncar; j++)
        {
            if(pi[i].elementos == 0)
            {
                ext = 1;
                if(j == pi[i].elementos)
                {
                    pi[i].recomendado = 1;
                    printf("Recomendado |");
                    continue;
                }
            }

            if(pi[i].elementos == menor && pi[i].elementos != 0 && ext == 0)
            {
                if(u != 1)
                {
                    if(j == pi[i].elementos)
                    {
                        pi[i].recomendado = 1;
                        printf("Recomendado |");
                        continue;
                    }
                }
                else
                {
                    if(pi[i].peso == maior && verificacaomaior == 0)
                    {
                        if(j == pi[i].elementos)
                        {
                            pi[i].recomendado = 1;
                            printf("Recomendado |");
                            continue;
                        }

                    }
                    else if(pi[i].peso == maior && verificacaomaior == 1)
                    {
                        if(pi[i].car[pi[i].elementos - 1].tempo == mai)
                        {
                            if(j == pi[i].elementos)
                            {
                                pi[i].recomendado = 1;
                                printf("Recomendado |");
                                continue;
                            }
                        }
                    }
                }
            }

            if (strcmp(pi[i].car[j].placa,"0")== 0)
                printf("Empty(%i) |",j+1);
            else if(strcmp(pi[i].car[j].placa,"0") != 0)
                printf("%s | ",pi[i].car[j].placa);
        }
        ext = 0;
        printf("\n");
        puts("-------------------------------------------\n ");
    }
    printarua(nru);
}

int estacionamento_cheio(Pilha* pi)
{
    int cont = 0;
    for(int i = 0; i< npi; i++)
    {
        if(pi[i].elementos == ncar)
            cont++;
    }

    return (cont == npi);
}
