import { AddShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent,  CardMedia, Typography } from '@mui/material'
import React from 'react'

const Item = ({producto}) => {
  return (
    <div>
        <Card sx={{maxWidth:250, display: 'flex', flexDirection: 'column'}}>
          <CardMedia 
          component="img"
          height="140"
          image={producto.image}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}/>
          <CardContent>
            <Typography variant="body2" color="inherit" align="center" noWrap >{producto.title} </Typography>
            <Typography variant="body1" color="secondary">{'$'+producto.price}</Typography>
            <CardActions>
                <Button fullWidth variant='contained' color='buttoncolor' endIcon={<AddShoppingCart/>}>Agregar</Button> 
            </CardActions>
          </CardContent>
        </Card>

    </div>
  )
}
//<Stack sx={{margin:0, width:250}}>
export default Item