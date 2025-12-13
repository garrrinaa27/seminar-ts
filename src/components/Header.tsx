import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      
      {/* Верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Промо-система
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Обычная ссылка */}
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Главная
            </Button>
            
            {/* Активная ссылка */}
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              sx={(theme) => ({
                textDecoration: 'none',
                color: 'inherit',
                '&.active': {
                  backgroundColor: theme.palette.action.selected,
                  borderRadius: 1,
                },
              })}
            >
              Ввести промокод
            </Button>
            
            {/* Ссылка для страницы активации */}
            <Button
              color="inherit"
              component={NavLink}
              to="/activated"
              sx={(theme) => ({
                textDecoration: 'none',
                color: 'inherit',
                '&.active': {
                  backgroundColor: theme.palette.action.selected,
                  borderRadius: 1,
                },
              })}
            >
              Активированный промокод
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Основное содержимое */}
      <Container component="main" sx={{ 
        mt: 4, 
        mb: 4, 
        flex: 1
      }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Header;