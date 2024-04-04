# Financeiro (Empréstimo) - Exercício de Programação Server-Side

Este projeto é resultado de uma atividade realizada em sala de aula sob a orientação do Professor Camargo, focada no domínio de conceitos financeiros aplicados à programação server-side.

## Enunciado da Atividade

Uma instituição financeira tem critérios específicos para conceder empréstimos: o valor total do empréstimo não deve exceder dez vezes a renda mensal do solicitante, e a prestação mensal não pode ultrapassar 30% da renda mensal do mesmo. O objetivo do programa é ler os dados do solicitante (nome, renda mensal, valor total do empréstimo solicitado e número de prestações desejadas), verificar se o empréstimo pode ser concedido e armazenar essas informações em um banco de dados relacional. Além disso, duas consultas devem ser implementadas: uma por renda mensal e outra por valor de empréstimo.

## Ferramentas Utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
- ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)

*Observação: Embora não seja fornecido um banco de dados neste repositório, o código foi configurado para utilizar um.*

## Código e Funcionalidades Adicionais

O código JavaScript inclui uma classe `Emprestimo` com métodos para cálculo da concessão do empréstimo, inserção de dados no banco de dados e consultas. Abaixo está um trecho do código:

```javascript
// Trecho do código JavaScript
let banco = require("./bd");

const prompt = require('prompt-sync')();

// Definição da Classe Emprestimo e seus atributos e o método construtor
class Emprestimo {
  constructor(nomeSolicitante, rendaMensal, vlrTotalEmprestimo, qtdePrestacao) { 
    // ...
  }
  // ...

  // Método da Classe Emprestimo para calcular a concessão ou Não do Emprestimo
  concessaoEmprestimo() {
    // ...
  }
}

// Instanciando um objeto da classe Emprestimo e realizando operações relacionadas ao banco de dados
let emprestimo = new Emprestimo(/* ... */);
emprestimo.concessaoEmprestimo();

// Executando operações no banco de dados
banco.conecta.connect(function(err) {
  if (err) {
    throw console.log("Erro ao conectar ao banco", err);
  } else {  
    banco.conecta.query(sqlin);
    banco.conecta.query(sqlcon, function(err, result) {
      // ...
    });
    banco.conecta.query(sqlcon2, function(err, result) {
      // ...
    });
  }  
});
```

## Configuração do Banco de Dados

```javascript
const mysql = require('mysql2');

const conecta = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'financeiro'
});

module.exports = {conecta};
```

Este projeto serve como uma introdução prática à aplicação de conceitos financeiros em programação server-side, utilizando JavaScript, Node.js e MySQL/MariaDB.
