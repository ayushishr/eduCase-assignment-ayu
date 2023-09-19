import React, { useEffect } from 'react'
import SignupPageComponent from '../components/SignupPageComponent'

function SignupPage() {
    useEffect(()=>{
        document.title = 'Create Your Own Account on PopX'
    },[])
    return (
        <SignupPageComponent />
    )
}

export default SignupPage
