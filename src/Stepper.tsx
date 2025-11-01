import { useState } from "react";

const Stepper = () => {
  // состояние счётчика
  const [count, setCount] = useState(0);
  // состояние шага
  const [step, setStep] = useState(1);

  // функции для изменения счётчика
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  // функция для изменения шага
  const changeStep = (newStep: number) => setStep(newStep);

  return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Текущее значение: {count}</h2>
          <h3>Текущий шаг: {step}</h3>
    
          <div style={{ margin: "10px" }}>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
        Изменить шаг:
        <button onClick={() => changeStep(1)}>1</button>
        <button onClick={() => changeStep(2)}>2</button>
        <button onClick={() => changeStep(5)}>5</button>
      </div>
    )
};

export default Stepper;

