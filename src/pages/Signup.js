import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <div>
          <div class="input-group">

            <div class="input-felid" id="nameFeild">
              <span><i class="fa-solid fa-user"></i><input type="text" placeholder="Name" required /></span>
            </div>
                    
            <div class="input-felid">
              <i></i>
              <input type="email"  id= "email" placeholder="email" required />
            </div>

            <div class="input-felid">
              <i></i>
              <input type="password" placeholder="password"/>
            </div>
            
            <p>Forgot password? <a href='#'>Click Here</a></p>

        </div>
        </div>  
      </form>
    </div>
  )
}

export default Signup