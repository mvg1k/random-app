import React from 'react';
import './Login.css'; // Стилі специфічні для цього компонента

function Login() {
  // Тут буде логіка для логіна

  return (
    <div className="login-container">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default Login;
