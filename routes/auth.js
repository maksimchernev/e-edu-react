const {Router} = require ('express')
const router = Router()
const User = require('../schemes/User')
const UserCredentials = require('../schemes/UserCredentials')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');


router.post(
    '/login',
    [
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
                {userId:user.id},
                config.get('jwtSecret'),
                {   expiresIn: '1h' }

            )
            res.json({token, userId: user.id,})

        }catch(e){
        console.log(e)
        res.status(500).json({message: 'Ошибка, попробуйте снова'})    
        }
})

router.post(
    '/register',
    async (req,res) => {
    try{
       /* const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: "Неправильные данные"
            })
        }
        */

       const {firstName,secondName,lastName,mail,password} =  req.body 
       const candidate = await UserCredentials.findOne({mail})
       
       if (candidate) {
         return  res.status(400). json({message: "Место уже занято другим пользователем"})
       }


       const hashedPassword = await bcrypt.hash(password, 12)

       const userCredentials = new UserCredentials({_id: new mongoose.Types.ObjectId().toHexString(), firstName,secondName,lastName,mail,password: hashedPassword})

       const user = new User({_id:userCredentials.id,login:mail,password:hashedPassword})

       await userCredentials.save()
       await user.save()

       res.status(201).json({ message: "Пользователь успешно записан"})


    }catch(e){

        console.log(e)
        res.status(500).json({message: 'Ошибка, попытайтесь снова'})    
    
    }
})




module.exports = router