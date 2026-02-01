'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
      <div className="bg-white p-[32px] rounded-[8px] shadow-lg w-full max-w-[400px]">
        <h1 className="text-[24px] font-bold text-[#111827] mb-[8px] text-center">
          Create an account
        </h1>
        <p className="text-[14px] text-[#6b7280] mb-[24px] text-center">
          Start your 14-day free trial
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Full name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-[12px] text-[#6b7280] mb-[24px]">
            Password must be at least 8 characters
          </p>

          <Button fullWidth>Create account</Button>
        </form>

        <div className="my-[24px] flex items-center gap-[16px]">
          <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
          <span className="text-[12px] text-[#6b7280]">or continue with</span>
          <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
        </div>

        <button className="w-full p-[12px] rounded-[8px] border border-[#d1d5db] bg-white text-[#374151] text-[14px] font-medium flex items-center justify-center gap-[8px]">
          <span>🔵</span> Continue with Google
        </button>

        <p className="text-[14px] text-[#6b7280] text-center mt-[24px]">
          Already have an account?{' '}
          <a href="#" className="text-[#3B82F6] hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}
