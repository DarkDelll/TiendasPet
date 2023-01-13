import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography component={Link} to={'/'} variant="h4" color={'inherit'} sx={{ flexGrow: 1, textDecoration:'none'}}>
        Tienda Pet
        </Typography>
        <Stack direction='row' spacing={2}>
        <Button component={Link} to={'/products/electronics'}color='inherit' >Electronicos</Button>
        <Button component={Link} to={'/products/clothes'} color='inherit'>Ropa</Button>
        <CartWidget/>
        </Stack>
      </Toolbar>
    </AppBar>
    
  )
}

export default NavBar