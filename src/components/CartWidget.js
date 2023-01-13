import React from 'react'
import {ShoppingCartOutlined} from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton'

const CartWidget = () => {
  return (
    <div className='Cart'>
        <IconButton color='inherit' edge="end" aria-label="Cart icon" >
        <ShoppingCartOutlined></ShoppingCartOutlined>
        </IconButton>
        <span className='CartNumber'>1</span>
    </div>
  )
}

export default CartWidget