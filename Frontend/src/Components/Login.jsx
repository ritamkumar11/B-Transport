import React from 'react'

const Login = ({ isOpen, onclose }) => {
  if (!isOpen) return null;

  return (
    <div className='loginForm' onClick={onclose}>
      <div className="LF2" onClick={e=> e.stopPropagation()}>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <button onClick={onclose}>Close</button>
      </div>
    </div>
  )
}

export default Login