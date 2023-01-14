
import { Drawer, Box, Typography, Divider, List, ListItemButton, ListSubheader, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const AppDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
    <Button onClick={()=>setIsDrawerOpen(true)}>
        <MenuIcon color='drawer' size='large'/>
    </Button>
    
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} >
        <Box p={2} width='230px' textAlign='center' role='presentation' >
            <Typography variant="h5" color="initial"  component={Link} to={'/'} sx={{ flexGrow: 1, textDecoration:'none'}}>Tienda Pet</Typography>
            <Divider/>
            
            <List>
                <ListSubheader key={0}>
                    Categorias
                </ListSubheader>
                <Divider/>
                <ListItemButton key={1} component={Link} to={'/products/electronics'}>
                    Electronicos
                </ListItemButton>
                <ListItemButton key={2} component={Link} to={'/products/jewelery'}>
                    Joyeria
                </ListItemButton>
                <ListItemButton key={3} component={Link} to={'/products/men%27s%20clothing'}>
                    Ropa Hombre
                </ListItemButton >
                <ListItemButton key={4} component={Link} to={'/products/women%27s%20clothing'}>
                    Ropa Mujer
                </ListItemButton>
            </List>
        </Box>
    </Drawer>
    
    </>
  )  
}

export default AppDrawer