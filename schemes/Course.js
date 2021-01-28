const {Schema, model, Types} = require('mongoose')

const schema = new Schema({  
    title:{type: String, required:true },
    duration:{type: String},
    price:{type: String},
    skills:{type: String},
    certificates:{type:String},
    organization:{type:String},
   
})

module.exports = model('Courses1', schema)