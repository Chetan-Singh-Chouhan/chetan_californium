function trim(){
    let string="  functionUp   "
    console.log(string.trim())
}
function changeToLowerCase(){
    let string="CHETAN"
    console.log(string.toLowerCase())
}
function changeToUpperCase(){
    let string="chetan"
    console.log(string.toUpperCase())
}
module.exports.trim=trim
module.exports.upperCase=changeToLowerCase
module.exports.lowerCase=changeToUpperCase