const Atendimento = require('../models/atendimento')
module.exports = {
  index: async (req, res) => {
    return Atendimento.index(res)
  },
  create: async (req, res) => {
    const { cliente, pet, servico, status, observacoes, data } = req.body
    return Atendimento.create({ cliente, pet, servico, status, observacoes, data }, res)
  },
  findID: async (req, res) => {
    const { id } = req.params
    return Atendimento.findID(id, res)
  },
  update: async (req, res) => {
    const { cliente, pet, servico, status, observacoes, data, id } = req.body
    return Atendimento.update({ cliente, pet, servico, status, observacoes, data, id }, res)
  },
  delete: async (req, res) => {
    const { id } = req.params
    return Atendimento.delete(id, res)
  },
}