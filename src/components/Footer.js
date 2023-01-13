import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Paper sx={{ position: 'relative', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction label="Creado el &copy; 2023 "  />
        </BottomNavigation>
      </Paper>
  )
}

export default Footer