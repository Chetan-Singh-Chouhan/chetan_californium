const bookModel = require('../models/booksDb.js')
const storeData = async function (req, res){
   try{
   let data= req.body
   await bookModel.create(data)
   res.send({msg:"data Saved"})
   }
   catch(err){
      console.log(err.message)
   }
}
const bookList =  async function (req, res){
   try{
   let allData= await bookModel.find().select({ bookName:1,authorName:1,_id:0})
   res.send(allData)
   }
   catch(err){
      console.log(err.message)
   }
}
const getBooksInYear =  async function (req, res){
   try{
   let allData= await bookModel.find({year:req.params.year})
   res.send(allData)
   }
   catch(err){
      console.log(err.message)
   }
}
const getParticularBooks =  async function (req, res){
   try{
   const search=req.body
   let allData= await bookModel.find(search)
   res.send(allData)
   }
   catch(err){
      console.log(err.message)
   }
}
const priceFilter =  async function (req, res){
   try{
      let allData= await bookModel.find({
         $or:[{"price.indianPrice":{$in:[100,200,500]}}]
      })
      res.send(allData)
   }
   catch(err){
      console.log(err.message)
   }
}

const getRandomBooks =  async function (req, res){
   try{
      let allData= await bookModel.find({
         $or:[{stockAvailable:true},{totatPages:{$gt:200}}]
      })
      res.send(allData)
   }
   catch(err){
      console.log(err.message)
   }
}
module.exports.storeData=storeData
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=priceFilter
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticularBooks=getParticularBooks