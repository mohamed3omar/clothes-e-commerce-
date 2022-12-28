import React from 'react'
import Card from './Card'
import Box from '@mui/material/Box'
function Slider() {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginY: '50px',
                gap:'10px',
                flexWrap:'wrap',
                maxWidth: '100%',
            }
            }
        >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Box>
    )
}

export default Slider
