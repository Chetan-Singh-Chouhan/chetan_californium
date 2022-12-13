const express = require('express');
const router = express.Router();
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
       }
   ]


router.post("/player", function(req, res) 
{
   let flag=false  //by default flag will be false
   for(let i=0;i<players.length;i++)
    {
        if(req.body.name==players[i].name){ // this will check if player's name is exist or not 
            flag=true
        }
    }
    if(flag==false){    // if flag is false that means player's name doesn't exist 
        players.push(req.body)  
        res.send(players)
    }
    else res.send("This name already exist")
})
module.exports = router;