'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Nusantara Atlas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ensiklopedia budaya Indonesia yang interaktif dan modern untuk memperkuat literasi budaya generasi muda.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Beranda</button></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jelajahi Peta</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jadwal Event</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@nusantaraatlas.id" className="hover:text-primary transition-colors">
                  info@nusantaraatlas.id
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+62 (XXX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <span className="text-lg">▶</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nusantara Cultural Atlas. Semua hak dilindungi.</p>
          <p>Dibuat dengan hati untuk pelestarian budaya Indonesia</p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 text-xs text-muted-foreground border-t border-border pt-6">
          <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-primary transition-colors">Kontak</a>
          <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  )
}
