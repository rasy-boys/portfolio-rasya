import { ArrowUpRight, Terminal, Star, Server, Database, Layers, CheckCircle2 } from "lucide-react"
import Button from "../ui/button"
import GridBackground from "../effects/GridBackground"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen bg-[#09090b] text-white px-6 md:px-12 lg:px-20 pt-26 pb- flex items-center">
      {/* Latar Belakang Kotak Absolut */}
     
        <GridBackground />
      

      {/* Efek Pendaran Cahaya (Glow Effects) */}
      


      {/* STRUKTUR UTAMA: Grid 3 Kolom Berdasarkan Grid-12 */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* ================= KOLOM 1: INFORMASI TEKS UTAMA (5 Kolom) ================= */}
        <div className="lg:col-span-5 space-y-8 text-left order-1">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.35em] text-yellow-400 font-semibold uppercase">
             
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase flex flex-col">
              <span>JUNIOR</span>
              <span className="text-white/40">FULLSTACK</span>
              <span className="text-yellow-400">DEVELOPER</span>
            </h1>
          </div>

          <div className="relative pl-4 border-l-2 border-white/20 max-w-md">
            <p className="text-white/60 text-base leading-relaxed">
              Membangun arsitektur digital modern yang interaktif. Menyatukan keindahan visual interaksi 
              <span className="text-white font-medium"> Frontend</span> dengan ketangguhan performa logika 
              <span className="text-yellow-400 font-medium"> Backend</span>.
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-neutral-950 text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/10 transition-all duration-300 flex items-center gap-2">
              EXPLORE WORK 
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            
            <Button className="bg-neutral-900/60 hover:bg-neutral-800/80 border border-neutral-800 text-sm text-white/80 font-medium px-6 py-3.5 rounded-xl backdrop-blur-md transition-all duration-300">
              CONTACT
            </Button>
          </div>
        </div>

        {/* ================= KOLOM 2: CITRA UTAMA / PROFIL FRAME (4 Kolom) ================= */}
        <div className="lg:col-span-4 relative flex items-center justify-center min-h-[500px] order-2 lg:-ml-8 lg:mr-8">
          
          {/* Frame Gambar Utama */}
          <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-950/40 backdrop-blur-sm shadow-2xl">
            <img
              src="/profile1.1.png"
              alt="Rasya"
              className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-transparent to-transparent opacity-90" />
          </div>

          {/* FLOATING CARD: Status Aktif (Kiri Atas) */}
          <div className="absolute top-6 -left-4 bg-neutral-900/80 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50" />
            <p className="text-[10px] tracking-[0.2em] font-bold text-white/90">ONLINE</p>
          </div>

          {/* FLOATING CARD: Pengalaman (Kanan Atas) */}
          <div className="absolute top-20 -right-4 bg-neutral-950/80 border border-white/10 backdrop-blur-md p-3.5 rounded-xl shadow-2xl flex flex-col items-center min-w-[110px]">
            <div className="w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center mb-1">
              <Star className="w-3.5 h-3.5 text-neutral-950 fill-neutral-950" />
            </div>
            <span className="text-sm font-black text-white">3+ YEARS</span>
            <span className="text-[9px] text-white/40 tracking-wider">LEARNING</span>
          </div>

          {/* FLOATING CARD: Kode Identitas (Kanan Bawah) */}
          <div className="absolute bottom-10 -right-2 bg-neutral-900/80 border border-white/5 backdrop-blur-md px-3 py-2 rounded-lg text-[10px] font-mono text-white/40 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            CORE: KS120
          </div>
        </div>

        {/* ================= KOLOM 3: LIVE TECH TRACKER / METRICS (3 Kolom) ================= */}
        <div className="lg:col-span-3 space-y-4 order-3 w-full">
          <p className="text-[11px] tracking-[0.25em] text-white/40 font-mono uppercase block mb-2">
            // CORE_MODULES_LOADED
          </p>

          {/* Sub-Card 1: Frontend Engine */}
          <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xs p-4 rounded-xl flex items-center gap-4 transition-all hover:border-white/10 group">
            <div className="p-2.5 bg-yellow-400/10 rounded-lg border border-yellow-400/20 text-yellow-400 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wide text-white/90">FRONTEND ENGINE</h4>
              <p className="text-[11px] text-white/40 mt-0.5">React, Tailwind</p>
            </div>
          </div>

          {/* Sub-Card 2: Backend Stack */}
          <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xs p-4 rounded-xl flex items-center gap-4 transition-all hover:border-white/10 group">
            <div className="p-2.5 bg-orange-500/10 rounded-lg border border-orange-500/20 text-orange-500 group-hover:scale-105 transition-transform">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wide text-white/90">BACKEND ARCHITECTURE</h4>
              <p className="text-[11px] text-white/40 mt-0.5">Laravel, PHP Core</p>
            </div>
          </div>

          {/* Sub-Card 3: Database */}
          <div className="bg-neutral-900/40 border border-white/5 backdrop-blur-xs p-4 rounded-xl flex items-center gap-4 transition-all hover:border-white/10 group">
            <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-wide text-white/90">DATABASE STORAGE</h4>
              <p className="text-[11px] text-white/40 mt-0.5">MySQL, PostgreSQL</p>
            </div>
          </div>

          {/* Sub-Card 4: Availability / Status Kerja */}
          <div className="bg-neutral-900/20 border border-dashed border-white/10 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-white/60">Freelance Status</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 font-bold tracking-wide uppercase">Available</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}