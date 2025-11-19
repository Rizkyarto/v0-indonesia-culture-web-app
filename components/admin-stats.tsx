'use client'

import { culturalData } from '@/lib/cultural-data'
import { eventData } from '@/lib/event-data'
import { MapPin, BookOpen, Calendar, Users } from 'lucide-react'

export default function StatsOverview() {
  const totalTraditions = Object.values(culturalData).flat().length
  const totalProvinces = Object.keys(culturalData).length
  const totalEvents = eventData.length

  const stats = [
    {
      icon: MapPin,
      label: 'Total Provinsi',
      value: totalProvinces,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: BookOpen,
      label: 'Tradisi & Kesenian',
      value: totalTraditions,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Calendar,
      label: 'Event Budaya',
      value: totalEvents,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Users,
      label: 'Kategori Tradisi',
      value: 6,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Informasi Cepat</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium text-foreground">Total Konten</p>
              <p className="text-sm text-muted-foreground">Tradisi + Event</p>
            </div>
            <p className="text-2xl font-bold text-primary">{totalTraditions + totalEvents}</p>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium text-foreground">Rata-rata Tradisi per Provinsi</p>
              <p className="text-sm text-muted-foreground">Distribusi konten</p>
            </div>
            <p className="text-2xl font-bold text-secondary">
              {(totalTraditions / totalProvinces).toFixed(1)}
            </p>
          </div>

          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium text-foreground">Coverage Geografis</p>
              <p className="text-sm text-muted-foreground">Dari 34 provinsi</p>
            </div>
            <p className="text-2xl font-bold text-accent">
              {Math.round((totalProvinces / 34) * 100)}%
            </p>
          </div>
        </div>
      </div>

      {/* Top Provinces */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Top Provinsi</h2>
        <div className="space-y-3">
          {Object.entries(culturalData)
            .map(([province, traditions]) => ({
              province,
              count: traditions.length,
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 border border-border rounded-lg">
                <span className="font-medium text-foreground">{item.province}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {item.count} tradisi
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
