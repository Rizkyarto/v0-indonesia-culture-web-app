'use client'

interface HeroProps {
  setActiveSection: (section: 'home' | 'explorer' | 'events') => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
          Nusantara Cultural Atlas
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Jelajahi kekayaan tradisi, kesenian, dan warisan budaya Indonesia dari Sabang sampai Merauke. 
          Platform ensiklopedia budaya interaktif untuk generasi muda.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mb-12">
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="text-2xl sm:text-3xl font-bold text-primary">34</div>
            <div className="text-sm text-muted-foreground mt-1">Provinsi</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="text-2xl sm:text-3xl font-bold text-secondary">500+</div>
            <div className="text-sm text-muted-foreground mt-1">Tradisi & Kesenian</div>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="text-2xl sm:text-3xl font-bold text-accent">1000+</div>
            <div className="text-sm text-muted-foreground mt-1">Event Budaya</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setActiveSection('explorer')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Mulai Jelajahi Peta
          </button>
          <button
            onClick={() => setActiveSection('events')}
            className="px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
          >
            Lihat Jadwal Event
          </button>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Peta Interaktif</h3>
            <p className="text-sm text-muted-foreground">Eksplorasi tradisi berdasarkan lokasi geografis dengan peta interaktif yang mudah digunakan.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Jadwal Event</h3>
            <p className="text-sm text-muted-foreground">Temukan kapan upacara adat dan festival budaya diselenggarakan di berbagai daerah.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Chatbot Budaya</h3>
            <p className="text-sm text-muted-foreground">Tanya jawab langsung tentang tradisi dan budaya dengan asisten AI yang cerdas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
