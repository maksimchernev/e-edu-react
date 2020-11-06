const {Schema, model, Types} = require('mongoose')

const schema = new Schema({  
    Login: {type: String, required:true },
    Password: {type:String, required:true}
})

module.exports = model('User', schema)