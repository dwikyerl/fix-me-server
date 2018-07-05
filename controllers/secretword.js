const { words } = require('../data.json')

module.exports = {
  postWords(req, res) {
    let inputWord = req.body.word;
    let checkWord = words.some((word) => {
      return word === inputWord
    })
    if ( checkWord ) {
      res.
        status( 200 )
        .json( true )
    } else {
      res
        .status( 400 )
        .json( false )
    }
  }
}