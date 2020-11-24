const express=require('express')
const config=require('config')
const mongoose=require('mongoose')


var app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/data', require('./routes/data'))
app.use('/api/user', require('./routes/user'))

const PORT=config.get('port') || 5000

async function start(){
    try {
    await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    app.listen(PORT, () =>console.log(`App start on ${PORT}`))
    }catch(e){
       console.log('Server Error', e.message)
       process.exit(1)
    }
}
start()
