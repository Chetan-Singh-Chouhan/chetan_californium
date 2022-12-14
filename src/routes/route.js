const express = require('express');
const router = express.Router();
let persons= [
    {
    name: "Chetan",
    age: 10,
    votingStatus: false
 },
 {
    name: "Ravi",
    age: 20,
    votingStatus: false
 },
 {
    name: "Sachin",
    age: 70,
    votingStatus: false
 },
 {
    name: "Tarannum",
    age: 5,
    votingStatus: false
 },
 {
    name: "Reshma",
    age: 40,
    votingStatus: false
 }
 ]
 
router.post("/checkVotingAge", function (req, res){
    let qualifiedPersons=[]
    for(x in persons)
    {
       if(persons[x].age>=req.query.age) {
          persons[x].votingStatus=true
          qualifiedPersons.push(persons[x])
       }
    }
    res.send(qualifiedPersons)

})
module.exports = router;
