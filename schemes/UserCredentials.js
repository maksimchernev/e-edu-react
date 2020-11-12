const {Schema, model, Types} = require('mongoose')

const schema = new Schema({  
    firstName:{type: String, required:true },
    secondName:{type: String, required:true },
    lastName:{type: String},
    mail:{type:String, required:true},
    password: {type:String, required:true},
})

module.exports = model('UserCredentials', schema)