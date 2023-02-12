import { AddShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent,  CardMedia, Fade, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCarrito } from './CustomProvider'

 const Item = ({producto}) => {
  const stock = 5
  const [handleMouse, setHandlemouse] = useState(false)
  const {onAddProduct} = useCarrito()
  const mouseEnter = ()=>{
    setHandlemouse(true)
  }
  const mouseLeave = ()=>{
    setHandlemouse(false)
  }
  const handleClickAdd = ()=>{
    onAddProduct(producto.image,producto.id,producto.title,1,stock)
  }

  return (
    <div>
        <Card sx={{maxWidth:250, display: 'flex', flexDirection: 'column'}} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <CardMedia 
          component="img"
          height="140"
          image={producto.image}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <Fade in={handleMouse}>
            <Button variant="outlined" color='buttoncolor' component={Link} to={"/item/"+producto.id} sx={{textDecoration:'none'}}>Ver mas</Button>
            </Fade>
          <CardContent>
             <Typography variant="h6" color="secondary">{'$'+producto.price}</Typography>
            <Typography variant="body2" color="inherit" align="center" noWrap >{producto.title} </Typography>
            <CardActions>
                <Button fullWidth variant='contained' color='buttoncolor' onClick={handleClickAdd} endIcon={<AddShoppingCart/>}>Agregar</Button> 
            </CardActions>
          </CardContent>
        </Card>

    </div>
  )
}

export default Item