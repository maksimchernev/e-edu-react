import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Lk } from '../components/lk'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'
import { useMessage } from '../hooks/message.hooks'

export const PersonalAccount = () => {

  const [user,setUser] = useState(null)  
  const message = useMessage()
  const auth = useContext(AuthContext)
  const {loading, request} = useHttp() 
  const [rendered, setRendered] = useState(false);
  
  const getUser = useCallback( async () => {
    try{
      const data = await request(`/api/data/getData/${auth.userId}`,'GET',null,{ 
            Authorization: `Bearer ${auth.token}`
        })
        
        setUser(data)
    }catch(e){
    }
  
}, [auth.token,auth.userId, request])

useEffect(() => {
  if(rendered){
      getUser()
  }
  
  if( ! rendered ) {
      setRendered(true);
  }
}, [getUser]);


    return (
        <div>
          <Lk/>
        </div>
    )
}