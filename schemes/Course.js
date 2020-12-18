const {Schema, model, Types} = require('mongoose')

const schema = new Schema({  
    name:{type: String, required:true },
    field:{type: String, required:true},
    difficulty:{type: String, required:true }
})

module.exports = model('Course', schema)