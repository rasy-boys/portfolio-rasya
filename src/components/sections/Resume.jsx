import { ArrowUpRight, GraduationCap, Briefcase, Calendar, Terminal, Cpu, Compass, School } from "lucide-react"
import Button from "../ui/button"
import GridBackground from "../effects/GridBackground"

export default function Resume() {
  return (
// Di file Resume.tsx, ubah baris paling atas menjadi:
<section
  id="resume"
  className="relative overflow-hidden bg-[#09090b] text-white px-6 md:px-12 lg:px-20 pt-2 pb-12 flex items-center"
>
      <GridBackground />
      
      {/* STRUKTUR UTAMA: Grid Terbagi 3 Kolom Secara Seimbang (4 : 4 : 4) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-6 items-start">
        
        {/* ================= KOLOM 1: JOURNEY TEXT (4 Kolom) ================= */}
<div className="lg:col-span-4 space-y-8 text-left lg:sticky lg:top-24 group/journey">
  
  {/* Header & Judul Utama */}
  <div className="space-y-4">
    
    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.92] uppercase flex flex-col">
      <span className="transition-all duration-300 group-hover/journey:text-yellow-400">MY CAREER</span>
      <span className="text-white/30">& ACADEMIC</span>
      <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">JOURNEY</span>
    </h2>
  </div>

  {/* Deskripsi dengan Border Aksen Menyala */}
  <div className="relative pl-4 border-l-2 border-yellow-400/40 py-1 transition-all duration-300 hover:border-yellow-400">
    {/* Dekorasi Ornamen Sudut ala Cyberpunk */}
    <div className="absolute top-0 left-0 w-1.5 h-[2px] bg-yellow-400" />
    <div className="absolute bottom-0 left-0 w-1.5 h-[2px] bg-yellow-400" />
    
    <p className="text-white/60 text-sm leading-relaxed tracking-wide">
      Arsitektur rekayasa perangkat lunak yang dibangun dari pondasi akademis kejuruan, 
      diasah melalui pengalaman industri nyata berbasis efisiensi tinggi.
    </p>
  </div>

  {/* Tombol CV dengan Animasi Hover Interaktif */}
  <div className="pt-2">
    <Button className="group/btn relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-neutral-950 text-xs font-black tracking-wider uppercase px-6 py-4 rounded-xl shadow-xl shadow-yellow-400/5 hover:shadow-yellow-400/15 transition-all duration-300 flex items-center gap-2.5">
      
      {/* Efek Kilatan Cahaya di Tombol saat Hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
      
      DOWNLOAD RESUME
      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 ease-out" />
    </Button>
  </div>

</div>

      {/* ================= KOLOM 2: ACADEMIC TIMELINE WITH SMART ICONS (4 Kolom) ================= */}
<div className="lg:col-span-4 flex flex-col space-y-6 bg-neutral-900/30 border border-white/5 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl min-h-[420px] transition-all duration-300 hover:border-white/10">
  
  {/* Header Modul */}
  <div className="flex items-center justify-between border-b border-white/5 pb-4">
    <div className="flex items-center gap-2.5 text-white/50 font-mono text-xs tracking-widest font-bold uppercase">
      <GraduationCap className="w-4 h-4 text-yellow-400" /> ACADEMIC_PATHWAY
    </div>
    <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/40 uppercase tracking-wider">
      SYS_V.02
    </span>
  </div>
  
  {/* Container Jalur Timeline */}
  <div className="relative border-l-2 border-linear-to-b from-yellow-400/50 via-white/10 to-transparent ml-2 pl-6 space-y-5 flex-1 py-1">
    
    {/* SMK KEJURUAN */}
    <div className="relative group/edu">
      {/* Node Bullet yang bersinar di garis */}
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-950 border-2 border-yellow-400 flex items-center justify-center transition-all duration-300 group-hover/edu:scale-125 shadow-sm shadow-yellow-400">
        <div className="w-1 h-1 rounded-full bg-yellow-400" />
      </div>
      
      {/* Sub-Card Konten */}
      <div className="bg-white/2 border border-white/5 rounded-2xl p-3.5 transition-all duration-300 group-hover/edu:bg-white/5 group-hover/edu:border-white/10 group-hover/edu:translate-x-1 flex items-start gap-3.5">
        {/* Ikon Khas: Cpu */}
        <div className="p-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-xl mt-1 group-hover/edu:scale-110 transition-transform duration-300">
          <Cpu className="w-4 h-4"/>
        </div>
        <div>
          <span className="text-[9px] font-mono font-bold tracking-wider text-yellow-400 uppercase bg-yellow-400/5 border border-yellow-400/20 px-1.5 py-0.5 rounded">
            SMK KEJURUAN
          </span>
          <h4 className="text-sm font-bold text-white mt-1.5 transition-colors group-hover/edu:text-yellow-400">SMKN 1 Ciomas</h4>
          <p className="text-xs text-white/40 font-mono mt-0.5">Software Engineering (RPL)</p>
        </div>
      </div>
    </div>

    {/* SMP */}
    <div className="relative group/edu">
      {/* Node Bullet */}
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-950 border-2 border-white/20 flex items-center justify-center transition-all duration-300 group-hover/edu:border-white/50">
        <div className="w-1 h-1 rounded-full bg-transparent group-hover/edu:bg-white/40 transition-colors" />
      </div>
      
      {/* Sub-Card Konten */}
      <div className="bg-white/2 border border-white/5 rounded-2xl p-3.5 transition-all duration-300 group-hover/edu:bg-white/5 group-hover/edu:border-white/10 group-hover/edu:translate-x-1 flex items-start gap-3.5">
        {/* Ikon Khas: Compass */}
        <div className="p-2 bg-white/5 border border-white/5 text-white/40 rounded-xl mt-1 group-hover/edu:text-white/80 group-hover/edu:border-white/20 transition-all duration-300">
          <Compass className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[9px] font-mono font-bold tracking-wider text-white/40 uppercase bg-white/5 border border-white/5 px-1.5 py-0.5 rounded">
            SECONDARY EDUCATION
          </span>
          <h4 className="text-sm font-bold text-white/80 mt-1.5 transition-colors group-hover/edu:text-white">SMPN 2 Dramaga</h4>
        </div>
      </div>
    </div>

    {/* MI */}
    <div className="relative group/edu">
      {/* Node Bullet */}
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-950 border-2 border-white/10 flex items-center justify-center transition-all duration-300 group-hover/edu:border-white/30">
        <div className="w-1 h-1 rounded-full bg-transparent" />
      </div>
      
      {/* Sub-Card Konten */}
      <div className="bg-white/2 border border-white/5 rounded-2xl p-3.5 transition-all duration-300 group-hover/edu:bg-white/5 group-hover/edu:border-white/10 group-hover/edu:translate-x-1 flex items-start gap-3.5">
        {/* Ikon Khas: School */}
        <div className="p-2 bg-white/5 border border-white/5 text-white/30 rounded-xl mt-1 group-hover/edu:text-white/60 transition-all duration-300">
          <School className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[9px] font-mono font-bold tracking-wider text-white/30 uppercase bg-white/5 border border-white/5 px-1.5 py-0.5 rounded">
            PRIMARY EDUCATION
          </span>
          <h4 className="text-sm font-bold text-white/60 mt-1.5 transition-colors group-hover/edu:text-white/80">MI Al Manaf</h4>
        </div>
      </div>
    </div>

  </div>
</div>
       {/* ================= KOLOM 3: EXPERIENCE TIMELINE (4 Kolom - Premium Cyber Mod) ================= */}
<div className="lg:col-span-4 flex flex-col space-y-6 bg-neutral-900/30 border border-white/5 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl min-h-[420px] transition-all duration-300 hover:border-white/10">
  
  {/* Header Modul */}
  <div className="flex items-center justify-between border-b border-white/5 pb-4">
    <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs tracking-widest font-bold uppercase">
      <Briefcase className="w-4 h-4 text-emerald-400" /> EXPERIENCE_RECORD
    </div>
    <span className="text-[9px] font-mono bg-emerald-400/5 border border-emerald-500/20 px-2 py-0.5 rounded text-emerald-400 uppercase tracking-wider animate-pulse">
      LIVE_LOG
    </span>
  </div>
  
  {/* Container Jalur Timeline */}
  <div className="relative border-l-2 border-linear-to-b from-emerald-500/50 via-emerald-500/10 to-transparent ml-2 pl-6 space-y-5 flex-1 py-1">
    
    {/* PT TRIWALA MITRA BESTARI (PKL) */}
    <div className="relative group/exp">
      {/* Node Bullet Glowing Emerald */}
      <div className="absolute -left-[32px] top-2 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-emerald-400 flex items-center justify-center transition-all duration-300 group-hover/exp:scale-110 shadow-sm shadow-emerald-400">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
      
      {/* Sub-Card Konten */}
      <div className="bg-white/2 border border-white/5 rounded-2xl p-4 transition-all duration-300 group-hover/exp:bg-white/5 group-hover/exp:border-white/10 group-hover/exp:translate-x-1 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-400/5 border border-emerald-500/20 px-1.5 py-0.5 rounded inline-flex items-center gap-1">
            <Terminal className="w-2.5 h-2.5" /> INTERNSHIP (PKL)
          </span>
        </div>
        
        <h4 className="text-base font-bold text-white mt-2 transition-colors group-hover/exp:text-emerald-400">
          Web Developer Intern
        </h4>
        <p className="text-xs font-semibold text-white/70 mt-0.5">PT Triwala Mitra Bestari</p>
        
        <p className="text-xs text-white/40 mt-3 leading-relaxed transition-colors group-hover/exp:text-white/50">
          Berkontribusi langsung dalam pengembangan sistem aplikasi, analisis data, 
          serta optimalisasi komponen antarmuka pengguna (*user interface*).
        </p>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  )
}