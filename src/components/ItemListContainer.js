
import { useEffect,useState } from 'react'
import {Grid} from '@mui/material'
import ItemList from './ItemList'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{

    const pedido = fetch('https://fakestoreapi.com/products')

    pedido
          .then((respuesta)=>{
          const productos = respuesta.json()
          return productos
        })
        .then((productos)=>{
          setProductos(productos)
        })
        .catch((error)=>{
          console.log(error)
        })

  },[])




  return (
    <div>
      <Grid container justifyContent='center' alignItems='center' spacing={1}>
      <ItemList productos={productos}/>
      </Grid>
    </div>
  )
}

export default ItemListContainer