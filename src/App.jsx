
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Parollar mos kelmadi!");
      return;
    }

    console.log('Yuborilgan ma\'lumotlar:', formData);
    alert('Muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Hisob yaratish</h2>
        <p className="register-subtitle">Ma'lumotlaringizni kiriting</p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="username">Foydalanuvchi nomi</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username kiriting"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email manzil</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Parol</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Parolni tasdiqlang</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Ro'yxatdan o'tish
          </button>
        </form>

        <p className="login-redirect">
          Profilingiz bormi? <a href="#login">Tizimga kirish</a>
        </p>
      </div>
    </div>
  );
}

export default App;