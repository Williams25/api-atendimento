class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.atendimentos()
  }

  atendimentos() {
    const sql = `CREATE TABLE IF NOT EXISTS ATENDIMENTOS (
      ID INT NOT NULL AUTO_INCREMENT,
      CLIENTE VARCHAR(100) NOT NULL,
      PET VARCHAR(100) NOT NULL,
      SERVICO VARCHAR(20) NOT NULL,
      STATUS VARCHAR(20) NOT NULL,
      OBSERVACOES TEXT,
      DATA DATETIME NOT NULL,
      DATA_CRIACAO DATETIME NOT NULL,
      PRIMARY KEY (ID)
    )`
    this.conexao.query(sql, (erro) => {
      if (erro) console.log(erro)
      console.log('Tabela atendimentos criada')
    })
  }
}

module.exports = new Tabelas