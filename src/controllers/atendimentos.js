module.exports = {
  index: async (req, res) => {
    return res.send('opa')
  },
  create: async (req, res) => {
    const {nome} = req.body
    return res.status(201).json({message: 'ok', nome})
  }
}