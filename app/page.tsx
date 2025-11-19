'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Explorer from '@/components/explorer'
import Events from '@/components/events'
import Chatbot from '@/components/chatbot'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState<'home' | 'explorer' | 'events'>('home')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'explorer' && <Explorer />}
      {activeSection === 'events' && <Events />}
      
      <Chatbot />
      <Footer />
    </div>
  )
}
