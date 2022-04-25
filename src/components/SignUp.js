import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(name,email,password);

          // backend wali file se attach kar rahay hain register function se uthaya or poora link postman se
        let result = await fetch('http://localhost:5000/register', {

          method:'post', // jub bhi data save krna hota post use karte hain
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type':'application/json'
          },

        });


        result = await result.json()

        if(result){
          navigate('/')
        }
        console.log(result);
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