'use client'

import { useState } from 'react'
import { Lock, AlertCircle } from 'lucide-react'

interface AdminLoginProps {
  onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in production use proper authentication
    const correctPassword = 'admin123nusantara'
    
    if (password === correctPassword) {
      setError('')
      onLogin()
    } else {
      setError('Password salah. Coba lagi.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-lg max-w-md w-full p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-foreground mb-2">Admin Panel</h1>
        <p className="text-center text-muted-foreground mb-6">
          Nusantara Cultural Atlas
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password Admin
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <AlertCircle className="w-4 h-4 text-destructive" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Demo Password: admin123nusantara
        </p>
      </div>
    </div>
  )
}
