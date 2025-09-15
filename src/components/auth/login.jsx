// src/components/auth/Login.jsx
import React, { useState, useContext } from 'react';
import { User, Shield, ArrowRight, AlertCircle } from 'lucide-react';
import { AuthContext } from '../../App';
import { authenticateUser } from '../../data/users';
import { APP_NAME } from '../../utils/constants';

const Login = () => {
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    // Mock authentication delay
    setTimeout(() => {
      const user = authenticateUser(email, password, userType);
      
      if (user) {
        login(user, userType);
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">{APP_NAME}</h1>
          </div>
          <div className="text-sm text-slate-300">
            Smart Recruitment Platform
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          
          {/* User Type Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Welcome Back
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setUserType('student')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === 'student'
                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <User className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Student</div>
              </button>
              
              <button
                onClick={() => setUserType('admin')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  userType === 'admin'
                    ? 'border-teal-500 bg-teal-50 text-teal-700'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                }`}
              >
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Club Admin</div>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          )}

          {/* Demo Credentials Info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 text-sm mb-2">Demo Credentials:</h4>
            <div className="text-xs text-blue-700">
              <div className="mb-1">
                <strong>Student:</strong> student@test.com / password
              </div>
              <div>
                <strong>Admin:</strong> admin@tech.com / password
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 font-semibold"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <span>
                    {userType === 'student' ? 'Access Dashboard' : 'Access Admin Panel'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Forgot password?
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="text-teal-600 hover:text-teal-700">
              Create account
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 pb-4">
        Making club recruitment transparent and efficient
      </div>
    </div>
  );
};

export default Login;