import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <ul className='link-tag'>
        <li><a href='/Registration'>Registration</a></li>
        <li><a href='/Login'>Login</a></li>
        <li><a href='/Userinfo'>UserDetails</a></li>
      </ul>


    </>
  )
}

export default Navbar