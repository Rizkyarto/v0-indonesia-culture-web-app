'use client'

import { useState, useMemo } from 'react'
import { Search, MapPin, Info } from 'lucide-react'
import TraditionCard from './tradition-card'
import { culturalData } from '@/lib/cultural-data'

export default function Explorer() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const provinces = useMemo(() => {
    return Object.keys(culturalData).sort()
  }, [])

  const categories = useMemo(() => {
    const cats = new Set<string>()
    Object.values(culturalData).forEach(traditions => {
      traditions.forEach(t => cats.add(t.category))
    })
    return Array.from(cats).sort()
  }, [])

  const filteredTraditions = useMemo(() => {
    let traditions: any[] = []
    
    if (selectedProvince) {
      traditions = culturalData[selectedProvince] || []
    } else {
      Object.values(culturalData).forEach(prov => {
        traditions = [...traditions, ...prov]
      })
    }

    return traditions.filter(tradition => {
      const matchesSearch = tradition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tradition.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || tradition.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [selectedProvince, searchQuery, selectedCategory])

  return (
    <section className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Jelajahi Peta Budaya Indonesia</h2>
          <p className="text-muted-foreground">Temukan tradisi dan kesenian dari berbagai provinsi</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari tradisi, kesenian, atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Province Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Pilih Provinsi</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProvince(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedProvince === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  Semua Provinsi
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

            {/* Category Filter */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">Pilih Kategori</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === null
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  Semua Kategori
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      selectedCategory === category
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center gap-2 text-muted-foreground">
          <Info className="w-4 h-4" />
          <span>{filteredTraditions.length} tradisi ditemukan</span>
        </div>

        {/* Traditions Grid */}
        {filteredTraditions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTraditions.map((tradition, idx) => (
              <TraditionCard key={idx} tradition={tradition} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground">Tidak ada tradisi yang ditemukan</p>
            <p className="text-sm text-muted-foreground mt-2">Coba ubah filter pencarian Anda</p>
          </div>
        )}
      </div>
    </section>
  )
}
