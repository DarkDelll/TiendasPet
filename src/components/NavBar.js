import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AppDrawer from './AppDrawer'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
      <AppDrawer/>
        <Typography component={Link} to={'/'} variant="h4" color={'inherit'} sx={{ flexGrow: 1, textDecoration:'none'}}>
        Tienda Pet
        </Typography>
        <CartWidget/>
      </Toolbar>
    </AppBar>
    
  )
}

export default NavBar