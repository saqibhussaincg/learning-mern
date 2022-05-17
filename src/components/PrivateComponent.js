import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'


const PrivateComponent = () => {

    // agar localstorage k andar user hai tou naviagate karo outlet per agar nahi hai tou navigate karo signup walay page per, user dosre page per nahi ja sakta 

    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to='/signup' />
}


export default PrivateComponent