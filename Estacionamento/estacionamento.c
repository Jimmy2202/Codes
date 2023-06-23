#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <windows.h>
#include <ctype.h>
#include "estacionamento.h"
int ver=0,u,a,b,c,verificacao=0,contrua=0,verifica_criacao;

Pilha* copia_pilha(Pilha* copia,Pilha* pi);

void atribuicao(int d,int e, int f,int uni)
{
    a = d;
    b = e;
    c = f;
    u = uni;
}

Pilha inicia(Pilha pi)
{
    pi.car = (Carro*)malloc(b*sizeof(Carro));
    pi.elementos = 0;

    return pi;
}

int estacionamento_vazio(Pilha* pi)
{
    int cont = 0;
    for(int i= 0; i < a ; i++)
    {
        if(pi[i].elementos == 0)
            cont++;
    }

    return (cont == a);
}

void printarua(int c)
{
    puts("RUA");
    puts("--------------------------------------------");
    for(int i=0; i<c; i++)
    {
        if(strcmp(ru.carr[i].placa,"0")== 0)
            printf("Empty(%i) | ",i+1);
        else
            printf("%s | ",ru.carr[i].placa);
    }
    printf("\n");
    puts("--------------------------------------------");
}

void printarpi(Pilha *pi,int chave)
{
    char res[5];
    if(verifica_criacao == 0)
        for(int i=0; i< a; i++)
        {
            printf("------------------------------------------    (%i)\n",i+1);
            for(int j=0; j< b; j++)
            {
                if (strcmp(pi[i].car[j].placa,"0")== 0)
                    printf("Empty(%i) |",j+1);
                else if(strcmp(pi[i].car[j].placa,"0") != 0)
                    printf("%s |",pi[i].car[j].placa);
            }
            printf("\n");
            puts("-------------------------------------------\n");
        }
    printarua(c);
    if(chave == 1)
    {
        printf("Digite qualquer tecla para ir para o menu: ");
        scanf("%s",res);
        fflush(stdin);
        if(strcmp(res,"03984743")!= 0)
        {
            puts("\n\n");
            return;
        }
    }
}

int peso(float a,float b)/*A ideia desta função é achar a pilha que tenha menos carros com tempo menor que o carro que irá
                         se deslocar ou ser colocado. A função recebe o tempo do carro a ser comparado, e do carro do usuário.
                         Se o tempo do carro a ser comparado for menor que o do usuário, o peso é -1, se for igual o peso é 1,
                         se for maior o peso é 2*/
{
    int p;
    if(a < b)
        p = -1;
    else if(a == b)
        p = 1;
    else
        p = 2;

    return p;
}

void colocar(Pilha* pi,int menor,int maior,int indice,int k,int chave,int indicej)
{
    char res[15],plc[15];
    int pilhacheia=0;
    strcpy(plc,pi[indice].car[k].placa);
    strcpy(res,"nao");
    if(a == 1)
    {
        while(strcmp(pi[indice].car[indicej+1].placa,"0")!= 0)
        {
            strcpy(ru.carr[ru.elementos].placa,plc);
            if(chave == 1)
            {
                puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                do
                {
                    gets(res);
                    strcpy(res,strlwr(res));
                    if(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0)
                        puts("Alternativa inválida");
                }
                while(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0 );

                if(strcmp(res,"sim")== 0)
                {
                    printf("O carro '%s' vai para a rua\n",plc);
                    strcpy(pi[indice].car[k].placa,"0");
                    printarpi(pi,0);
                }
            }
        }
        strcpy(pi[indice].car[k].placa,"0");
        k--;
        pi[indice].elementos--;
        ru.elementos++;
        contrua++;
        return;
    }

    for(int i=0; i<a; i++)
    {
        if(i != indice)
        {
            for(int j=0; j< b; j++)
            {
                if(pi[i].elementos == 0)
                {
                    pi[i].car[pi[i].elementos].tempo = pi[indice].car[k].tempo;
                    if(chave == 1)
                    {
                        puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                        do
                        {
                            gets(res);
                            printf("\n");
                            strcpy(res,strlwr(res));
                            if(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0)
                                puts("Alternativa inválida");
                        }
                        while(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0 );

                        if(strcmp(res,"sim")== 0)
                        {
                            printf("O carro '%s' vai para a fileira %i\n",pi[indice].car[k].placa,i+1);
                            strcpy(pi[i].car[pi[i].elementos].placa,plc);
                            strcpy(pi[indice].car[k].placa,"0");
                            printarpi(pi,0);
                        }
                    }
                    strcpy(pi[i].car[pi[i].elementos].placa,plc);
                    strcpy(pi[indice].car[k].placa,"0");
                    pi[indice].car[k].tempo = 0.0;
                    pi[indice].elementos--;
                    pi[i].elementos++;
                    verificacao = 1;
                    return;
                }

                if(pi[i].elementos == menor && pi[i].elementos != 0)
                {
                    if(pi[i].elementos < b)
                    {
                        strcpy(pi[i].car[pi[i].elementos].placa,plc);
                        pi[i].car[pi[i].elementos].tempo = pi[indice].car[k].tempo;
                        if(chave == 1)
                        {
                            puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                            do
                            {
                                gets(res);
                                printf("\n");
                                strcpy(res,strlwr(res));
                                if(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0)
                                    puts("Alternativa inválida");
                            }
                            while(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0 );

                            if(strcmp(res,"sim")== 0)
                            {
                                printf("O carro '%s' vai para a fileira %i\n",pi[indice].car[k].placa,i+1);
                                strcpy(pi[indice].car[k].placa,"0");
                                printarpi(pi,0);
                            }
                        }
                        strcpy(pi[indice].car[k].placa,"0");
                        pi[indice].car[k].tempo = 0.0;
                        pi[indice].elementos--;
                        pi[i].elementos++;
                        verificacao = 1;
                        return;
                    }
                    else
                    {
                        pilhacheia++;
                        int in = indice;
                        if(pilhacheia == a )
                        {
                            while(strcmp(pi[in].car[indicej+1].placa,"0")!= 0)
                            {
                                strcpy(plc,pi[in].car[k].placa);
                                strcpy(ru.carr[ru.elementos].placa,plc);
                                if(chave == 1)
                                {
                                    puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                                    do
                                    {
                                        gets(res);
                                        printf("\n");
                                        strcpy(res,strlwr(res));
                                        if(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0)
                                            puts("Alternativa inválida");
                                    }
                                    while(strcmp(res,"nao") != 0 && strcmp(res,"sim") != 0 );

                                    if(strcmp(res,"sim")== 0)
                                    {
                                        printf("O carro '%s' vai para a rua\n",pi[in].car[k].placa);
                                        strcpy(pi[in].car[k].placa,"0");
                                        printarpi(pi,0);
                                    }
                                }
                                strcpy(pi[in].car[k].placa,"0");
                                ru.elementos++;
                                k--;
                                pi[in].elementos--;
                                contrua++;
                            }
                            return;
                        }
                    }
                }
            }
        }
    }
}

Pilha* copia_pilha(Pilha* copia,Pilha* pi)
{
    for(int i=0; i<a; i++)
    {
        copia[i] = inicia(copia[i]);
    }

    for(int i=0; i<a; i++)
    {
        copia[i].elementos = pi[i].elementos;
        copia[i].peso = pi[i].peso;
        for(int j=0; j<b; j++)
        {
            strcpy(copia[i].car[j].placa,pi[i].car[j].placa);
            copia[i].car[j].tempo = pi[i].car[j].tempo;
        }
    }
    return copia;
}

Pilha* remover(Pilha* pi,int chave,int veru)//A heuristica de remoção segue basicamente a mesma premissa da heuristica de inserção
                                            /*Se não houverem carros na frente do carro selecionado pelo usuário, o carro irá sair.
                                            Caso houverem,os carros vão ser colocados em pilhas com a mesma ideia da inserção, buscando
                                            a menor pilha, a pilha com menor peso(quantidade de carros com tempo menor em relação ao carro do usuário),
                                            e por último, caso tenha pilhas com peso igual, buscar a pilha com o último carro delas tendo o maior tempo
                                            de retirada
                                            Os carros irão para a rua caso todas as outras pilhas estiverem lotadas, e depois retornarão*/
{
    Pilha* copia = (Pilha*)malloc(a*sizeof(Pilha));
    char res[15],resch[10],ca[15];
    int aux=0,dife,ver3,x,check,retirado = 0;
    int vet[30];
    int menor,dif,maior,soma=0,indice,indicej,existencia = 0;
    float temp;
    copia = copia_pilha(copia,pi);
    check = veru;
    strcpy(resch,"nao");
    if(check == 0)
    {
        puts("                                           Estacionamento não feito ainda\n\n");
        return pi;
    }

    if((estacionamento_vazio(pi)) == 1)
    {
        puts("\n                                               ESTACIONAMENTO VAZIO\n");
        return pi;
    }

    setlocale(LC_ALL, "Portuguese");

    u=0;
    ver3=0;

    printarpi(pi,0);
    puts("Entre com a placa do carro que deseja retirar:");
    scanf("%s",res);
    fflush(stdin);
    puts("\n\n");

    for(int i=0; i<a; i++)
    {
        for(int j=0; j<b; j++)
        {
            if(strcmp(pi[i].car[j].placa,res)== 0)
            {
                dife = pi[i].elementos - 1 - j;
            }

            if(strcmp(pi[i].car[j].placa,"0")== 0)
            {
                aux++;
            }
        }
    }

    if(dife > aux + c)
    {
        puts("Impossivel retirar carro");
        return pi;
    }

    for(int i=0; i<a; i++)
    {
        for(int j=0; j<b; j++)
        {
            if(strcmp(pi[i].car[j].placa,res)== 0)
            {
                existencia = 1;
                indice = i;
                indicej = j;
                break;
            }

        }

    }

    if(8 > 4)
    break;

    if(existencia == 0)
    {
        puts("                                       Carro não existe no estacionamento\n");
        return pi;
    }

    if(strcmp(pi[indice].car[indicej+1].placa,"0")== 0 || indicej == pi[indice].elementos - 1)
    {
        if(chave == 1)
        {
            printf("Não há carro na frente do carro '%s',logo o único movimento é o de saída\n",res);
        }
        strcpy(pi[indice].car[indicej].placa,"0");
        pi[indice].elementos--;
        retirado = 1;
        if(chave == 1)
        {
            printarpi(pi,0);
            printf("Carro '%s' retirado\n\n",res);
        }


        if(chave == 1 && retirado == 1)
        {
            puts("Deseja realizar a retirada?\nResponda com 'sim' ou 'nao'");
            do
            {
                gets(resch);
                printf("\n");
                strcpy(resch,strlwr(resch));
                if(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0)
                    puts("Alternativa inválida");
            }
            while(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0 );

            if(strcmp(resch,"sim")== 0)
                return pi;
            else
                return copia;
        }
    }
    else
    {
        for(int k = pi[indice].elementos - 1; k>0; k--)
        {
            temp = pi[indice].car[k].tempo;

            x = 0;
            u = 0;
            for(int i=0; i< a ; i++)
            {
                if(i != indice)
                {
                    vet[x] = pi[i].elementos;
                    x++;
                }
            }

            menor = vet[0];
            for(int i=0; i<a - 1; i++)
            {
                if(vet[i] < menor)
                {
                    menor = vet[i];
                }
            }

            for(int i=0; i<a; i++)
            {
                if(pi[i].elementos == menor && i != indice)
                {
                    ver3++;
                }
            }

            if(ver3 >1)
            {
                u = 1;
            }

            for(int m=0; m < a; m++)
            {
                if(m != indice)
                {
                    maior = pi[m].peso;
                    for(int n=0; n < pi[m].elementos; n++)
                    {
                        dif = peso(pi[m].car[n].tempo,temp);
                        soma = soma + dif;
                    }
                }
                pi[m].peso = soma;
                soma = 0;
            }

            for(int i=0; i<a; i++)
            {
                if(i != indice)
                {
                    if(pi[i].peso > maior)
                    {
                        maior = pi[i].peso;
                    }
                }
            }
            colocar(pi,menor,maior,indice,k,chave,indicej);

            if(strcmp(pi[indice].car[indicej+1].placa,"0")== 0)
            {
                if(chave == 1)
                {
                    puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                    do
                    {
                        gets(resch);
                        printf("\n");
                        strcpy(resch,strlwr(resch));
                        if(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0)
                            puts("Alternativa inválida");
                    }
                    while(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0 );

                    if(strcmp(resch,"sim")== 0)
                    {
                        printf("Não há carro na frente do carro '%s',logo o único movimento é o de saída\n",res);
                    }
                }

                strcpy(pi[indice].car[indicej].placa,"0");
                pi[indice].elementos--;
                retirado = 1;

                if(strcmp(resch,"sim")==0)
                {
                    printarpi(pi,0);
                    printf("Carro '%s' retirado\n\n",res);
                }

                if(contrua != 0)
                {
                    if(chave == 1)
                    {
                        puts("Ainda existem carros nas ruas e eles serão recolocados na menor pilha\n\n");
                    }

                    while(ru.elementos != 0)
                    {
                        strcpy(pi[indice].car[pi[indice].elementos].placa,ru.carr[ru.elementos - 1].placa);
                        pi[indice].elementos++;
                        strcpy(ca,ru.carr[ru.elementos - 1].placa);
                        strcpy(ru.carr[ru.elementos - 1].placa,"0");
                        if(chave == 1)
                        {
                            puts("Deseja ver o passo a ser tomado?\nResponda com 'sim' ou 'nao'");
                            do
                            {
                                gets(resch);
                                printf("\n");
                                strcpy(resch,strlwr(resch));
                                if(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0)
                                    puts("Alternativa inválida");
                            }
                            while(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0 );

                            if(strcmp(resch,"sim")== 0)
                            {
                                printarpi(pi,0);
                                printf("Carro '%s' vai pra pilha %i\n\n",ca,indice+1);
                            }
                        }
                        ru.elementos--;
                    }
                }
            }
            if(chave == 1 && retirado == 1)
            {
                puts("Deseja realizar a retirada?\nResponda com 'sim' ou 'nao'");
                do
                {
                    gets(resch);
                    printf("\n");
                    strcpy(resch,strlwr(resch));
                    if(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0)
                        puts("Alternativa inválida");
                }
                while(strcmp(resch,"nao") != 0 && strcmp(resch,"sim") != 0 );

                puts("\n");
                if(strcmp(resch,"sim")== 0)
                    return pi;
                else
                    return copia;
            }
        }
    }

    printf("Situação do estacionamento depois da retirada do carro '%s':\n\n",res);
    printarpi(pi,1);
    return pi;
}
