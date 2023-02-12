import { Avatar, Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useCarrito } from './CustomProvider'
import ClearIcon from '@mui/icons-material/Clear';

const CartContext = () => {
  const {carrito, deleteProduct,emptyCart} = useCarrito()

  return (
    <div>
      <Box sx={{maxWidth:1500}}>
      <Grid container display='flex'  flexDirection='column' >
        <Box display="center" justifyContent="center" sx={{p:1}}>
      <Typography variant="h3" color="black">Carrito de compras</Typography>
        </Box>
      {carrito.map((producto)=>{
        const handleDelete = ()=>{
          deleteProduct(producto.id, producto.cantidad)
        }
        return (<Grid item = {producto.id} >
              <Box display="flex" alignItems='center' justifyContent='space-around' sx={{pt:2, pb:2}}>
                <IconButton onClick={handleDelete}><ClearIcon color='inherit'></ClearIcon></IconButton>
                <Avatar variant='square' src={producto.image} sx={{width:150, height:150 ,ml:10}}/>
                <Box display="flex" flexDirection="column" maxWidth='200px'>
                  <Typography variant="h6" color="secondary" >{producto.nombre}</Typography>
                  <Typography variant="body2" color="inherit" align="center" >{'cantidad: '+producto.cantidad} </Typography>
                </Box>
              </Box>
              <Divider variant="inset"  />
        </Grid>
        )
        
      })}
      <Box display="flex" justifyContent="flex-end"  sx={{p:2, mr:2}}>
        <Button variant='contained' color='buttoncolor' onClick={emptyCart}>Vaciar Carrito</Button>
        </Box>
      </Grid>
      </Box>
    </div>
  )
}

export default CartContext