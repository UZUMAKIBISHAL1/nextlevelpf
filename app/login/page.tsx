'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await signIn('credentials', {
      phone,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray border border-gray-300 rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-white-800">Login to Your Account</h2>

        {/* OAuth Buttons */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full border border-gray-300 py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Continue with Google
          </button>
          <button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            className="w-full border border-gray-300 py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Continue with GitHub
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Phone/Password Login */}
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
