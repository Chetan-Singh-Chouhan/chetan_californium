const d = new Date()
function printDate(){
    console.log(d.getDate())
}
function printMonth(){
    console.log(d.getMonth())
}
function getBatchInfo(){
    console.log("Californium, W3D4, the topic for today is Nodejs module system")
}
module.exports.date=printDate
module.exports.month=printMonth
module.exports.batch=getBatchInfo