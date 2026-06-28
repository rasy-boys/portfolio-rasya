import {
  BadgeCheck,
  MapPin,
  Sparkles,
  Terminal,
  Server,
  Layers,
} from "lucide-react"

import GridBackground from "../effects/GridBackground"

export default function About() {
  return (
  <section id="about" className="relative overflow-hidden bg-[#09090b] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-20 md:pb-28 flex items-center">
      
      {/* Latar Belakang Kotak Absolut */}
      
        <GridBackground />
      


      {/* Efek Glow di Belakang Kartu Utama */}

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">


        {/* KARTU UTAMA: Glassmorphism Bento Box Horizontal */}
        <div className="w-full bg-neutral-900/40 border border-white/10 rounded-[2.5rem] backdrop-blur-xl p-8 lg:p-10 shadow-2xl grid lg:grid-cols-12 gap-8 lg:gap-4 items-center relative overflow-hidden group hover:border-white/15 transition-all duration-300">
          
          {/* Ornamen Garis Cyberpunk di Pojok Kanan Atas */}
          <div className="absolute top-0 right-0 w-32 h-[2px] bg-gradient-to-l from-yellow-400/40 to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-32 bg-gradient-to-b from-yellow-400/40 to-transparent" />

             {/* SISI KIRI: ATOM NUCLEUS ORBIT PROFIL (UKURAN BESAR) */}
<div className="lg:col-span-3 flex items-center justify-center lg:justify-start min-h-[280px] relative">
  
  <div className="relative w-64 h-64 flex items-center justify-center">
    
    {/* ================= LINTASAN ELECTRON 1 (Miring Kanan) ================= */}
    <div className="absolute w-60 h-24 rounded-full border border-yellow-400/20 rotate-[30deg] flex items-center justify-center">
      {/* Partikel Elektron - Titik poros (origin) digeser ke 120px karena orbit melebar */}
      <div className="absolute w-2 h-2 rounded-full bg-yellow-400 shadow-md shadow-yellow-400/80 animate-[spin_4s_linear_infinite] origin-[120px_0px]" />
    </div>

    {/* ================= LINTASAN ELECTRON 2 (Miring Kiri) ================= */}
    <div className="absolute w-60 h-24 rounded-full border border-white/10 -rotate-[30deg] flex items-center justify-center">
      {/* Partikel Elektron - Titik poros (origin) digeser ke 120px */}
      <div className="absolute w-2 h-2 rounded-full bg-white shadow-md shadow-white/80 animate-[spin_6s_linear_infinite] origin-[120px_0px]" />
    </div>

    {/* ================= LINTASAN ELECTRON 3 (Horizontal/Tengah) ================= */}
    <div className="absolute w-64 h-26 rounded-full border border-yellow-400/10 rotate-[90deg] flex items-center justify-center">
      {/* Partikel Elektron - Titik poros (origin) digeser ke 128px */}
      <div className="absolute w-1.5 h-1.5 rounded-full bg-yellow-400/60 animate-[spin_5s_linear_infinite] origin-[128px_0px]" />
    </div>

    {/* ================= CINCIN PEMINDAI INTI (Pulse Ring) ================= */}
    <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-yellow-400/20 animate-[spin_60s_linear_infinite]" />
    <div className="absolute w-40 h-40 rounded-full border border-white/5 bg-neutral-950/40 backdrop-blur-xs animate-[pulse_3s_ease-in-out_infinite]" />

    {/* ================= INTI ATOM: FOTO PROFIL (SEKARANG LEBIH BESAR) ================= */}
    <div className="absolute w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400 bg-neutral-950 p-0.5 shadow-2xl z-10 group/atom">
      <div className="w-full h-full rounded-full overflow-hidden relative">
        <img
          src="/asya1.png"
          alt="Rasya Fattah"
          className="w-full h-full object-cover contrast-[105%] scale-100 group-hover/atom:scale-110 group-hover/atom:rotate-2 transition-all duration-500"
        />
        {/* Efek kaca di atas foto */}
        <div className="absolute inset-0 bg-linear-to-tr from-yellow-400/0 via-white/5 to-white/10" />
      </div>
    </div>

  </div>
</div>

          {/* SISI TENGAH: Detail Profil & Biografi Teks (5 Kolom) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left lg:px-4">
            <div className="space-y-1">
              <p className="text-xs font-mono tracking-widest text-white/40 uppercase">
                WHO AM I?
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                  Rasya Fattah
                </h3>
                <BadgeCheck className="w-6 h-6 text-yellow-400 fill-yellow-400/10 flex-shrink-0" />
              </div>
              <p className="text-yellow-400/80 font-mono text-xs tracking-wider uppercase">
                Junior Fullstack Developer
              </p>
            </div>

            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Pengembang web muda yang berfokus membangun visual interaktif dan sistem data modern. 
              Suka menerjemahkan desain antarmuka yang kompleks menjadi kode fungsional yang responsif, 
              efisien, dan terstruktur dengan baik.
            </p>
          </div>

          {/* GARIS PEMBATAS VERTIKAL (Hanya muncul di layar desktop besar) */}
          <div className="hidden lg:block lg:col-span-1 justify-self-center h-32 w-[1px] bg-white/10" />

          {/* SISI KANAN: Spesialisasi / Core Tech Stack Modules (3 Kolom) */}
          <div className="lg:col-span-3 space-y-3 w-full">
            <p className="text-[10px] font-mono tracking-widest text-white/40 text-center lg:text-left uppercase">
              SPECIALIZATIONS
            </p>
            
            <div className="grid grid-cols-1 gap-2.5">
              {/* Spesialisasi 1 */}
              <div className="flex items-center gap-3.5 bg-white/3 border border-white/5 p-3 rounded-xl transition-all hover:bg-white/5 hover:border-white/10">
                <div className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">Frontend Slicing</h4>
                  <p className="text-[10px] text-white/40 mt-0.5">React & Tailwind CSS</p>
                </div>
              </div>

              {/* Spesialisasi 2 */}
              <div className="flex items-center gap-3.5 bg-white/3 border border-white/5 p-3 rounded-xl transition-all hover:bg-white/5 hover:border-white/10">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">Backend System</h4>
                  <p className="text-[10px] text-white/40 mt-0.5">Laravel Architecture</p>
                </div>
              </div>

              {/* Spesialisasi 3 */}
              <div className="flex items-center gap-3.5 bg-white/3 border border-white/5 p-3 rounded-xl transition-all hover:bg-white/5 hover:border-white/10">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wide">UI Design System</h4>
                  <p className="text-[10px] text-white/40 mt-0.5">Gaming & Cyberpunk Style</p>
                </div>
              </div>
            </div>

            {/* Status Lokasi Tambahan */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-[11px] font-mono text-white/40">
              <MapPin className="w-3.5 h-3.5 text-white/30" />
              <span>Based in Indonesia</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}