# Smart-Gov Backend-Test API

API Node.js para aplicação Smart-Gov.

## Módulos

* [Express](http://expressjs.com/) - Web Framework
* [Sequelize](http://docs.sequelizejs.com/en/latest/) - ORM compatível com bancos de dados SQL
* [GraphQL](http://graphql.org) - GraphQL é uma linguagem de consulta de dados
* [Mocha](https://mochajs.org/) - Test Runner para Node.js
* [Chai](http://chaijs.com/) - Interface BDD e TDD para implementação de testes
* [Babel](https://babeljs.io/) - Transpiler EcmaScript 6

E tem mais no `package.json` do projeto.

Live Code -> https://backend-testt.herokuapp.com/graphiql

## Instalação

* Clone o repositório: `git clone git@bitbucket:tauhrus/smart-gov-apit`
* Acesse o diretório do projeto: `cd api`
* Inicie o servidor: `docker-composer up ou docker-composer up --build`

## Utilização das Funções GraphQL

Url -> http://0.0.0.0:3000/graphiql

## Utilizando PgAdmin v4

Através do link `http://0.0.0.0:5000` utilizando usuário: `pgadmin4@pgadmin.org` e senha `admin` podemos ter total acesso ao banco de dados por uma UI.

## Execução dos testes

- Acessando `container` da aplicação utilizando `docker exec -it api_web_1 bash`
- Para executar todos os testes utilizar `yarn test`
- Para executar um teste separadamente, basta rodar `yarn test ${nome do arquivo sem 'test.js'}`

## About

Lucas N. Santos - http://twitter.com/lucasnst
