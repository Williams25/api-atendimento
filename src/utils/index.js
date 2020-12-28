module.exports = {
  renderImage(pet) {
    return {
      url: `http://${process.env.IP}:${process.env.PORTA}/uploads/${pet.imagem}`
    }
  }
}