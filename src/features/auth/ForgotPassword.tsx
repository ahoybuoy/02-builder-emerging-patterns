'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
        <div className="bg-white p-[32px] rounded-[8px] shadow-lg w-full max-w-[400px] text-center">
          <div className="w-[48px] h-[48px] bg-[#D1FAE5] rounded-full flex items-center justify-center mx-auto mb-[16px]">
            <span className="text-[#10B981] text-[24px]">✓</span>
          </div>
          <h1 className="text-[24px] font-bold text-[#111827] mb-[8px]">
            Check your email
          </h1>
          <p className="text-[14px] text-[#6b7280] mb-[24px]">
            We sent a password reset link to {email}
          </p>
          <a href="#" className="text-[14px] text-[#3B82F6] hover:underline">
            Back to sign in
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb]">
      <div className="bg-white p-[32px] rounded-[8px] shadow-lg w-full max-w-[400px]">
        <h1 className="text-[24px] font-bold text-[#111827] mb-[8px] text-center">
          Forgot password?
        </h1>
        <p className="text-[14px] text-[#6b7280] mb-[24px] text-center">
          No worries, we'll send you reset instructions.
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button fullWidth>Reset password</Button>
        </form>

        <p className="text-[14px] text-[#6b7280] text-center mt-[24px]">
          <a href="#" className="text-[#3B82F6] hover:underline">Back to sign in</a>
        </p>
      </div>
    </div>
  );
}
