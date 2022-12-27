import React from 'react'
import Bannerr1 from '../../assets/images/banner1.webp'
import {Box , sx}  from '@mui/material'
function Banner1() {
    return (
    
        <Box
            align='center'
            component="img"
            sx={{
            height: 400,
            width: 350,
            
            maxHeight: { xs: 233, md: 167 , lg: 500 },
            maxWidth: { xs: 350, md: 250 , lg:500 },
            }}
            alt=".."
            src={Bannerr1} 
      />
    )

}

export default Banner1
