const mongoose = require ('mongoose')


console.log("before you are in  schema ");
const userschema = new  mongoose.Schema({
    
 name : String ,
 lastname : String ,
 age : Number,
})
 
let user = mongoose .model('user', userschema,'user')

module.exports = user