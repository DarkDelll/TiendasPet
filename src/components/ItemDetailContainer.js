import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState([])
    const params = useParams()
  
  useEffect(()=>{
    const productid = params.id ? '/'+ params.id : '/'
     const pedido = fetch('https://fakestoreapi.com/products'+ productid)

     pedido
           .then((respuesta)=>{
           const producto = respuesta.json()
           return producto
         })
         .then((producto)=>{
          setProductos(producto)
         })
         .catch((error)=>{
           console.log(error)
         })
    

  }, [params])

    

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer