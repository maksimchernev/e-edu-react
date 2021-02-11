const {Router} = require ('express')
const UserCredentials = require('../schemes/UserCredentials')
const router = Router()
const auth = require('../middleware/auth.middleware')
const Course = require('../schemes/Course')

router.get(`/getData/:id`,auth, async (req,res)=>{
    try {
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

router.post('/getCourses', async (req,res)=>{

    let collection = null

    try {

        if (Object.keys(req.body).length === 0 && req.body.constructor === Object)
        {
            collection = await Course.find()
        }
        else{
            collection = await Course.find({_id: req.body})
        }
    

        res.json(collection)


    } catch(e){
        res.status(500).json({message: 'Ошибка, попытайтесь снова'}) 
        console.log(e)
    }
})

module.exports = router

