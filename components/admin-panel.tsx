'use client'

import { useState } from 'react'
import { LogOut, Plus, Edit2, Trash2, Save, X } from 'lucide-react'
import AdminLogin from './admin-login'
import TraditionManager from './admin-tradition-manager'
import EventManager from './admin-event-manager'
import StatsOverview from './admin-stats'

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'traditions' | 'events'>('dashboard')

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Kelola Data Budaya Indonesia</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8">
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'traditions', label: 'Tradisi & Kesenian' },
              { id: 'events', label: 'Event Budaya' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-4 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <StatsOverview />}
        {activeTab === 'traditions' && <TraditionManager />}
        {activeTab === 'events' && <EventManager />}
      </div>
    </div>
  )
}
