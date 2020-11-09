const db = require('../model/connect.js')
const user = require ('../model/users.js')
let newuser = user ({
    name : "dossB",
    lastname : "AburassB",
    age : "29",
})
newuser.save((err) => {
    if (err){
        console.log(err);
    }else{
        console.log("recored added ");
    }
})