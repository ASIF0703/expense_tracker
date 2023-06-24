import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Authent = () => {
  return (
<div class="container">
        <div class="form-box">
            <h1 id="title">Authentication</h1>
            <form>
                <nav>
                  <NavLink to={'/Authent/signup'}>Signup</NavLink>
                  <NavLink to='/Authent/login'>Signin</NavLink>
                  </nav> 
                  <Outlet/>
            </form>
        </div>

    </div>
  )
}

export default Authent