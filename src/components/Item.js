import { AddShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent,  CardMedia, Fade, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  const [handleMouse, setHandlemouse] = useState(false)
   
  const mouseEnter = ()=>{
    setHandlemouse(true)
  }
  const mouseLeave = ()=>{
    setHandlemouse(false)
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
                <Button fullWidth variant='contained' color='buttoncolor' endIcon={<AddShoppingCart/>}>Agregar</Button> 
            </CardActions>
          </CardContent>
        </Card>

    </div>
  )
}
