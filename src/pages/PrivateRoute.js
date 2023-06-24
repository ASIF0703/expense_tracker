import React from 'react'
import { useAuth } from '../auth'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const navigate = useNavigate();

    const {user } = useAuth();
    if(!user){
        return (<div>
                    <h1>login to access users</h1>
                    <button onClick={()=> navigate('/login')}> redirect</button>
        </div>

        )
    }
  return (
    children
  )
}

export default PrivateRoute