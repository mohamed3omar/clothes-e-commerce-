import React from 'react'
import Card2 from './Card2'
import Box from '@mui/material/Box'
function Cards2() {
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
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
            <Card2/>
        </Box>
    )
}

export default Cards2
