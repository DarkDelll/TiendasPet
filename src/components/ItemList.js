import React from 'react'
import Grid from '@mui/material/Grid'
import Item from './Item'


const ItemList = ({productos}) => {

  return (
    <>
    {productos.map((producto)=>{
        return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
          <Item producto={producto}/>
      
        </Grid>)
      })}
    </>
  )
}

export default ItemList