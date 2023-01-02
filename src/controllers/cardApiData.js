const cardsModel = require('../models/card_db.js')
const { response } = require('express')

const getAllCard = async function (req, res){
   try{
         {
            let allCardsData = await cardsModel.find() //inserting Data in author Model
            res.send({data:allCardsData})
         }
   }
   catch(err){
      console.log(err.message)
   }
}
const createCard = async function (req, res){
   try{
        let nCount =  await cardsModel.count()
        let insertedCardData = await cardsModel.insertMany({
        ...req.body,
        cardNumber:"C00" + Number(nCount+1)
        })
       

        res.send({data:insertedCardData})
      }    

   catch(err){
      console.log(err.message)
   }
}


module.exports.createCard=createCard
module.exports.getAllCard=getAllCard

