const mongoose = require('mongoose')
console.log('you are in connection ');
mongoose.connect('mongodb://localhost:27017/Egar',(err) => {
    if(err){
        console.log(err);
    }
    else{
      console.log(" connected ") ;
    }
})