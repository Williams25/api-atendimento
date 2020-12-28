class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.atendimentos()
    this.pets()
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

  pets() {
    const sql = `CREATE TABLE IF NOT EXISTS PETS (
      ID INT NOT NULL AUTO_INCREMENT,
      ID_ATENDIMENTO INT,
      NOME VARCHAR(100),
      IMAGEM VARCHAR(200),
      PRIMARY KEY (ID),
      CONSTRAINT FK_ATENDIMENTO FOREIGN KEY (ID_ATENDIMENTO) REFERENCES ATENDIMENTOS (ID)
    )`

    this.conexao.query(sql, (erro) => {
      if (erro) console.log(erro)
      console.log('Tabela pets criada')
    })
  }
}

module.exports = new Tabelas