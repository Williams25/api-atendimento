const Atendimento = require('../models/atendimento')
module.exports = {
  index: async (req, res) => {
    return await Atendimento.index().then(result => {
      return res.status(200).json({ atendimento: result })
    }).catch(err => res.status(400).json({ message: err.message }))
  },
  create: async (req, res) => {
    const { cliente, pet, servico, status, observacoes, data } = req.body
    return await Atendimento.create({ cliente, pet, servico, status, observacoes, data }).then(atendimento => {
      return res.status(201).json(atendimento)
    }).catch(err => res.status(400).json({ message: err.message }))
  },
  findID: async (req, res) => {
    const { id } = req.params
    return await Atendimento.findID(id).then(result => {
      return res.status(200).json({ atendimento: result[0] })
    }).catch(err => res.status(400).json({ message: err.message }))
  },
  update: async (req, res) => {
    const { cliente, pet, servico, status, observacoes, data, id } = req.body
    return await Atendimento.update({ cliente, pet, servico, status, observacoes, data, id }).then(atendimento => {
      return res.status(200).json(atendimento)
    }).catch(err => res.status(400).json({ message: err.message }))
  },
  delete: async (req, res) => {
    const { id } = req.params
    return Atendimento.delete(id).then(atendimento => {
      return res.status(200).json(atendimento)
    }).catch(err => res.status(400).json({ message: err.message }))
  },
}