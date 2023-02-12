import { Grid, CardMedia, Card, Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useCarrito } from './CustomProvider'
import ItemQuantitySelector from './ItemQuantitySelector'



const ItemDetail = ({producto}) => {
  const {onAddProduct} = useCarrito()
  const stock = 5

  const onAdd = (param)=>{
    onAddProduct(producto.image,producto.id,producto.title,param,stock)
    
  }

  
  return (
    <Container sx={{height:'100%'}}>
      <Grid container display='flex' alignContent='center' >
        <Grid item xs={12} lg={6} sx={{p:3}}>
          <Card>
          <CardMedia title="" component='img' image={producto.image}
          height="300"
          width='300' sx={{objectFit:'contain'}}/>
          </Card>
        </Grid>
        <Grid item sx={{p:3}}>
        <Box width='350px' sx={{display:'flex', flexDirection:'column',}}>
        <Typography variant='h5' sx={{p:2}}>{producto.title}</Typography>
        <Typography variant='body2'sx={{p:2}}>{producto.description}</Typography>
        <ItemQuantitySelector stock={stock} onAdd={onAdd} />
        </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ItemDetail