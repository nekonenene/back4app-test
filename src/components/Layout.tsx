import * as React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './Layout.module.scss';

const theme = createTheme();

export default function ButtonAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <NavLink to="/" color="inherit">
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <HomeIcon className={styles.homeIcon} />
                </IconButton>
              </NavLink>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Back4App Test
              </Typography>
              <Button color="inherit" onClick={() => console.log('Login!')}>Login</Button>
            </Toolbar>
          </Container>
        </AppBar>
        <main className={styles.content}>
          <Outlet />
        </main>
      </Box>
    </ThemeProvider>
  );
}
