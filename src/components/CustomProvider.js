import React, { createContext, useContext, useState } from 'react'

const contexto = createContext()
const Provider = contexto.Provider
export const useCarrito = () => {
    const contextValue = useContext(contexto)
    return contextValue
}

const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)
    const copyCart = [...carrito]

    const onAddProduct = (productImg,productId,productName,productQty,stock)=>{
        const producto = {
            image:productImg,
            id:productId,
            nombre: productName,
            cantidad: productQty,
            stock: stock
        }
        if (isOnCart(productId)){
            const cantidadprod= totalProductos
            carrito.map((x)=>{
                if(productId===x.id){
                        const cantidadTotal = x.cantidad + productQty 
                    if (cantidadTotal <= producto.stock){
                        setTotalProductos(cantidadprod + productQty)
                        x.cantidad += productQty      
                    }    
                }
            return true})
        } else{
        copyCart.push(producto)
        setCarrito(copyCart)

        const cantidadprod= totalProductos
        setTotalProductos(cantidadprod + productQty)
        }
        
    }

    const deleteProduct = (productId,cantidad)=>{
        carrito.map((x, index)=>{
            if(productId===x.id){
                copyCart.splice(index,1)
            }
        return true})
        setCarrito(copyCart)
        
        const cantidadprod= totalProductos
        setTotalProductos(cantidadprod - cantidad)
        

    }
    const emptyCart = ()=>{
        setCarrito([])
        setTotalProductos(0)

    }
    const isOnCart = (id)=>{
        const bool = carrito.filter(elemento=>elemento.id===id)
        if (bool.length!==0){
            return true
        }else{
            return false
        }    
    }
    
    const contextValue = {
        carrito: carrito  ,
        totalProductos: totalProductos,
        onAddProduct: onAddProduct,
        deleteProduct: deleteProduct,
        emptyCart:emptyCart 
    }


  return (
    <Provider value = {contextValue}>
        {children}
    </Provider>
  )
}

export default CustomProvider