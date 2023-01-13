import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/products/:category" element={<ItemListContainer/>}/>
        <Route path="/items/:id" element={<ItemListContainer/>}/>
     </Routes>
    </main>
  )
}

export default Main