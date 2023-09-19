import React, { useEffect, useState } from 'react'
import './styles.css'
import toast from 'react-hot-toast';


function Index() {
    let userData = JSON.parse(localStorage.getItem('PopXUser'));
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [entryFilled, setEntryFilled] = useState(false)
    const [isPassVisible, setIsPassVisible] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (!userData) {
            return toast.error("Please create your profile.")
            
        }
        const userEmail = userData.email
        const userPassword = userData.password

        if (userEmail === email && userPassword === password) {
            toast.success(`${userData.name} you Logged in`)
            // alert(`${userData.name} you Logged in`)
        
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 1500)
        }
        else {
            toast.success('Invalid email or password')
            // alert('Invalid email or password')
        
        }
    }

    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setEntryFilled(true)
        }
        else {
            setEntryFilled(false)
        }
    }, [email, password])

    return (
        <div className='login-container'>
            <div className='login-container-title'>
                <h1>Signin to your<br />PopX account</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <form onSubmit={(e) => { handleSubmit(e) }} className='login-form'>
                <div className="cutout-label-top">
                    <label htmlFor="emailInput">Email Address<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        type="email"
                        value={email}
                        required
                        id="emailInput"
                        placeholder='Enter email address'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="cutout-label-top">
                    <label htmlFor="passwordInput">Password<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        value={password}
                        type={isPassVisible ? 'text' : 'password'}
                        required
                        id="passwordInput"
                        placeholder='Enter password'
                        onChange={(e) => setPassword(e.target.value)}
                        style={{paddingRight:'40px'}}
                    />
                    <div className='eye-icon'>
                        {
                            isPassVisible
                                ? <span class="material-symbols-outlined eye" onClick={() => setIsPassVisible(!isPassVisible)}>visibility</span>
                                : <span class="material-symbols-outlined eye" onClick={() => setIsPassVisible(!isPassVisible)}>visibility_off</span>
                        }
                    </div>
                </div>
                <button type='submit' className={entryFilled ? 'login-btn-valid login-btn' : 'login-btn'}>Login</button>
            </form>

        </div>
    )
}


export default Index
