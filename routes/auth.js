const {Router} = require ('express')
const router = Router()
const User = require('../schemes/User')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')


router.post(
    '/login',
    [
       // check('email', 'Pls enter the correct email').normalizeEmail().isEmail(),
       check('login', 'Введите имя пользователя').exists(), 
       check('password', 'Введите пароль').exists(),
      
    ],
    async (req,res) => {
    try{
            const errors = validationResult(req)
            
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Ошибка данных"
                    
                })
            }
     
            const {login, password} = req.body
            
           const user = await User.findOne({login})

           console.log(user)
            
            if (!user) {
                return res.status(400).json({ message:'Неправильный логин или пароль' })
            }


            const isMatch = await bcrypt.compare(password, user.password)


            if (!isMatch) {
                return res.status(400).json({ message: 'Неправильный логин или пароль'})
            }

            const token = jwt.sign(
                { user: 'admin' },
                config.get('jwtSecret'),
                {   expiresIn: '3h' }

            )
            res.json({token, userId: user.id,})

        }catch(e){
        console.log(e)
        res.status(500).json({message: 'Ошибка, попробуйте снова'})    
        }
})



module.exports = router