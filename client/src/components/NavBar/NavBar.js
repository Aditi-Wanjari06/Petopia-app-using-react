import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import { useState, useEffect } from 'react'

function NavBar() {

  const [User, setUser] = useState("")

  const Logout = () => {
    localStorage.clear()
    toast.success("Logged out successfully")

    setTimeout(() => {
      window.location.href = "/login"
    }, 2000)
  }

  const Login = () => {
    window.location.href = "/login"
  }
  

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = "/login"
    }

    console.log(currentUser)

  }, [])
  
      
  return (
    <>
    <div className='nav-bar-container'>
      <div className='logo-container'>
        <img src='https://i.pinimg.com/736x/af/fb/c9/affbc96be98edecba473e0e630069b3b.jpg'
          alt='logo'
          className='logo' />
        <p className='logo-name'>Petopia</p>
      </div>

      <ul
        type="none"
        className='list-container'>


        <Link to="/" >
          <li>Home</li>
        </Link>


        <Link to="/" >
          <li>About</li>
        </Link>


        <Link to="/" >
          <li>Signup</li>
        </Link>


        <li>{User ? (
          <li
            onClick={Logout}
            className='L-btn'
          >
            Logout
          </li>
        ) : (
          <li
            onClick={Login}
            className='L-btn'
          >
            Login
          </li>
        )}</li>

      </ul>

    </div>

<Toaster/>
  </>
  )
}

export default NavBar