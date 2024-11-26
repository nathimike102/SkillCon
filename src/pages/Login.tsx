import React, { useState } from 'react';
import { login, signUp } from '../services/auth'; // Import Firebase auth functions
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Successfully signed in with Google');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success('Successfully logged in');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      toast.success('Account created successfully');
      setIsNewUser(false); // Switch to login view
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300 to-purple-200 opacity-40 blur-3xl"></div>
      </div>

      <div className="relative w-96 h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Animated Borders */}
        <div className="absolute inset-0 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-96 before:h-[500px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-purple-400 before:origin-bottom-right before:animate-rotate-slow before:z-10 after:absolute after:content-[''] after:top-[-50%] after:left-[-50%] after:w-96 after:h-[500px] after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-purple-500 after:origin-bottom-right after:animate-rotate-slow after:animation-delay-3000 after:z-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-96 before:h-[500px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-purple-600 before:origin-bottom-right before:animate-rotate-slow before:animation-delay-1500 before:z-10"></div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={isNewUser ? handleSignup : handleLogin}
          className="absolute inset-1 bg-white rounded-xl z-20 p-8 flex flex-col"
        >
          <h2 className="text-purple-800 text-2xl font-medium text-center tracking-wide">
            {isNewUser ? 'Create Account' : 'Welcome Back'}
          </h2>

          {/* Email Input */}
          <div className="relative w-full mt-8">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent border-b-2 border-purple-300 outline-none text-purple-900 text-base p-2 transition-all duration-300 ${
                isFocused.email || email ? 'border-purple-600' : ''
              }`}
              onFocus={() => setIsFocused((prev) => ({ ...prev, email: true }))}
              onBlur={() => setIsFocused((prev) => ({ ...prev, email: false }))}
            />
            <label
              htmlFor="email"
              className={`absolute left-0 text-purple-600 transition-all duration-300 ${
                isFocused.email || email ? 'text-xs -top-4' : 'text-base top-2'
              }`}
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative w-full mt-8">
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-transparent border-b-2 border-purple-300 outline-none text-purple-900 text-base p-2 transition-all duration-300 ${
                isFocused.password || password ? 'border-purple-600' : ''
              }`}
              onFocus={() => setIsFocused((prev) => ({ ...prev, password: true }))}
              onBlur={() => setIsFocused((prev) => ({ ...prev, password: false }))}
            />
            <label
              htmlFor="password"
              className={`absolute left-0 text-purple-600 transition-all duration-300 ${
                isFocused.password || password ? 'text-xs -top-4' : 'text-base top-2'
              }`}
            >
              Password
            </label>
          </div>

          {/* Important Links */}
          {!isNewUser && (
            <div className="flex justify-between text-sm text-purple-600 mt-6">
              <a href="#" className="hover:text-purple-800 transition-colors">
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white mt-6 py-3 rounded-lg cursor-pointer font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isNewUser ? 'Sign Up' : 'Login'}
          </button>

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full mt-4 py-3 px-4 border border-purple-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </svg>
            <span className="text-purple-800">Continue with Google</span>
          </button>

          {/* Toggle Account State */}
          <p className="text-center mt-4 text-sm text-purple-600">
            {isNewUser ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsNewUser(!isNewUser)}
              className="text-purple-800 font-semibold hover:text-purple-900 transition-colors"
            >
              {isNewUser ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
