const express = require('express');
const router = express.Router();
const printIntro= require('../logger/logger')
const getDate= require('../util/helper')
const upperLower = require('../validator/formattor')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    console.log("Problem 1")
    printIntro.intro()
    console.log("Problem 2")
    getDate.date()
    getDate.month()
    getDate.batch()
    console.log("Problem 3")
    upperLower.trim()   
    upperLower.upperCase()
    upperLower.lowerCase()
    console.log("Problem 4")
    console.log(lodash.chunk(["January","February","March","April","May","June","July","August","September","October","November","December"],4))
    //program that print first 10 odd numbers
    let oddNumber=[],i=1;j=1
    while(j<=10)
    {
      if(i%2!=0)
      {
        oddNumber.push(i)
        j++
      }
    i++
    }
    console.log(lodash.tail(oddNumber))   //it will eleminate first element of array
    console.log(lodash.union([1,2],[2,4,3],[7,2,4],[5,3,2],[1,5,6])) //it will eliminate all duplicates values in all arrays
    console.log(lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))
    res.send('My first ever api!')
});

module.exports = router;