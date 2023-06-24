import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth'

export const Navbar = () => {

  const dataAuth = useAuth();
  const {user ,logout} = dataAuth;
  console.log(dataAuth)
  return (
    <div className='navbar'>
        <nav>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/About'>ABOUT</NavLink>
            <NavLink to='/Contact'>CONTACT US</NavLink>
            {
              user? <NavLink to='/logout' onClick={logout}>logout</NavLink> : <NavLink to='/Authent'>login</NavLink>
            }
        </nav>
    </div>
  )
}
