
import { useEffect,useState } from 'react'
import {Grid, Typography} from '@mui/material'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(false)

  const params = useParams()
  
  useEffect(()=>{
    const categoria = params.category ? '/category/'+ params.category : '/'
     const pedido = fetch('https://fakestoreapi.com/products'+ categoria)

     pedido
           .then((respuesta)=>{
           const productos = respuesta.json()
           return productos
         })
         .then((productos)=>{
           setProductos(productos)
           setCargando(true)
         })
         .catch((error)=>{
           console.log(error)
         })
    

  }, [params])

  const nuestrosProductos = params.category ? '' : "Nuestros productos"


  return (
    <div>
       <Box display="center" justifyContent="center" sx={{p:1}}><Typography variant='h4'>{nuestrosProductos}</Typography></Box>
      <Grid container justifyContent='center' alignItems='center' spacing={1} sx={{margin:'20px 4px 10px 4px'}}>
        {cargando ? null : 'cargando los productos...'}
      <ItemList productos={productos}/>
      </Grid>
    </div>
  )
}

export default ItemListContainer