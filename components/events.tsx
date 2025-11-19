'use client'

import { useState, useMemo } from 'react'
import { Search, Calendar, MapPin, Filter } from 'lucide-react'
import { eventData } from '@/lib/event-data'

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const provinces = useMemo(() => {
    const provs = new Set<string>()
    eventData.forEach(event => provs.add(event.province))
    return Array.from(provs).sort()
  }, [])

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ]

  const filteredEvents = useMemo(() => {
    return eventData.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesProvince = !selectedProvince || event.province === selectedProvince
      const matchesMonth = !selectedMonth || event.month === selectedMonth
      return matchesSearch && matchesProvince && matchesMonth
    })
  }, [searchQuery, selectedProvince, selectedMonth])

  return (
    <section className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Jadwal Event Budaya</h2>
          <p className="text-muted-foreground">Temukan upacara adat, festival, dan kegiatan budaya di seluruh Indonesia</p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari event budaya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Filter Options */}
          <div className="space-y-6">
            {/* Province Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Provinsi
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProvince(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedProvince === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  Semua
                </button>
                {provinces.map(province => (
                  <button
                    key={province}
                    onClick={() => setSelectedProvince(province)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      selectedProvince === province
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-border'
                    }`}
                  >
                    {province}
                  </button>
                ))}
              </div>
            </div>

            {/* Month Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Bulan
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedMonth(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedMonth === null
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  Semua
                </button>
                {months.map(month => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      selectedMonth === month
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-border'
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events List */}
        {filteredEvents.length > 0 ? (
          <div className="grid gap-4">
            {filteredEvents.map((event, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* Event Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.name}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.month}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}, {event.province}</span>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="flex-shrink-0">
                    <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-medium text-sm">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">Tidak ada event yang ditemukan</p>
            <p className="text-sm text-muted-foreground mt-2">Coba ubah filter pencarian Anda</p>
          </div>
        )}

        {/* Event Count */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>Menampilkan {filteredEvents.length} dari {eventData.length} event budaya</p>
        </div>
      </div>
    </section>
  )
}
