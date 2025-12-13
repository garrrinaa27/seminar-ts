import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Импорт компонентов
import Header from './components/Header';
import PromoInput from './components/PromoInput';
import PromoActivated from './components/PromoActivated';

// Создание темы Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<PromoInput />} />
              <Route path="activated" element={<PromoActivated />} />
            </Route>
            <Route path="*" element={
              <Container sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h4" gutterBottom>
                  404 - Страница не найдена
                </Typography>
                <Button variant="contained" component={Link} to="/">
                  Вернуться на главную
                </Button>
              </Container>
            } />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;