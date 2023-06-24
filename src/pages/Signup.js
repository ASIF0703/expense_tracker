import React, { useState } from 'react'
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");



  return (
    <div>
      <form>
        <div>
          <div class="input-group">

            <div class="input-felid" id="nameFeild">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            </div>
                    
            <div class="input-felid">
              <i></i>
              <input type="email"  id= "email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div class="input-felid">
              <i></i>
              <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type='submit'>submit </button>
            
            <p>Forgot password? <a href='#'>Click Here</a></p>

        </div>
        </div>  
      </form>
    </div>
  )
}

export default Signup