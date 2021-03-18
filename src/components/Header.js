import React from 'react'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(startLogout())
    }
    return (
        <div>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/list">Contact list</NavLink>
            <NavLink to="/create">Novo contato</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header