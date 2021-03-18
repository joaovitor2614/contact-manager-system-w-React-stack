import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/list">Contact list</NavLink>
            <NavLink to="/create">Novo contato</NavLink>
        </div>
    )
}

export default Header