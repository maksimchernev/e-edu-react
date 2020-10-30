const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    FirstName: {type: String, required:true },
    SecondName: {type:String,required:true},
    password: {type:String, required:true}
})

module.exports = model('User', schema)