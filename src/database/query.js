const conexao = require('./conexao')

const query = (query, params = '') => {
  return new Promise((resolve, reject) => {
    conexao.query(query, params, (erro, result) => {
      if (erro) return reject(erro)
      return resolve(result)
    })
  })
}

module.exports = query