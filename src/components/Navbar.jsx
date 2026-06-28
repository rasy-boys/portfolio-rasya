import { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('About');

  // Struktur menu menggunakan nama section dan ikon representatif ala UI Game
  const navItems = [
    { name: 'About', icon: '🏠', badge: false },
    { name: 'Education', icon: '🎓', badge: false },
    { name: 'Skills', icon: '⚔️', badge: true }, // Anggap saja ikon 'skills/status' di game
    { name: 'Projects', icon: '📁', badge: false },
    { name: 'Experience', icon: '🏆', badge: false },
    { name: 'Certifications', icon: '📜', badge: false },
  ];

  return (
    <>
      {/* SIDEBAR VERTIKAL (Gaya Dashboard Game Kiri) */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 w-24 bg-[#14161d]/80 border-r border-white/[0.06] backdrop-blur-xl flex flex-col items-center justify-between py-6 shadow-[25px_0_80px_-50px_rgba(0,0,0,0.8)]">
        
        {/* LOGO ATAS (Meniru Logo Game di Pojok Kiri Atas) */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            <span className="text-xl font-black tracking-tighter">A</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mt-1">Asya</span>
        </div>

        {/* NAVIGATION ITEMS (Deretan Ikon Tengah) */}
        <nav className="flex flex-col gap-4 w-full px-3">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={() => setActiveItem(item.name)}
                className={`relative group flex h-14 w-full flex-col items-center justify-center rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-amber-500 text-black shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] font-bold' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {/* Efek Garis Aktif Indikator di Sisi Kiri Item */}
                {isActive && (
                  <span className="absolute left-0 w-1 h-6 bg-white rounded-r-full" />
                )}

                {/* Render Ikon */}
                <span className="text-xl">{item.icon}</span>
                
                {/* Notification Badge Merah Bulat (Meniru Gambar Referensi) */}
                {item.badge && (
                  <span className="absolute top-2 right-4 h-2 w-2 rounded-full bg-rose-500 ring-4 ring-[#14161d]" />
                )}

                {/* Tooltip Hover Nama Menu */}
                <div className="absolute left-24 scale-0 group-hover:scale-100 transition-all duration-200 origin-left rounded-lg border border-white/10 bg-[#1b1e25] px-3 py-1.5 text-xs font-bold text-white shadow-xl whitespace-nowrap z-50">
                  {item.name}
                </div>
              </a>
            );
          })}
        </nav>

        {/* BOTTOM ACTION (Meniru Tombol Tambah [+] Merah/Dotted di Pojok Kiri Bawah) */}
        <div className="w-full px-3">
          <a
            href="#contact"
            onClick={() => setActiveItem('Contact')}
            className={`group relative flex h-12 w-full items-center justify-center rounded-xl border border-dashed transition-all duration-300 ${
              activeItem === 'Contact'
                ? 'bg-amber-500 border-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-400 bg-zinc-900/20'
            }`}
          >
            <span className="text-lg font-bold group-hover:scale-110 transition-transform">＋</span>
            
            {/* Tooltip Hover Contact */}
            <div className="absolute left-24 scale-0 group-hover:scale-100 transition-all duration-200 origin-left rounded-lg border border-white/10 bg-[#1b1e25] px-3 py-1.5 text-xs font-bold text-white shadow-xl whitespace-nowrap z-50">
              Contact Me
            </div>
          </a>
        </div>

      </aside>
    </>
  );
}