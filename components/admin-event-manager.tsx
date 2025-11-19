'use client'

import { useState, useMemo } from 'react'
import { Plus, Search, Edit2, Trash2, Save, X } from 'lucide-react'
import { eventData } from '@/lib/event-data'

interface EventForm {
  name: string
  province: string
  location: string
  month: string
  category: string
  description: string
}

export default function EventManager() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [formData, setFormData] = useState<EventForm>({
    name: '',
    province: '',
    location: '',
    month: 'Januari',
    category: 'Festival Kesenian',
    description: '',
  })

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ]

  const categories = ['Festival Kesenian', 'Upacara Adat', 'Pertunjukan Seni', 'Pameran', 'Festival Kuliner', 'Festival Maritim']

  const filteredEvents = useMemo(() => {
    return eventData.filter(event =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const handleSaveNew = () => {
    if (formData.name && formData.province && formData.location) {
      console.log('Adding new event:', formData)
      setFormData({
        name: '',
        province: '',
        location: '',
        month: 'Januari',
        category: 'Festival Kesenian',
        description: '',
      })
      setIsAddingNew(false)
      alert('Event berhasil ditambahkan!')
    }
  }

  const handleDelete = (idx: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus event ini?')) {
      console.log('Deleting event:', idx)
      alert('Event berhasil dihapus!')
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Kelola Event Budaya</h2>
          <p className="text-sm text-muted-foreground">Tambah, edit, atau hapus event budaya</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Plus className="w-5 h-5" />
          Tambah Event
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari event..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Add New Form */}
      {isAddingNew && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-foreground">Tambah Event Baru</h3>
            <button
              onClick={() => setIsAddingNew(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nama Event"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={formData.province}
              onChange={(e) => setFormData({ ...formData, province: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Pilih Provinsi</option>
              <option>Jawa Barat</option>
              <option>Jawa Tengah</option>
              <option>Jawa Timur</option>
              <option>Bali</option>
              <option>Sumatera Utara</option>
              <option>Sulawesi Selatan</option>
              <option>Yogyakarta</option>
              <option>Jakarta</option>
            </select>

            <input
              type="text"
              placeholder="Lokasi"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <select
              value={formData.month}
              onChange={(e) => setFormData({ ...formData, month: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {months.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>

            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary col-span-1 md:col-span-2"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <textarea
            placeholder="Deskripsi event"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex gap-2">
            <button
              onClick={handleSaveNew}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Save className="w-4 h-4" />
              Simpan
            </button>
            <button
              onClick={() => setIsAddingNew(false)}
              className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-border transition-colors font-medium"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Events List */}
      <div className="space-y-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{event.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                    <span>{event.province}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                    <span>•</span>
                    <span>{event.month}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded">{event.category}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            Tidak ada event ditemukan
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground">
        Menampilkan {filteredEvents.length} dari {eventData.length} event
      </p>
    </div>
  )
}
