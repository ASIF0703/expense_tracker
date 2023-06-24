import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const navigateBack =()=>{
        navigate('/');
    };
  return (
    <div> 
        <h1>404 NotFound</h1>
        <button onClick={navigateBack}>go back</button>
    </div>
    
  );
}

export default NotFound