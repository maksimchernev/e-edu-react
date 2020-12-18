import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SettingsTab } from '../components/settingstab'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hooks'

export const Settings = () => { 

const [user,setUser] = useState(null)  
const auth = useContext(AuthContext)
const [rendered, setRendered] = useState(false);
const {loading,request} = useHttp() 

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
}, [getUser,rendered]);


    return (
        <div>
            
          { !loading && user && <SettingsTab user= {user} />}
        </div>
    )
}
