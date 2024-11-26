// src/components/TestAuth.jsx
import React from 'react';
import { useAuth } from '../context/Auth';

const TestAuth = () => {
  const auth = useAuth();
  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2>Auth Status:</h2>
      <pre>{JSON.stringify(auth.user, null, 2)}</pre>
    </div>
  );
};

export default TestAuth;