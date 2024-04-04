let banco = require("./bd")

const prompt = require('prompt-sync')()

//Definição da Classe Emprestimo e seus atributos e o método construtor
class Emprestimo {
  constructor(nomeSolicitante, rendaMensal, vlrTotalEmprestimo, qtdePrestacao) { 
    this._nomeSolicitante = nomeSolicitante
    this._rendaMensal = rendaMensal
    this._vlrTotalEmprestimo = vlrTotalEmprestimo
    this._qtdePrestacao = qtdePrestacao 
  }
  //métodos getter e setter 
  get nomeSolicitante() {
    return this._nomeSolicitante
  }
  set nomeSolicitante(nomeSolicitante) {
    this._nomeSolicitante = nomeSolicitante
  }

  get rendaMensal() {
    return this._rendaMensal
  }
  set rendaMensal(rendaMensal) {
    this._rendaMensal = rendaMensal
  }

  get vlrTotalEmprestimo() {
    return this._vlrTotalEmprestimo
  }
  set vlrTotalEmprestimo(vlrTotalEmprestimo) {
    this._vlrTotalEmprestimo = vlrTotalEmprestimo
  }

  get qtdePrestacao() {
    return this._qtdePrestacao
  }
  set qtdePrestacao(qtdePrestacao) {
    this._qtdePrestacao = qtdePrestacao
  }
  
  //métdo da Classe Emprestimo para calcular a concessão ou Não do Emprestimo
  concessaoEmprestimo() {
    let vlrPrestacao = (this._vlrTotalEmprestimo/this.qtdePrestacao)
      if (this._vlrTotalEmprestimo <= (this._rendaMensal * 10) &&
      vlrPrestacao <= (this._rendaMensal * 0.30)) {
        console.log("Empréstimo Concedido")
    }
    else {
      console.log("Empréstimo Não Concedido!")
    }

  }
}
 let emprestimo = new Emprestimo (prompt("Informe o Nome do Solicitante: "), prompt("Informe a Renda Mensal do Solicitante: "),
 prompt("Informe o Valor Total do Empréstimo: "), prompt("Informe Quantidade de Prestações: "))
 emprestimo.concessaoEmprestimo()

 let sqlin = `INSERT INTO financiamento (nome_solicitante, renda_mensal, vlr_emprestimo, num_prestacao) VALUES('${emprestimo._nomeSolicitante}','${emprestimo._rendaMensal}', '${emprestimo._vlrTotalEmprestimo}', '${emprestimo._qtdePrestacao}')`
 let sqlcon = `SELECT * FROM financiamento WHERE renda_mensal > 1000;`
 let sqlcon2 = `SELECT * FROM financiamento WHERE vlr_emprestimo >= 500;`
 
 banco.conecta.connect(function(err) {
  if (err) {
    throw console.log("erro ao conectar o banco", err)
  } else {  
    banco.conecta.query(sqlin)
    banco.conecta.query(sqlcon, function(err, result){
      if (err) throw console.log("erro com a query/consulta 1", err)
      console.log(result) 
    })
    banco.conecta.query(sqlcon2, function(err, result){
      if (err) throw console.log("erro com a query/consulta 2", err)
      console.log(result) 
    })
  }  
  
})
