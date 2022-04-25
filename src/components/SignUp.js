import React, { useState } from 'react'

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const collectData = () => {
        console.log(name);
    }
  return (
    <div className='register'>
        <h1> Register </h1>
        <input className='inputBox' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}  value={name}/>

        <input className='inputBox' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}  value={email} />

        <input className='inputBox' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}  value={password} />

        <button onClick={collectData} className='appButton' type='button'>Sign Up</button>
    </div>
  )
}

export default SignUp