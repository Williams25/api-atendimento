const conexao = require('../database/conexao')
const moment = require('moment')
const repository = require('../repository/atendimento')

class Atendimento {
  async create(atendimento) {
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
      return new Promise((resolve, reject) => {
        reject(errors)
      })
    } else {
      const dataAtendimento = { ...atendimento, data_criacao, data }

      return await repository.create(dataAtendimento).then(() => {
        return { message: 'Atendimento criado', atendimento: dataAtendimento }
      }).catch(err => err.message)
    }
  }

  async index() {
    return await repository.index().then(result => {
      return result
    }).catch(err => err.message)
  }

  async findID(id) {
    return await repository.findID(id).then(result => {
      return result
    }).catch(err => err.message)
  }

  async update(atendimento) {
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
      return new Promise((resolve, reject) => {
        reject(errors)
      })
    } else {
      return await repository.update(atendimento).then(() => {
        return { message: 'Atendimento alterado' }
      }).catch(err => err.message)
    }
  }

  async delete(id) {
    return await repository.delete(id).then(result => {
      return { message: 'Atendimento apagado' }
    }).catch(err => err.message)
  }
}

module.exports = new Atendimento