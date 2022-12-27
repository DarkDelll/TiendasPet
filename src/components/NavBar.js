import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='Header__nav'>
        <a href="">Productos</a>
        <a href="">Contacto</a>
        <CartWidget/>
    </nav>

  )
}

export default NavBar