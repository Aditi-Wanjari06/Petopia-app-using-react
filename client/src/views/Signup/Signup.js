import React from 'react'
import "./Signup.css"
import { useState } from 'react'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import {Link} from "react-router-dom"

function SignUp() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    mobile_no: ''
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      mobile_no: user.mobile_no
    })

    if (response.data.success) {
      toast.success(response.data.message)

      setUser({
        fullName: '',
        email: '',
        password: '',
        mobile_no: ''
      })
    }
    else {
      toast.error(response.data.message)
    }

  }

  return (
    <div>
      <h1 className='auth-heading'>User Registration</h1>

      <form className='auth-form'>
        <input
          type='text'
          placeholder='FullName'
          className='user-input'
          value={user.fullName}
          onChange={(e) => {
            setUser({ ...user, fullName: e.target.value })
          }} />

        <input
          type='email'
          placeholder='Email'
          className='user-input'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }} />

        <input
          type='password'
          placeholder='Password'
          className='user-input'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }} />

        <input
          type='number'
          placeholder='Mobile number'
          className='user-input'
          value={user.mobile_no}
          onChange={(e) => {
            setUser({ ...user, mobile_no: e.target.value })
          }} />

        <button
          type='button'
          className='btn-auth'  
          onClick={signup}>
          Register
        </button>
      </form>

<Link to = '/login' className='auth-link'>Already have an account? Login</Link>

      <Toaster />
    </div>
  )
}

export default SignUp