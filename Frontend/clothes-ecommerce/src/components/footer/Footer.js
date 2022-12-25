import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="p" align='center' color='light'>
      {'Copyright © '}
        project 309
      {'@'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '14vh',
        backgroundColor:'#eee',
        color:'light',
        
      }}
    >

        <Container color='light'  align='center'  maxWidth="sm">
          <Copyright />

        </Container>
      
    </Box>
  );
}