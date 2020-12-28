const conexao = require('../database/conexao')
const moment = require('moment')

class Atendimento {
  create(atendimento, res) {
    const data_criacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    const dataValida = moment(data).isSameOrAfter(data_criacao)

    const validacao = [
      {
        nome: 'data',
        valido: dataValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      }
    ]

    const errors = validacao.filter(campo => !campo.valido)

    if (errors.length > 0) {
      return res.status(400).json(errors)
    } else {
      const dataAtendimento = { ...atendimento, data_criacao, data }
      const sql = `INSERT  INTO ATENDIMENTOS SET ?`
      conexao.query(sql, dataAtendimento, (erro, result) => {
        if (erro) {
          return res.status(400).json(erro)
        } else {
          return res.status(201).json({ message: 'Atendimento criado' })
        }
      })
    }
  }

  index(res) {
    const sql = `SELECT * FROM ATENDIMENTOS`
    conexao.query(sql, (erro, result) => {
      if (erro) {
        return res.status(400).json(erro)
      } else {
        return res.status(200).json(result)
      }
    })
  }

  findID(id, res) {
    const sql = `SELECT * FROM ATENDIMENTOS WHERE ID = ?`
    conexao.query(sql, id, (erro, result) => {
      if (erro) {
        return res.status(404).json(erro)
      } else {
        return res.status(200).json(result[0])
      }
    })
  }

  update(atendimento, res) {
    const sql = `UPDATE ATENDIMENTOS SET ? WHERE ID = ?`

    const data_criacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    const dataValida = moment(data).isSameOrAfter(data_criacao)

    const validacao = [
      {
        nome: 'data',
        valido: dataValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      }
    ]

    const errors = validacao.filter(campo => !campo.valido)

    if (errors.length > 0) {
      return res.status(400).json(errors)
    } else {
      conexao.query(sql, [atendimento, atendimento.id], (erro, result) => {
        if (erro) {
          return res.status(400).json(erro)
        } else {
          return res.status(200).json({ message: 'Atendimento alterado' })
        }
      })
    }
  }

  delete(id, res) {
    const sql = `DELETE FROM ATENDIMENTOS WHERE ID = ?`
    conexao.query(sql, id, (erro, result) => {
      if (erro) {
        return res.status(404).json(erro)
      } else {
        return res.status(200).json({ message: 'Atendimento apagado' })
      }
    })
  }
}

module.exports = new Atendimento