import {useState, useCallback, useEffect} from 'react'
import { useHttp } from './http.hooks'

const storageName = 'userData'

export const useAuth = () => {
    const[token, setToken] = useState(null)
    const[userId, setUserId] = useState(null)
    const [ready,setReady] = useState(false)
    const {request} = useHttp()
    

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({
            userId:id, 
            token:jwtToken
        }))
    }, [])

    const updateHandler = useCallback( async () => {
        
        try{
            const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token){
         
            const temp = data.token

            login(data.token, data.userId)   

        }
        setReady(true)
        } catch(e) {

        }
    }, [login,request] )

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
    
        updateHandler()

    }, [updateHandler])

    return{login, logout, token, userId}
}