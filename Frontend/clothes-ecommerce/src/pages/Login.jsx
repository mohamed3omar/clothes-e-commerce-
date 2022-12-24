import React from 'react'
import {Grid, Paper, Avatar,TextField,Button,InputAdornment,Checkbox,Stack,FormControlLabel,Link,Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';

function Login() {
  const paperStyle ={padding:20, height:'70vh',width:400, margin:"20px auto"}
  const avatarstyle={backgroundColor:"#2C74B3"}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
          <Avatar style={avatarstyle}></Avatar>
          LogIn
          </Grid>
          <Stack  direction="column" spacing={2}>
          <TextField
          id="outlined-username-input"
          label="Username"
          type="Text"
          autoComplete="username"
          placeholder="Enter username"
          fullWidth
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          />
          <TextField
          id="outlined-Email-input"
          label="Email"
          type="Text"
          autoComplete="Email"
          placeholder="Email"
          fullWidth
          variant="standard"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter password"
          fullWidth
          variant="standard"
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HttpsIcon />
            </InputAdornment>
          ),
        }}
          />
          </Stack>
          <Stack  direction="column" spacing={2}>
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button  variant="contained" fullWidth color="primary">Login</Button>
          <Typography align="right">
            <Link href="#" underline='hover'>
              Forgot password ?
            </Link>
          </Typography>
          <Typography color='gray' align="center">
            OR
          </Typography>
          <Stack justifyContent="center" direction="row" spacing={6}>
          <Link href="https://gmail.com">
          <Avatar sx={{ bgcolor: '#c62828'}}>G</Avatar>
          </Link>
          <Link href="https://facebook.com">
          <Avatar sx={{ bgcolor: '#0d47a1'}}>f</Avatar>
          </Link>
          <Link href="https://www.linkedin.com/">
          <Avatar sx={{ bgcolor: '#1976d2'}}>in</Avatar>
          </Link>
          </Stack>
          <Typography align="center">Don't have an Account ?
            <Link href="./Register" underline='hover'>
              Sign Up
            </Link>
          </Typography>
          </Stack>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login;