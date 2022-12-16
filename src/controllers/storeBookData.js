const bookModel = require('../models/booksDb.js')
const getData = async function (req, res){
   let data= req.body
   let savedBookData = await bookModel.create(data)
   res.send({msg:"data Saved"})
}
module.exports.getData=getData