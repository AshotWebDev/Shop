import React from 'react'
import './NavMenuItem.css'
import { NavLink } from 'react-router-dom'

function NavMenuItem({name, path}) {
  return (
    <NavLink className={({isActive})=> isActive ? 'active-item':''} to={path}>{name}</NavLink>
  )
}

export default NavMenuItem