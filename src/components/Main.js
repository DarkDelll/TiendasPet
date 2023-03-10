import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

const Main = () => {
  return (
    <main>

      <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/products/:category" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Cart/>}/>
          </Routes>
    </main>
  )
}

export default Main