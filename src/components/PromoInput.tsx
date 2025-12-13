// 1. Импортируем необходимые хуки и компоненты с TypeScript
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  Paper,
  Alert,
} from '@mui/material';

// 2. Определяем тип для пропсов (пустой объект, так как пропсов нет)
type PromoInputProps = Record<string, never>;

// 3. Константа с правильным промокодом (определяем как const для type safety)
const CORRECT_PROMO = 'REACT2024' as const;

// 4. Создаем компонент PromoInput с типами
const PromoInput: React.FC<PromoInputProps> = () => {
  // 5. Создаем состояние для хранения введенного промокода с типами
  const [promoCode, setPromoCode] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  
  // 6. Хук для навигации
  const navigate = useNavigate();

  // 7. useEffect для проверки промокода с TypeScript
  useEffect(() => {
    // Убираем пробелы и приводим к верхнему регистру для сравнения
    const normalizedCode = promoCode.trim().toUpperCase();
    
    if (normalizedCode === CORRECT_PROMO) {
      // 8. Если промокод правильный - редирект на страницу активации
      navigate('/activated');
    } else if (normalizedCode.length >= CORRECT_PROMO.length) {
      // 9. Если длина введенного текста равна или больше правильного промокода, но не совпадает
      setIsError(true);
    } else {
      // 10. Сбрасываем ошибку
      setIsError(false);
    }
  }, [promoCode, navigate]); // 11. Зависимости: promoCode и navigate

  // 12. Обработчик изменения поля ввода
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPromoCode(event.target.value);
  };

  return (
    // 13. Основной контейнер (бумажный стиль)
    <Paper
      elevation={3}
      sx={{
        p: 4,           // padding: 32px
        maxWidth: 600,  // максимальная ширина
        mx: 'auto',     // центрирование по горизонтали
        mt: 8,          // margin-top: 64px
      }}
    >
      {/* 14. Заголовок */}
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        align="center"
      >
        Активация промокода
      </Typography>
      
      {/* 15. Подзаголовок */}
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ mb: 4 }} 
        align="center"
      >
        Введите промокод для получения бонуса
      </Typography>

      {/* 16. Контейнер для содержимого */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        
        {/* 17. Поле ввода промокода */}
        <TextField
          fullWidth                    // Растягиваем на всю ширину
          label="Промокод"            // Лейбл
          variant="outlined"          // Стиль поля
          value={promoCode}           // Привязка к состоянию
          onChange={handleInputChange} // Обновление состояния
          error={isError}             // Отображение ошибки
          helperText={isError ? "Неверный промокод. Попробуйте еще раз" : ""} // Текст ошибки
          placeholder="Введите промокод" // Подсказка
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: '1.1rem',     // Увеличиваем размер шрифта
            },
          }}
        />

        {/* 18. Информационное сообщение с подсказкой */}
        <Alert severity="info" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Правильный промокод: <strong>{CORRECT_PROMO}</strong>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Попробуйте ввести его чтобы перейти на страницу подтверждения
          </Typography>
        </Alert>
      </Box>
    </Paper>
  );
};

// 19. Экспортируем компонент
export default PromoInput;