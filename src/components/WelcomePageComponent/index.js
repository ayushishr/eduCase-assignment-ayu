import React from 'react'
import './styles.css'
import LoginComponent from '../LoginComponent'

function WelcomePageComponent() {
    
    function handleLoginClick() {
        window.location.href = '/login'
    }
    function handleSignupClick(){
        window.location.href = '/signup'
    }
    return (
        <div className='container'>
            <div className='container-title'>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
            </div>
            <div className='buttons'>
                <button className='create-account-button' onClick={()=>handleSignupClick()}>Create Account</button>
                <button className='login-button' onClick={()=>handleLoginClick()}>Already Registered? Login</button>
            </div>
        </div>

    )
}

export default WelcomePageComponent