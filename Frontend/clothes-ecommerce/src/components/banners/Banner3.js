import React from 'react'
import Bannerr3 from '../../assets/images/banner33.webp'
import Box from '@mui/material/Box'
function Banner3() {
    return (
        <Box
        maxWidth='xl'
        align='center'
        component="img"
        sx={{
        height: 600,
        width: '100%',
        marginTop: '20px',
        maxHeight: { xs: 233, md: 167 , lg: 500 },
        }}
        alt=".."
        src={Bannerr3} 
  />   
)

}

export default Banner3
