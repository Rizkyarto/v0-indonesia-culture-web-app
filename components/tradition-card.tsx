'use client'

import { useState } from 'react'
import { MapPin, Calendar, BookOpen, X } from 'lucide-react'

interface TraditionCardProps {
  tradition: {
    name: string
    province: string
    category: string
    description: string
    history: string
    cultural_value: string
    image: string
    events: Array<{ name: string; date: string }>
  }
}

export default function TraditionCard({ tradition }: TraditionCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
      >
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
            {tradition.image}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-foreground line-clamp-2">{tradition.name}</h3>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap ml-2">
              {tradition.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span>{tradition.province}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {tradition.description}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all text-sm"
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-primary">{tradition.name}</h2>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{tradition.province}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Category Badge */}
              <div className="flex gap-2">
                <span className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full">
                  {tradition.category}
                </span>
              </div>

              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-6xl">
                {tradition.image}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Deskripsi
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tradition.description}
                </p>
              </div>

              {/* History */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Konteks Sejarah</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tradition.history}
                </p>
              </div>

              {/* Cultural Value */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Nilai Budaya</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tradition.cultural_value}
                </p>
              </div>

              {/* Related Events */}
              {tradition.events && tradition.events.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Event Terkait
                  </h3>
                  <div className="space-y-2">
                    {tradition.events.map((event, idx) => (
                      <div key={idx} className="bg-muted p-3 rounded-lg">
                        <p className="font-medium text-foreground">{event.name}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
