import asyaProfile from "../assets/asya.png";
export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full bg-[#0d0e12] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.05),transparent_30%)] text-white font-sans flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* CONTAINER UTAMA DASHBOARD FRAME */}
      <div className="w-full max-w-7xl rounded-[32px] border border-white/[0.06] bg-[#14161d]/90 p-6 lg:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] backdrop-blur-3xl relative overflow-hidden">
        
        {/* Glow Ambiance di dalam Dashboard */}
        <div className="absolute -bottom-20 -right-20 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -top-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />

        {/* ================= HEADER BAR ================= */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-400">
              Good evening, <span className="text-white font-black">Asya</span>
            </h1>
          </div>
          
          {/* Mock Search & Action Buttons */}
          <div className="flex items-center gap-4 self-end sm:self-auto">
            <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500 text-sm">🔍</span>
              <input 
                type="text" 
                placeholder="Search projects, stack..." 
                className="w-64 rounded-full bg-[#1b1e25] border border-white/5 py-1.5 pl-9 pr-4 text-xs text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-amber-500/30 transition"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 w-8 rounded-full bg-[#1b1e25] border border-white/5 flex items-center justify-center text-sm hover:bg-zinc-800 transition">🛒</button>
              <button className="h-8 w-8 rounded-full bg-[#1b1e25] border border-white/5 flex items-center justify-center text-sm relative hover:bg-zinc-800 transition">
                🔔 <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500" />
              </button>
            </div>
          </div>
        </header>

        {/* ================= GRID UTAMA DASHBOARD ================= */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          
          {/* SECTOR KIRI: HERO BANNER & SUB CARDS */}
          <div className="space-y-6">
            
            {/* 1. MAIN HERO BANNER (CARD VALORANT STYLE) */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#2a1b15] to-[#1c1310] p-6 sm:p-8 min-h-[320px] flex flex-col justify-between group">
              {/* Ornamen Latar Belakang */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />

              {/* FOTO PROFIL ASYA OVERLAY (Meniru Agen Valorant di Gambar) */}
              <div className="absolute right-0 bottom-0 top-0 w-2/5 sm:w-1/3 md:w-2/5 max-h-full flex items-end justify-end pointer-events-none overflow-hidden select-none z-10">
                <img 
                    src={asyaProfile}
                    alt="Asya Profile" 
                    className="h-[95%] w-auto object-cover object-top origin-bottom filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      maskImage: 'linear-gradient(to top, transparent 5%, black 25%)', 
                      WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)' 
                    }}
                  />
              </div>

              {/* Konten Atas Card */}
              <div className="space-y-4 max-w-[65%] sm:max-w-[70%] relative z-20">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 text-[#0d0e12] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    🔥 Popular
                  </span>
                  <div className="flex gap-1 text-xs text-zinc-400 bg-black/20 px-2 py-0.5 rounded-md border border-white/5">
                    <span>💻 React</span> • <span>⚙️ Laravel</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase">
                    Full-Stack Dev
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none">
                    Saya siswa SMK jurusan PPLG yang membangun web apps modern. Berfokus pada kode bersih, performa modular responsif, dan arsitektur visual yang intuitif.
                  </p>
                </div>
              </div>

              {/* Konten Bawah Card (Social Media & Action Buttons) */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5 relative z-20 max-w-[65%] sm:max-w-[70%]">
                <div className="flex -space-x-1">
                  <a href="#" className="h-7 w-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs hover:bg-amber-500 hover:text-black transition">GH</a>
                  <a href="#" className="h-7 w-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs hover:bg-amber-500 hover:text-black transition">LN</a>
                </div>
                <button className="rounded-full bg-white text-black px-4 py-1.5 text-xs font-bold shadow-lg hover:bg-amber-400 hover:text-black transition duration-300">
                  Contact Me
                </button>
              </div>
            </div>

            {/* 2. SUB SECTION BARU (MENIRU NEW GAMES DI GAMBAR) */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-[#1b1e25]/60 p-4 flex flex-col justify-between min-h-[130px] relative overflow-hidden group hover:border-amber-500/20 transition">
                <div>
                  <div className="h-7 w-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-sm mb-3">📁</div>
                  <h3 className="text-sm font-bold text-white">Project Uncharted 4</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">E-Commerce platform built using Next.js and Laravel API core.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-zinc-500 mt-2 block group-hover:text-amber-400 transition">View Source Code →</span>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#1b1e25]/60 p-4 flex flex-col justify-between min-h-[130px] relative overflow-hidden group hover:border-amber-500/20 transition">
                <div>
                  <div className="h-7 w-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-sm mb-3">🛡️</div>
                  <h3 className="text-sm font-bold text-white">Dishonored System</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">Real-time attendance application integrated with biometric scanners.</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-zinc-500 mt-2 block group-hover:text-cyan-400 transition">View Source Code →</span>
              </div>
            </div>

          </div>

          {/* ================= SECTOR KANAN: STATS & MINI LIST ================= */}
          <div className="space-y-6">
            
            {/* 1. SIDEBAR MINI LIST (MENIRU DAFTAR GAME KANAN ATAS) */}
            <div className="rounded-[24px] border border-white/5 bg-[#1b1e25]/40 p-4 space-y-3">
              <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase px-1">Active Tech Stack</p>
              
              {/* Item 1 */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1b1e25]/80 border border-white/5 hover:border-amber-500/20 transition group">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 font-bold text-amber-400 flex items-center justify-center text-xs">TS</div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-amber-400 transition">TypeScript Scripting</h4>
                    <p className="text-[10px] text-zinc-500">Advanced Type Definitions</p>
                  </div>
                </div>
                <span className="text-zinc-600 text-xs font-bold">›</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1b1e25]/80 border border-white/5 hover:border-amber-500/20 transition group">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-cyan-500/10 font-bold text-cyan-400 flex items-center justify-center text-xs">TW</div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-400 transition">Tailwind Engine</h4>
                    <p className="text-[10px] text-zinc-500">Utility-First Framework</p>
                  </div>
                </div>
                <span className="text-zinc-600 text-xs font-bold">›</span>
              </div>
            </div>

            {/* 2. STATISTIC CARD (MENIRU KOTAK FLUID STATS KANAN BAWAH) */}
            <div className="rounded-[28px] border border-white/5 bg-[#1b1e25]/60 p-5 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">Your Statistics</h3>
                <span className="text-[10px] font-bold text-amber-400 cursor-pointer hover:underline">Full Analytics →</span>
              </div>

              {/* Liquid Circle UI Element */}
              <div className="relative flex flex-col items-center justify-center py-8 rounded-2xl bg-[#14161d]/80 border border-white/5 overflow-hidden">
                {/* Efek fluid melingkar abstrak menggunakan gradasi blur */}
                <div className="absolute h-36 w-36 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-600 to-cyan-500 opacity-20 blur-xl animate-pulse" />
                
                <div className="relative z-10 text-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Total Code Hours</p>
                  <p className="mt-1 text-3xl font-black text-white tracking-tight">12,340h</p>
                </div>
              </div>

              {/* Tiga Icon Subs di bawah lingkaran */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xs font-bold text-amber-400">2,340h</div>
                  <p className="text-[9px] text-zinc-500 mt-0.5">Frontend</p>
                </div>
                <div className="p-2 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xs font-bold text-cyan-400">5,420h</div>
                  <p className="text-[9px] text-zinc-500 mt-0.5">Backend</p>
                </div>
                <div className="p-2 rounded-xl bg-black/20 border border-white/5">
                  <div className="text-xs font-bold text-purple-400">4,580h</div>
                  <p className="text-[9px] text-zinc-500 mt-0.5">DevOps</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}