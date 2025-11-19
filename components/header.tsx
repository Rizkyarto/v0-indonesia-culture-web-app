'use client'

import { useState } from 'react'
import { Menu, X, MapPin, Calendar, Home, Settings } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  activeSection: 'home' | 'explorer' | 'events'
  setActiveSection: (section: 'home' | 'explorer' | 'events') => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'explorer', label: 'Jelajahi Peta', icon: MapPin },
    { id: 'events', label: 'Jadwal Event', icon: Calendar },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Nusantara Atlas</h1>
              <p className="text-xs text-muted-foreground">Ensiklopedia Budaya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center gap-2 pb-2 border-b-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-primary border-primary'
                      : 'text-muted-foreground border-transparent hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
            <Link
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors font-medium text-sm"
            >
              <Settings className="w-4 h-4" />
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as any)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors font-medium"
            >
              <Settings className="w-5 h-5" />
              <span>Admin Panel</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
