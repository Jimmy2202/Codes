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
int procuraMenorDistancia(float *dist, int *visitado,int numvertices);
void menor_caminho_grafo(Grafo *gr, int ini, int *anterior,float *dist);
char retorna_nome_cidade(int x);
void insereAresta(Grafo* gr, int origem, int destino, int ver_digrafo, float peso);
void cria_caminhos(Grafo *gr);
void printa_rota(int auxiliar,int anterior[],float dist[]);
int saudacao();

int main()
{
    if(saudacao())
    {
        grafo = (Grafo*)malloc(sizeof(struct grafo)); //Aloco na memória a estrutura Grafo
        int anterior[m];
        float dist[m];
        grafo = cria_grafo(m,n,1);
        cria_caminhos(grafo);
        menor_caminho_grafo(grafo,0,anterior,dist);
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

void cria_caminhos(Grafo *gr)
{
    insereAresta(gr,0,1,0, 8.0);
    insereAresta(gr,0,2,0, 16.0);
    insereAresta(gr,0,3,0, 3.0);
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
        puts("       Ola tecle 1 para prosseguir com a busca ordenada");
        scanf("%d%*c",&a);
    }
    while(a!=1);

    return a;
}

int procuraMenorDistancia(float *dist, int *visitado,int numvertices)
{
    int menor = -1, primeiro = 1;
    for(int i = 0; i < numvertices; i++)
    {
        if(dist[i] >= 0 && visitado[i] == 0)
        {
            if(primeiro)
            {
                menor = i;
                primeiro = 0;
            }
            else
            {
                if(dist[menor] > dist[i])
                    menor = i;
            }
        }
    }
    return menor;
}

void menor_caminho_grafo(Grafo *gr, int ini, int *anterior,float *dist)
{
    int cont,numvertices,ind,u;
    float a;
    cont = numvertices = gr->qtd_vertices;
    int visitado[numvertices];

    for(int i = 0; i < numvertices; i++)
    {
        anterior[i] = -1;
        dist[i] = -1;
        visitado[i] = 0;
    }

    dist[ini]=0.0;

    while(cont > 0)
    {
        u = procuraMenorDistancia(dist,visitado,numvertices);

        if(u == 6)
        {
            printf("\nCHEGOU AO DESTINO COM A MENOR DISTANCIA\n || DISTANCIA || = %0.2f\n\nMENOR ROTA\n\n", dist[u]);
            //auxiliar = u;
            printa_rota(u,anterior,dist);
            break;
        }

        printf("\nCidade atual : [ %c ]\n",retorna_nome_cidade(u));

        for(int i = 0; i < gr->grau[u]; i++)
        {
            printf("Tem caminho direto para %c com custo %0.2f\n",retorna_nome_cidade(gr->arestas[u][i]),gr->pesos[u][i]);
        }

        if(u == -1)
            break;

        visitado[u] = 1;
        cont--;

        for(int i = 0; i < gr->grau[u]; i++)
        {
            ind = gr->arestas[u][i];

            printf("Caminho nao direto entre a origem e a cidade %c com custo de %0.2f\n",retorna_nome_cidade(ind),dist[u] + gr->pesos[u][i]);
            if(dist[ind] < 0)
            {
                dist[ind] = dist[u] + gr->pesos[u][i];
                anterior[ind] = u;
                printa_rota(ind,anterior,dist);
            }
            else if(dist[ind] > gr->pesos[u][i] + dist[u])
            {
                    a = dist[ind];
                    dist[ind] = dist[u] + gr->pesos[u][i];
                    anterior[ind] = u;
                    //printf("Acha uma rota para %c com custo %0.2f pela cidade %c, mais barata que anterior de custo %0.2f\n",retorna_nome_cidade(ind),dist[ind],retorna_nome_cidade(u),a);
                    printa_rota(ind,anterior,dist);
            }
            //printf("Caminho nao direto entre A e %c com custo de %0.2f por %c\n",retorna_nome_cidade(ind),dist[u] + gr->pesos[u][i],retorna_nome_cidade(u));
        }
    }
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
