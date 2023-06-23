#include <stdio.h>
#include <stdlib.h>
#define m 20
#define n 4

typedef struct grafo
{
    int ver_ponderado;
    int qtd_vertices;
    int grau_max;
    int **arestas;
    float **pesos;
    int *grau;
    int qtd_total;
} Grafo;

Grafo *grafo;

Grafo* cria_grafo(int qtd_vertices, int grau_max, int ver_ponderado);
char retorna_nome_cidade(int x);
void insereAresta(Grafo* gr, int origem, int destino, int ver_digrafo, float peso);
void cria_caminhos(Grafo *gr,int anterior[]);
void printa_rota(int auxiliar,int anterior[],float dist[]);
void busca_gulosa(Grafo *gr, int origem, int anterior[], float dist[]);
int procuraMenorHeuristica(Grafo* gr,int *visitado,int atual);
int retorna_h_cidade(int x);
int saudacao();


int main()
{
    if(saudacao())
    {
        int output;
        grafo = (Grafo*)malloc(sizeof(struct grafo)); //Aloco na memória a estrutura Grafo
        int anterior[m];
        float dist[m];
        grafo = cria_grafo(m,n,1);
        cria_caminhos(grafo,anterior);
        busca_gulosa(grafo,0,anterior,dist);
        free(grafo);
    }
    return 0;
}

Grafo* cria_grafo(int qtd_vertices, int grau_max, int ver_ponderado)//Inicializa a estrutura grafo
{
    Grafo *gr = (Grafo*)malloc(sizeof(struct grafo));
    if(gr != NULL)
    {
        int i;
        gr->qtd_vertices = qtd_vertices;
        gr->grau_max = grau_max;
        gr->ver_ponderado = (ver_ponderado != 0)?1:0;
        gr->grau = (int*)calloc(qtd_vertices,sizeof(int));
        gr->arestas = (int**)malloc(qtd_vertices*sizeof(int*));

        for(i=0; i<qtd_vertices; i++)
            gr->arestas[i] = (int*)malloc(grau_max*sizeof(int));

        if(gr->ver_ponderado)
        {
            gr->pesos = (float**)malloc(sizeof(float*));

            for(i=0; i<qtd_vertices; i++)
                gr->pesos[i] = (float*)malloc(grau_max*sizeof(float));
        }
    }
    return gr;
}

void insereAresta(Grafo* gr, int origem, int destino, int ver_digrafo, float peso)//insere arestas entre um nó de origem e um de destino
{
    if(gr == NULL)
    {
        puts("NULL");
        return;
    }
    if(origem < 0 || origem >= gr->qtd_vertices)
        return;
    if(destino < 0 || destino >= gr->qtd_vertices)
        return;

    gr->arestas[origem][gr->grau[origem]] = destino;

    if(gr->ver_ponderado)
        gr->pesos[origem][gr->grau[origem]] = peso;

    gr->grau[origem]++;

    if(ver_digrafo == 0)
        insereAresta(gr,destino,origem,1,peso);

    gr->qtd_total++;
}

void cria_caminhos(Grafo *gr,int anterior[])
{
    insereAresta(gr,0,1,0, 8.0);
    insereAresta(gr,0,2,0, 16.0);
    insereAresta(gr,0,3,0, 14.0);
    insereAresta(gr,1,2,0, 8.0);
    insereAresta(gr,1,4,0, 7.0);
    insereAresta(gr,2,4,0, 5.0);
    insereAresta(gr,2,5,0, 6.0);
    insereAresta(gr,2,6,0, 10.0);
    insereAresta(gr,3,5,0, 6.0);
    insereAresta(gr,3,2,0, 14.0);
    insereAresta(gr,4,6,0, 15.0);
    insereAresta(gr,5,6,0, 17.0);
}

int saudacao()
{
    int a;
    do
    {
        puts("                   *** Ola tecle 1 para prosseguir com a busca gulosa *** ");
        scanf("%d%*c",&a);
    }
    while(a!=1);

    return a;
}

void busca_gulosa(Grafo *gr, int origem, int anterior[], float dist[])
{
    int visitado[gr->qtd_vertices];
    int u,ind;
    int heuristica[gr->qtd_vertices];

    for(int i = 0; i<7; i++)
    {
        heuristica[i]= retorna_h_cidade(i);
    }

    for(int i = 0; i < gr->qtd_vertices; i++)
    {
        anterior[i] = -1;
        dist[i] = -1;
        visitado[i] = 0;
    }

    dist[origem] = 0.0;
    while(origem <= 6)
    {
        if(origem == 6)
        {
            puts("\nACHOU O DESTINO");
            printf("A cidade atual : [ %c ]\n",retorna_nome_cidade(origem));
            printa_rota(origem,anterior,dist);
            break;
        }

        printf("A cidade atual : [ %c ]\n",retorna_nome_cidade(origem));
        for(int i=0; i<gr->grau[origem];i++)
        {
            ind = gr->arestas[origem][i];
            if(dist[ind] < 0)
            {
                dist[ind] = dist[origem] + gr->pesos[origem][i];
                anterior[ind] = origem;
                printa_rota(ind,anterior,dist);
            }
        }
        origem = procuraMenorHeuristica(gr,visitado,origem);
    }
}

int procuraMenorHeuristica(Grafo* gr, int *visitado,int atual)
{
    int menor;

    if(gr->grau[atual] > 0)
    menor = gr->arestas[atual][0];

    for(int i = 0; i < gr->grau[atual]; i++)
    {
        if(retorna_h_cidade(gr->arestas[atual][i]) < retorna_h_cidade(menor))
        menor = gr->arestas[atual][i];
    }
    return menor;
}

char retorna_nome_cidade(int x)
{
    if( x == 0)
        return 'A';
    else if(x == 1)
        return 'B';
    else if(x == 2)
        return 'D';
    else if(x == 3)
        return 'C';
    else if(x == 4)
        return 'E';
    else if(x == 5)
        return 'F';
    else
        return 'G';
}

int retorna_h_cidade(int x)
{
    if( x == 0)
        return 16;
    else if(x == 1)
        return 13;
    else if(x == 2)
        return 7;
    else if(x == 3)
        return 15;
    else if(x == 4)
        return 10;
    else if(x == 5)
        return 10;
    else
        return 0;
}

void printa_rota(int auxiliar,int anterior[],float dist[])
{
    int vetor[10];
    printf("|| ROTA ATUAL || = ");
    for(int i = 0; i<10; i++)
    {
        vetor[i] = auxiliar;

        if(vetor[i] == 0)
        {
            auxiliar = i;
            break;
        }
        auxiliar = anterior[auxiliar];
    }

    for(int i = auxiliar; i>=0 ; i--)
    {
        if(i == 0)
        {
            printf("[ %c ]\n",retorna_nome_cidade(vetor[i]));
            break;
        }

        printf("[ %c ] --- ",retorna_nome_cidade(vetor[i]));
    }

    printf("|| DISTANCIA ||    ");
    for(int i = auxiliar; i>=0 ; i--)
    {
        if(i == 0)
        {
            printf("%0.2f       ",dist[vetor[i]]);
            break;
        }
        printf("%0.2f      ",dist[vetor[i]]);
    }
    printf("\n");
}
