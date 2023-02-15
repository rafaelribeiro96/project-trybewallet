# Boas-vindas ao repositório do projeto Trybewallet!

https://rafaelribeiro96.github.io/project-trybewallet/#/

# Descrição

Este projeto foi desenvolvido durante o período de Curso da Trybe 🚀

O projeto tem por objetivo a avaliação e prática dos conhecimentos adquiridos na Trybe, visando o cumprimento do requisitos solicitados pela mesma.


---

## Sumário

- [Descrição](#descrição)
- [Habilidades](#habilidades-requeridas)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Tecnologias usadas](#tecnologias-usadas)
- [ANTES DE INICIALIZAR A APLICAÇÃO](#antes-de-inicializar-a-aplicação)
- [Configurando o Redux DevTools](#configurando-o-redux-devtools)
- [Documentação da API de Cotações de Moedas](#documentação-da-api-de-cotações-de-moedas)
- [Linter](#linter)
- [Demonstração do Projeto](#desmontração-de-uso)

---

## Habilidades requeridas

- Criar um store Redux em aplicações React

- Criar reducers no Redux em aplicações React

- Criar actions no Redux em aplicações React

- Criar dispatchers no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar actions assíncronas na sua aplicação React que faz uso do Redux e redux-thunk.

---

## O que foi desenvolvido

Foi implementado uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar, remover e editar um gasto;

- Visualizar uma tabelas com seus gastos;

- Visualizar o total de gastos convertidos para uma moeda de escolha;

---

## Tecnologias usadas

- `javascript` , `jsx` , `React` , `Redux` e `css`.

---

## ANTES DE INICIALIZAR A APLICAÇÃO

1. Clone o repositório
  * `git clone git@github.com:rafaelribeiro96/project-trybewallet.git`

  * Entre na pasta do repositório na sua máquina:
    * `cd Trybe-project-trybewallet`

2. Instale as dependências
   * `npm install`

3.  Inicialize o projeto
    * `npm start`
    * ⚠️ Lembrando que já deve se estar dentro da pasta do projeto `Trybe-project-recipes-app` ⚠️

---

## Configurando o Redux DevTools
Pra usarmos o Redux DevTools com o Redux-Thunk, vamos utilizar uma biblioteca chamada `composeWithDevTools`, ela já está no package.json, a única coisa que você vai precisar fazer é configurar a sua store, por exemplo:

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
export default store;
```

---

## Documentação da API de Cotações de Moedas

Sua página _web_ irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, vocês precisarão consultar o seguinte _endpoint_:

- https://economia.awesomeapi.com.br/json/all

O retorno desse endpoint será algo no formato:
```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Americano/Real Brasileiro",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```

Se você quiser aprender mais informações sobre a API, veja a [documentação](https://docs.awesomeapi.com.br/api-de-moedas).

---

### Linter

Para garantir a qualidade do código, foi utilizado neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.

---

## Desmontração de Uso

https://rafaelribeiro96.github.io/project-trybewallet/#/
