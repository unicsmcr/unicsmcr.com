// src/components/TimeLineFolder/LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/Auth';
import PropTypes from 'prop-types';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const success = await login(email, password);
    if (success) {
      onClose();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white font-bold">Admin Login</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default LoginForm;