import React, { useState } from 'react'
import './Forms.css'
import { Button } from './Button'

function Forms() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const [message, setMessage] = useState('')
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!fullName){
      setMessage('Please enter your full name')
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)){
      setMessage('Please enter a valid email address')
      return;
    }
    if (!password1){
      setMessage('Please enter a password')
      return;
    }
    if (password1 !== password2){
      setMessage('Passwords do not match. Please try again.')
      return;
    }
    setMessage('Thank you for registering! You will receive a confirmation email shortly.')
    console.log('Form submitted with email:', email)

  }


  return (
    <div className='form-container'>
      <div className='card'> 
        <h2 className='card-header'>Sign Up</h2>
      <form className='form-input' onSubmit={handleSubmit}> 
      <div className='form-field'>
          <label htmlFor='full_name' className='form-label'>Full Name <span className='text-danger'>*</span></label>
          <input className='input-field' 
            type='full_name' 
            id='full_name' 
            name='full_name' 
            value={fullName} 
            placeholder='Enter your full name' 
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='email' className='form-label'>Email Address <span className='text-danger'>*</span></label>
          <input className='input-field' 
            type='email' 
            id='email' 
            name='email' 
            value={email} 
            placeholder='Enter your email address' 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='password1' className='form-label'>Password <span className='text-danger'>*</span></label>
          <input className='input-field' 
            type='password' 
            id='password1' 
            name='password1' 
            value={password1} 
            placeholder='Enter your password' 
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className='form-field'>
          <label htmlFor='password2' className='form-label'>Repeat Password <span className='text-danger'>*</span></label>
          <input className='input-field' 
            type='password' 
            id='password2' 
            name='password2' 
            value={password2} 
            placeholder='Repeat your password' 
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        
        <Button buttonStyle='btn--secondary'>Register</Button>
        {message && <p className='form-message'>{message}</p>}

      </form>
      </div>
    </div>
  )
}

export default Forms
