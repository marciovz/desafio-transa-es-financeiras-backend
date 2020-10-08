


# DESAFIO5 - Transações Financeiras - Backend

## Visão geral
Desafio5 transações financeiras é um servidor backend para serviços de gerenciamento de transações financeiras.
Ele é responsável pelo armazenamento dos valores de depósito e retirada, gerenciando esse valores e controlando o saldo atual,
e as transações permitidas.

O código é uma resolução do desafio 5 módulo 2 do curso Bootcamp da Rocketseat para aplicação dos conhecimentos adiquiridos sobre backend com nodeJS.

O desafio é composto pela construção de um servidor em NodeJS utilizando a linguagem typescript. O projeto possui uma estrutura de pastas divididas por responsabilidades como, models, repositories, routes e services.
Neste desafio ainda não será implementado banco de dados, tendo os dados armazenados apenas em memória volátil enquando o backend estiver rodando.
São aplicados alguns padrões de projetos como a DI (Dependence Injection), SRP (Single Responsability Principle), SoC (Separation of Concerns) e DRY (Don't Repeat Yourself).

### Funcionalidades
- listagem das transações efetuadas e o saldo;
- criar uma transação do tipo income para entrada de um valor;
- criar uma transação do tipo outcome para retirada de um valor;
- controle sobre o saldo, restringindo retiradas resultantes em saldo negativo;


### Bibliotecas
- express: utilizada para criação de um servidor.
- typescript: permite escrevermos código typescript para rodar no nodeJS;
- ts-node-dev: utilizado para inicialização e monitoramento de alterações nos arquivos typescript.
- uuidv4: utilizado para criação de id's aleatórios.
- jest: utilizado para testes unitários na aplicação.
- supertest: utilizado para testes da aplicação.

<br />

## Instalação

### 1. Requisitos para instalação
- NodeJS na versão 8 ou superior;
- yarn ou npm;
- curl, postman ou insomnia.

### 2. Download

Clonar a pasta do projeto para sua máquina local e instalar as dependências.
```bash
 # clonar o repositório
 $ git clone https://github.com/marciovz/desafio5-transacoes-financeiras-backend.git

 # acessar a pasta backend
 $ cd desafio5-transacoes-finaceiras-backend

 # instalar as dependências do projeto
 $ yarn
```
### 3. Iniciando o servidor
```bash
$ yarn dev:server
```

<br />

## Usando os serviços

Abaixo temos as linhas de comandos para fazer as requisições através dos comandos curl em seu terminal, mas você também pode utilizar um aplicativo como postman ou insomnia para executar as requisições ao servidor.

 ### Criar uma transação do tipo deposito (income)
```bash
$ curl -H "Content-Type: application/json" -X POST -d '{"title": "Salário" , "value": 3000, "type": "income"}' http://localhost:3333/transactions
```
<br />

 ### Criar uma transação do tipo deposito (outcome)
```bash
$ curl -H "Content-Type: application/json" -X POST -d '{"title": "IPTU" , "value": 800, "type": "outcome"}' http://localhost:3333/transactions
```
<br />

 ### Listar todas transações e o mostra o salto atual.
```bash
$ curl -H "Content-Type: application/json" -X GET http://localhost:3333/transactions
```
<br />
