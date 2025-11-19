'use client'

import { useState, useMemo } from 'react'
import { Plus, Search, Edit2, Trash2, Save, X } from 'lucide-react'
import { culturalData } from '@/lib/cultural-data'

interface TraditionForm {
  name: string
  province: string
  category: string
  description: string
  history: string
  cultural_value: string
  image: string
}

export default function TraditionManager() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<TraditionForm>({
    name: '',
    province: '',
    category: 'Kesenian Tradisional',
    description: '',
    history: '',
    cultural_value: '',
    image: '🎭',
  })

  const allTraditions = useMemo(() => {
    return Object.entries(culturalData).flatMap(([province, traditions]) =>
      traditions.map((t, idx) => ({ ...t, id: `${province}-${idx}` }))
    )
  }, [])

  const filteredTraditions = useMemo(() => {
    return allTraditions.filter(t =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.province.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [allTraditions, searchQuery])

  const handleSaveNew = () => {
    if (formData.name && formData.province) {
      console.log('Adding new tradition:', formData)
      setFormData({
        name: '',
        province: '',
        category: 'Kesenian Tradisional',
        description: '',
        history: '',
        cultural_value: '',
        image: '🎭',
      })
      setIsAddingNew(false)
      alert('Tradisi berhasil ditambahkan!')
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus tradisi ini?')) {
      console.log('Deleting tradition:', id)
      alert('Tradisi berhasil dihapus!')
    }
  }

  return (
    <div className="space-y-6">
      {/* Header dengan Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Kelola Tradisi & Kesenian</h2>
          <p className="text-sm text-muted-foreground">Tambah, edit, atau hapus tradisi</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Plus className="w-5 h-5" />
          Tambah Tradisi
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Cari tradisi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Add New Form */}
      {isAddingNew && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-foreground">Tambah Tradisi Baru</h3>
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
              placeholder="Nama Tradisi"
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
              {Object.keys(culturalData).map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option>Kesenian Tradisional</option>
              <option>Tarian Tradisional</option>
              <option>Kerajinan Tradisional</option>
              <option>Upacara Adat</option>
              <option>Pertunjukan Wayang</option>
              <option>Arsitektur Tradisional</option>
            </select>

            <input
              type="text"
              placeholder="Emoji/Gambar (contoh: 🎭)"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <textarea
            placeholder="Deskripsi singkat"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            placeholder="Konteks sejarah"
            value={formData.history}
            onChange={(e) => setFormData({ ...formData, history: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            placeholder="Nilai budaya"
            value={formData.cultural_value}
            onChange={(e) => setFormData({ ...formData, cultural_value: e.target.value })}
            rows={3}
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

      {/* Traditions Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Nama</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Provinsi</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Kategori</th>
                <th className="px-6 py-3 text-left font-semibold text-foreground">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredTraditions.length > 0 ? (
                filteredTraditions.map((tradition, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">
                      {tradition.image} {tradition.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{tradition.province}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tradition.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(tradition.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    Tidak ada tradisi ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Menampilkan {filteredTraditions.length} dari {allTraditions.length} tradisi
      </p>
    </div>
  )
}
