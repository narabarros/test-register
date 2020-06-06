### Pre Requisitos

* [Nodejs](https://nodejs.org/en/download/) - Site oficial

* [Java-jre](https://www.oracle.com/technetwork/pt/java/javase/downloads/jre8-downloads-2133155.html) - Site oficial


Use npm para instalar Protractor 

```
npm install -g protractor
```

Atualize Webdriver Manager

```
webdriver-manager update
```

## Executando os testes

Depois que tiver instalado os pré requisitos, executee os comandos abaixo:

Para iniciar o servidor execute:

```
webdriver-manager start
```
Para escolher a porta que será executado o servidor, execute:

webdriver-manager start --seleniumPort {port}

Para iniciar os testes, execute:
```
protractor config/conf.js
```

### Objetivo do teste

O objetivo do teste é acessar o link, selecionar a opção de realizar um novo cadastro e preencher os campos nome, sobrenome, email e senha.

### Implementação

Protractor é um framework de testes funcionais para aplicações frontend e funciona como uma solução integradora combinando poderosas ferramentas e tecnologias tais como NodeJS, Selenium, webDriver, Jasmine, Cucumber e Mocha.

Protractor permite que seus testes sejam organizados baseados no Jasmine, isso permite que você escreva ambos testes unitários e funcionais no Jasmine.
Executa em navegadores reais.
