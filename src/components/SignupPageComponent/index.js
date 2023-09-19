import React, { useState } from 'react'
import './styles.css'
import toast from 'react-hot-toast'


function Index() {
    const [isYesChecked, setIsYesChecked] = useState(false)
    const [isNoChecked, setIsNoChecked] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')
    const [agency, setAgency] = useState()
    const [isPassVisible, setIsPassVisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (phone.length !== 10) {
            return toast.error("contact must be at least 10 digit ")
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters")
        }

        const userData = {
            name: name,
            phone: phone,
            email: email,
            password: password,
            company: company,
            agency: agency
        }
        setName('')
        setPhone('')
        setEmail('')
        setPassword('')
        setCompany('')
        setAgency('')
        setIsYesChecked(false)
        setIsNoChecked(false)
        localStorage.setItem('PopXUser', JSON.stringify(userData))
        // alert("Account Created Successfully")
        toast.success('Account Created Successfully')
        setTimeout(() => {
            window.location.href = '/login'
        }, 1500)
    }

    return (
        <div className='signup-container'>
            <div className='signup-container-title'>
                <h1>Create your<br />PopX account</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className='signup-form'>
                <div className="cutout-label-top">
                    <label htmlFor="nameInput">Full Name<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        type="text"
                        value={name}
                        required
                        id="nameInput"
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="cutout-label-top">
                    <label htmlFor="phoneInput">Phone Number<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        type="tel"
                        value={phone}
                        required
                        id="phoneInput"
                        placeholder='Enter your phone number'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="cutout-label-top">
                    <label htmlFor="emailInput">Email Address<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        type="email"
                        required
                        id="emailInput"
                        value={email}
                        placeholder='Enter your email address'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="cutout-label-top password-input">
                    <label htmlFor="passwordInput">Password<span style={{ color: '#DD4A3D' }}>*</span></label>
                    <input
                        type={isPassVisible ? 'text' : 'password'}
                        required
                        id="passwordInput"
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='eye-icon'>
                        {
                            isPassVisible
                                ? <span class="material-symbols-outlined eye" onClick={() => setIsPassVisible(!isPassVisible)}>visibility</span>
                                : <span class="material-symbols-outlined eye" onClick={() => setIsPassVisible(!isPassVisible)}>visibility_off</span>
                        }
                    </div>
                </div>
                <div className="cutout-label-top">
                    <label htmlFor="companyInput">Company Name</label>
                    <input
                        type="text"
                        id="companyInput"
                        value={company}
                        placeholder='Enter your Company Name'
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <p className='check-statement'>Are you an Agency?<span style={{ color: '#DD4A3D' }}>*</span></p>
                <div className='check-input' required>
                    <input
                        checked={isYesChecked}
                        onChange={() => {
                            setIsYesChecked(!isYesChecked)
                            setIsNoChecked(false)
                            setAgency('yes')
                        }}
                        value="yes"
                        type="checkbox"
                    />
                    <span>Yes</span>
                    <input
                        checked={isNoChecked}
                        onChange={() => {
                            setIsNoChecked(!isNoChecked)
                            setIsYesChecked(false)
                            setAgency('no')
                        }}
                        value="no"
                        type="checkbox"
                    />
                    <span>No</span>
                </div>
                <button type='submit' className='create-account-btn'>Create Account</button>
            </form>
        </div>
    )
}

export default Index
