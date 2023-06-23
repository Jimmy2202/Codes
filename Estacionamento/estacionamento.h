#ifndef ESTACIONAMENTO_H_INCLUDED
#define ESTACIONAMENTO_H_INCLUDED

typedef struct carro
{
    char placa[10];
    float tempo;
} Carro;

typedef struct rua
{
    Carro* carr;
    int elementos;
} Rua;

Rua ru;

typedef struct pilha
{
    int peso;
    int elementos;
    int recomendado;
    Carro* car;
} Pilha;

void printarua(int c);

void printarpi(Pilha *pi,int chave);

void colocar(Pilha* pi,int menor,int maior,int indice,int k,int chave,int indicej);

void atribuicao(int d,int e, int f,int uni);

int peso(float a,float b);

int estacionamento_vazio(Pilha* pi);

Pilha inicia(Pilha pi);

Pilha* criar_estacionamento(Pilha* pi);

Pilha* inserir(Pilha* pi);

Pilha* remover(Pilha* pi,int chave,int veru);

#endif // ESTACIONAMENTO_H_INCLUDED
