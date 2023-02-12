import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'



const ItemQuantitySelector = ({stock, onAdd}) => {
    const [counter , setCounter] = useState(1)
    const [disabled, setDisabled] = useState(false)

    const handleSuma = ()=>{
        if(counter < stock){
            setCounter(counter + 1)
        }else{
            setDisabled(true)
        }
    }
    const handleResta = ()=>{
        if (counter > 1 ){
            setCounter(counter - 1)
        }
        if(counter <= stock){
            setDisabled(false)
        }
    }
    const handleConfirmar = ()=>{
        onAdd(counter)
    }
    

  return (
    <div>
        <Box width='350px' sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Button  disabled = {disabled} variant='contained' color='buttoncolor' sx={{p:1}} onClick={handleSuma}>+</Button>
        <Typography variant="body2" color="initial" sx={{p:1}}>{counter}</Typography>
        <Button variant='contained' color='buttoncolor' sx={{p:1}} onClick={handleResta}>-</Button>
        </Box>
        <Box width='350px' sx={{p:1,display:'flex', flexDirection:'column',}}>
        <Button variant='contained' color='buttoncolor' sx={{p:1}}onClick={handleConfirmar}>Agregar Al Carrito</Button>
        </Box>
    
    </div>
  )
}

export default ItemQuantitySelector