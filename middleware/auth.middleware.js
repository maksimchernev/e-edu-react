const jwt = require('jsonwebtoken')
const config = require('config')

module.exports=(req,res,next) =>{
    if (req.method === 'OPTIONS' ){
        return next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1]
        console.log(token)
        if (!token){
          return res.status(401).json({message:'Нет прав доступа'})
        }

        /*if (smth == true)
        {
            ///add google decoding
            next()
        }
        else{*/
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded
        next()
        //}
        //const decoded = jwt.verify(token, config.get('jwtSecret'))

      //  req.user = decoded
        //next()
    }catch (e){
        return res.status(401).json({message:'Нет прав доступа'})
    }
}