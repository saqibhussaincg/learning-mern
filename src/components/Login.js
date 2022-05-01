import React from 'react'

function Login() {
  return (
    <div className='login'>
        <input type="text" placeholder='Enter Email' className='inputBox' />
        <input type="password" placeholder='Enter Password' className='inputBox' />

        <button className='appButton' type='button'>Login</button>
    </div>
  )
}

export default Login