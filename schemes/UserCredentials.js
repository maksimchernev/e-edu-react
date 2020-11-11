const {Schema, model, Types} = require('mongoose')

const schema = new Schema({  
    FirstName:{type: String, required:true },
    SecondName:{type: String, required:true },
    LastName:{type: String},
    Mail: {type:String, required:true},
    Password: {type:String, required:true},
})

module.exports = model('UserCredentials', schema)