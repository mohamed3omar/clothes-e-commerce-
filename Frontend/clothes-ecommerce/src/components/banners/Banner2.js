
import React from 'react'
import Bannerr2 from '../../assets/images/bannner2.webp'
import Box from '@mui/material/Box'
function Banner2() {
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
        src={Bannerr2} 
  />       
    )

}

export default Banner2
