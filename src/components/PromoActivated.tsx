// 1. Импортируем компоненты с TypeScript
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Alert,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// 2. Определяем тип для пропсов
type PromoActivatedProps = Record<string, never>;

// 3. Создаем компонент PromoActivated с типами
const PromoActivated: React.FC<PromoActivatedProps> = () => {
  return (
    // 4. Основной контейнер
    <Paper
      elevation={3}
      sx={{
        p: 6,           // Большой padding
        maxWidth: 600,
        mx: 'auto',
        mt: 8,
        textAlign: 'center', // Центрируем текст
      }}
    >
      {/* 5. Иконка успеха */}
      <CheckCircleIcon
        sx={{
          fontSize: 80,           // Крупная иконка
          color: 'success.main',  // Зеленый цвет
          mb: 3,                  // Отступ снизу
        }}
      />
      
      {/* 6. Основной заголовок */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        color="success.main"
      >
        Промокод применен!
      </Typography>
      
      {/* 7. Дополнительный заголовок */}
      <Typography 
        variant="h5" 
        component="h2" 
        gutterBottom 
        sx={{ mb: 4 }}
      >
        Поздравляем! Ваш промокод успешно активирован
      </Typography>

      {/* 8. Уведомление об успехе */}
      <Alert severity="success" sx={{ mb: 4, fontSize: '1.1rem' }}>
        <Typography variant="body1">
          Вам начислен бонус в размере 500 баллов!
        </Typography>
      </Alert>

      {/* 9. Кнопки для навигации */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        justifyContent: 'center', 
        mt: 4 
      }}>
        {/* 10. Кнопка "Вернуться на главную" */}
        <Button
          variant="contained"  // Заполненная кнопка
          component={Link}     // Превращаем в ссылку
          to="/"              // На главную
          size="large"        // Большой размер
        >
          Вернуться на главную
        </Button>
        
        {/* 11. Кнопка "Ввести другой промокод" */}
        <Button
          variant="outlined"   // Контурная кнопка
          component={Link}
          to="/"
          size="large"
        >
          Ввести другой промокод
        </Button>
      </Box>
    </Paper>
  );
};

// 12. Экспортируем компонент
export default PromoActivated;