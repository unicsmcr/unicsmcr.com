// src/components/TimeLineFolder/LoginButton.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/Auth';
import LoginForm from './LoginForm';

const LoginButton = () => {
  const { user, logout, isLoading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {user ? (
        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
        >
          {isLoading ? 'Logging out...' : `Logout (${user.email})`}
        </button>
      ) : (
        <button
          onClick={() => setShowLogin(true)}
          disabled={isLoading}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Admin Login'}
        </button>
      )}

      {showLogin && !user && (
        <LoginForm 
          onClose={() => setShowLogin(false)} 
        />
      )}
    </>
  );
};

export default LoginButton;