const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const address = require('address')
const moment = require('moment');
const app = express();

 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    function(req,res,next){
     let mycurrentIpAddress = address.ip()  //it will fetch my system ip address
     let currentTimeDate = moment().format('YYYY-MM-DD, h:mm:ss')  //it format and store my current date and time
     let myCurrentRoute = req.originalUrl
     console.log(currentTimeDate,mycurrentIpAddress,myCurrentRoute)
     next()
})
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
