const {Router} = require ('express')
const UserCredentials = require('../schemes/UserCredentials')
const router = Router()
const auth = require('../middleware/auth.middleware')

router.get(`/getData/:id`,auth, async (req,res)=>{
    try {
        console.log(req.params)
        if (req.user.userId == req.params.id)
        {
            const user = await UserCredentials.findById(req.params.id) 

            if (!user){
                return res.status(400).json({message:'Пользователь не найден'})
            }

            res.json(user)
        }
        else
        {
                res.status(400).json ({message: 'Ошибка, нет прав доступа'})
        }

    } catch(e){
        res.status(500).json({message: 'Ошибка, попытайтесь снова'}) 
    }
})

module.exports = router

