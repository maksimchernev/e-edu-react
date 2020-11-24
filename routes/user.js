const {Router} = require ('express')
const UserCredentials = require('../schemes/UserCredentials')
const router = Router()
const auth = require('../middleware/auth.middleware')


router.put(`/updateUser/:id`,auth, async (req,res)=>{
    try {
        

            const user = await UserCredentials.findOne({_id: req.params.id}) 

            if (!user){
                return res.status(400).json({message:'Пользователь не найден'})
            }

            await User.updateOne(user, req.body)

            res.json({message:"Пользователь изменен"})   
            

    } catch(e){
        console.log(e)
        res.status(500).json({message: 'Ошибка, попытайтесь снова'}) 
    }
})

module.exports = router