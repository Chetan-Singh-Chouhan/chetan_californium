const bookModel = require('../models/booksDb.js')
const authorModel = require('../models/authorDb.js')
const storeBookData = async function (req, res){
   try{
      if(req.body.author_id)
      {
         let data= req.body
         await bookModel.create(data)
         res.send({msg:"data Saved"})
      }
      else res.send("please Enter authorID")
   }
   catch(err){
      console.log(err.message)
   }
}
const storeAuthorData = async function (req, res){
   try{
      if(req.body.author_id)
      {
         let data= req.body
         await authorModel.create(data)
         res.send({msg:"data Saved"})
      }
      else res.send("please Enter authorID")
   }
   catch(err){
      console.log(err.message)
   }
}
const getList = async function (req, res){
   try{
      const getdata = await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
      const getbook = await bookModel.find(getdata[0])
      res.send(getbook)
   }
   catch(err){
      console.log(err.message)
   }
}
const twoStates = async function (req, res){
   try{
      const get_id=await bookModel.find({name:"Two states"}).select({author_id:1,_id:0})
      const authorname=await authorModel.find(get_id[0]).select({author_name:1,_id:0})
      const getData=await bookModel.findOneAndUpdate(
         {get_id},
         {$set:{price:100}},
         {new:true}
      )
      result="Update Price->"+ getData.price + " Author Name->"+authorname[0].author_name
    
      res.send(result)
   }
   catch(err){
      console.log(err.message)
   }
}
const getBooks = async function (req, res){
   try{
      authorName=[]
      const getdata=await bookModel.find({ price :{ $gte:50,$lte:100} }).select({author_id:1,_id:0})
      for(x in getdata){
         authorName.push(await authorModel.findOne(getdata[x]).select({author_name:1,_id:0}))
      }
      res.send(authorName)
   }
   catch(err){
      console.log(err.message)
   }
}


module.exports.storeBookData=storeBookData
module.exports.storeAuthorData=storeAuthorData
module.exports.getList=getList
module.exports.twoStates=twoStates
module.exports.getBooks=getBooks
