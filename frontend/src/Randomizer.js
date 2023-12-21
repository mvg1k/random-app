import React, { useState } from 'react';
import './Randomizer.css'; // Стилі специфічні для цього компонента

function Randomizer() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setResult(randomNumber);
    setHistory(prevHistory => [...prevHistory, randomNumber]);
  };

  return (
    <div className="randomizer-container">
      <div className="login-section">
        {/* Тут буде компонент логіна */}
      </div>
      <h1>Randomizer</h1>
      <div className="circle">{result}</div>
      <button onClick={generateRandomNumber}>Генерувати число</button>
      <div className="history">
        <h2>Історія:</h2>
        {history.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    </div>
  );
}

export default Randomizer;
