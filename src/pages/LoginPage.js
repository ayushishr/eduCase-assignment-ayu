import React, { useEffect } from 'react'
import LoginPageComponent from '../components/LoginComponent'

function LoginPage() {
    useEffect(()=>{
        document.title = 'Login to PopX'
    },[])
    return (
        <LoginPageComponent />
    )
}

export default LoginPage