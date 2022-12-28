import React from 'react'
import Bannerr1 from '../../assets/images/bannerr1.webp'
import Box  from '@mui/material/Box'
function Banner1() {
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
            src={Bannerr1} 
      />
    )

}

export default Banner1
