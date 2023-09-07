import React from 'react'
import './Header.css'
function Header({text}) {
  return (
    <div className='header'>
        <div className='container'>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Header