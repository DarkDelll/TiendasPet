import React from 'react'
import {ShoppingCartOutlined} from '@mui/icons-material/';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useCarrito } from './CustomProvider';


const CartWidget = () => {

  const {totalProductos} = useCarrito()

  return (
    <div className='Cart'>
        <IconButton component={Link} to={'/carrito'} color='inherit' edge="end" aria-label="Cart icon" >
        <Badge badgeContent={totalProductos} color='buttoncolor'>
        <ShoppingCartOutlined></ShoppingCartOutlined>
        </Badge>
        </IconButton>
    </div>
  )
}

export default CartWidget