import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { style } from '@mui/system';
import men from '../../men.png';

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    <div className={styles.fondologin}>
      <Grid container component="main" sx={{ height: '60vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${men})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate >
              <TextField
                margin="normal"
                required
                fullWidth
                color='grey'
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                variant='standard'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                color='grey'
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant='standard'
              />

              <Button className={styles.botonInicio}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/registro" variant="body2" style={{ color: 'black', textDecorationColor: 'black', marginLeft:'220px'}}>
                    {"Sign up"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;