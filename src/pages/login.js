import React from 'react'
import { useAuth } from '../auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const {login} = useAuth();
    const [name ,setName]= useState("");
    const navigate = useNavigate();
  return (
    <div>
        <h1>LOGIN</h1>
        <label>
            username
        </label>
        <input type='text' name='name' id='name' value={name} placeholder='enter username' onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={()=>{login(name); navigate('/',{replace: true})}}>login</button>

    </div>
  );
};