const bookModel = require('../models/booksDb.js')
const authorModel = require('../models/authorDb.js')
const publisherModel = require('../models/publishersDb.js')
const { response } = require('express')
const booksDb = require('../models/booksDb.js')

const storeAuthorData = async function (req, res){
   try{
         {
            let userBookData = req.body  // fetching data from request.body
            await authorModel.insertMany(userBookData) //inserting Data in author Model
            res.send({msg:"data have been stored in Author table"})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const storePublisherData = async function (req, res){
   try{
         {
            let userPublisherData = req.body     // fetching data from request.body
            await publisherModel.insertMany(userPublisherData)  //inserting Data in publisher Model
            res.send({msg:"data have been stored in Publisher table"})

         }
      
   }
   catch(err){
      console.log(err.message)
   }
}
const storeBookData = async function (req, res){
   try{
        let pubIdData=await publisherModel.find().select({_id:1})
        let authorIdData=await authorModel.find().select({_id:1})
        if(authorIdData.length>0)
         {
            if(pubIdData.length>0)
            {
               if(req.body.author)
               {
                  if(req.body.publisher)
                  {
                     const isAutherPresent = authorIdData.find((x) => x._id == req.body.author)
                     if(isAutherPresent)
                     {
                        const isPublisherPresent = pubIdData.find((x) => x._id == req.body.publisher)
                        if(isPublisherPresent)
                        {
                           await bookModel.create(req.body)
                           res.send({msg:"Data saved"})
                        }
                        else res.send("publisher id is not valid please Enter correct publisher id")
                     }
                     else res.send("author id is not valid please Enter correct author id")
                  }
                  else res.send("publisher id is necessary")
               }
               else res.send("author id is necessary")
            }
            else res.send("There is not data in publisher's Database")
         }
         else res.send("There is not data in author's Database")
         
   }
   catch(err){
      console.log(err.message)
   }
}
const getBookData = async function (req, res){
   try
   {
         {
            let bookData=await bookModel.find().populate("author publisher",{authorName:1,name:1,_id:0}).select({_id:0,__v:0})  
            res.send(bookData)
         }
   }
   catch(err)
   {
      console.log(err.message)
   }
}
const updateBook = async function (req, res){
   try
   {
         {
           /* a) Add a new boolean attribute in the book schema called isHardCover with a default false value.
            For the books published by 'Penguin' and 'HarperCollins', update this key to true.*/
           let getPublisherId=await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
           for(let x of getPublisherId){
           await bookModel.updateMany(
               {publisher:x._id},
               {$set:{isHardCover:true}}
              )
           }

            /*b) For the books written by authors having a rating greater than 3.5, update the books
            price by 10 (For eg if old price for such a book is 50, new will be 60)*/
            let authorsList=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
            for(let y of authorsList)
            {
               await bookModel.updateMany(
               {author:y._id},
               {$inc:{price:10}})
            }
           console.log(authorsList._id)
           let updatedBookData=await bookModel.find().populate("author publisher",{authorName:1,name:1,_id:0}).select({_id:0,__v:0})
           res.send({msg:"Book Data has been Updated",data:updatedBookData})
         }

   }
   catch(err)
   {
      console.log(err.message)
   }
}

module.exports.storeBookData=storeBookData
module.exports.storeAuthorData=storeAuthorData
module.exports.storePublisherData=storePublisherData
module.exports.getBookData=getBookData
module.exports.updateBook=updateBook
