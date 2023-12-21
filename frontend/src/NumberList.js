import React from 'react';
import './NumberList.css'; // Стилі специфічні для цього компонента

function NumberList({ history }) {
  // Відображення списку чисел

  return (
    <div className="number-list-container">
      <h2>Історія:</h2>
      {history.map((num, index) => (
        <p key={index}>{num}</p>
      ))}
    </div>
  );
}

export default NumberList;
