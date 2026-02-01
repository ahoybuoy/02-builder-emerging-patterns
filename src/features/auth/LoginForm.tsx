'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
      <div className="bg-white p-[32px] rounded-[8px] shadow-lg w-full max-w-[400px]">
        <h1 className="text-[24px] font-bold text-[#111827] mb-[8px] text-center">
          Welcome back
        </h1>
        <p className="text-[14px] text-[#6b7280] mb-[24px] text-center">
          Sign in to your account
        </p>

        {error && (
          <div className="bg-[#FEE2E2] text-[#EF4444] p-[12px] rounded-[8px] mb-[16px] text-[14px]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center mb-[24px]">
            <label className="flex items-center gap-[8px] text-[14px] text-[#374151]">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-[14px] text-[#3B82F6] hover:underline">
              Forgot password?
            </a>
          </div>

          <Button fullWidth>Sign in</Button>
        </form>

        <p className="text-[14px] text-[#6b7280] text-center mt-[24px]">
          Don't have an account?{' '}
          <a href="#" className="text-[#3B82F6] hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
