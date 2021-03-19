import React, { useEffect } from 'react'
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'

const LogoutPage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const handleLogout = () => {
            dispatch(startLogout())
        }
        handleLogout()
        return () => handleLogout
           
    }, [])
   return (
       <div>
             
             <header />
       </div>
   )
}

export default LogoutPage