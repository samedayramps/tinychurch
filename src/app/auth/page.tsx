'use client'

import { useState } from 'react'
import SignInForm from '@/components/auth/SignInForm'
import SignUpForm from '@/components/auth/SignUpForm'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setMode('signin')}
            className={`px-4 py-2 rounded-md transition-colors ${
              mode === 'signin'
                ? 'bg-foreground text-background'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`px-4 py-2 rounded-md transition-colors ${
              mode === 'signup'
                ? 'bg-foreground text-background'
                : 'hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            Sign Up
          </button>
        </div>
        {mode === 'signin' ? <SignInForm /> : <SignUpForm />}
      </div>
    </div>
  )
} 