import { useState } from "react"
import { Code2, Database, Cpu, Wrench } from "lucide-react"
import GridBackground from "../effects/GridBackground"

export default function Skills() {
  const [activeTech, setActiveTech] = useState({
    name: "SYSTEM_READY",
    type: "AWAITING_INPUT",
    desc: "Arahkan kursor ke salah satu ikon teknologi untuk memuat data visual matriks...",
    icon: ""
  })

  const techStack = {
    core: [
      { name: "HTML", icon: "/skills/Html.png", type: "HyperText Markup", desc: "Struktur fondasi markup semantik untuk arsitektur performa web optimal.", color: "hover:border-orange-500/40", glow: "shadow-orange-500/20" },
      { name: "CSS", icon: "/skills/Css.png", type: "StyleSheets", desc: "Desain visual responsif tingkat lanjut, animasi modern, dan layouting mutakhir.", color: "hover:border-blue-500/40", glow: "shadow-blue-500/20" },
      { name: "JavaScript", icon: "/skills/JavaScript.png", type: "Engine Logic", desc: "Pemrograman fungsional, manipulasi DOM asinkron, dan arsitektur data dinamis.", color: "hover:border-yellow-500/40", glow: "shadow-yellow-500/20" },
      { name: "Tailwind", icon: "/skills/Tailwind.png", type: "Utility CSS", desc: "Efisiensi styling super cepat berbasis utilitas kelas untuk UI/UX modern.", color: "hover:border-cyan-400/40", glow: "shadow-cyan-400/20" },
      { name: "PHP", icon: "/skills/Php.png", type: "Server Side", desc: "Pengolahan logika backend, skrip dinamis, dan integrasi server-to-database.", color: "hover:border-indigo-400/40", glow: "shadow-indigo-400/20" },
      { name: "Laravel", icon: "/skills/Laravel.png", type: "MVC Framework", desc: "Ekosistem backend elegan, routing aman, ORM Eloquent, dan arsitektur modular.", color: "hover:border-red-500/40", glow: "shadow-red-500/20" },
      { name: "React JS", icon: "/skills/React.png", type: "UI Library", desc: "Pembangunan antarmuka berbasis komponen reaktif, Virtual DOM, dan state management.", color: "hover:border-cyan-400/40", glow: "shadow-cyan-400/20" },
    ],
    databases: [
      { name: "MySQL", icon: "/skills/MySQL.png", glow: "group-hover/node:border-blue-400 group-hover/node:shadow-blue-500/40" },
      { name: "SQLite", icon: "/skills/SQLite.png", glow: "group-hover/node:border-sky-500 group-hover/node:shadow-sky-500/40" },
    ],
    aiTools: [
      { name: "ChatGPT", icon: "/skills/chatgpt.png", glow: "group-hover/node:border-emerald-400 group-hover/node:shadow-emerald-500/40" },
      { name: "Gemini", icon: "/skills/gemini.png", glow: "group-hover/node:border-purple-400 group-hover/node:shadow-purple-500/40" },
      { name: "Copilot", icon: "/skills/copilot.png", glow: "group-hover/node:border-white/40 group-hover/node:shadow-white/20" },
    ],
    workspaces: [
      { name: "VS Code", icon: "/skills/Vsc.png", glow: "group-hover/node:border-blue-500 group-hover/node:shadow-blue-500/40" },
      { name: "Laragon", icon: "/skills/Laragon.png", glow: "group-hover/node:border-teal-400 group-hover/node:shadow-teal-400/40" },
      { name: "TablePlus", icon: "/skills/TablePlus.png", glow: "group-hover/node:border-red-400 group-hover/node:shadow-red-500/40" },
    ]
  }

  return (
    <section id="skills" className="relative overflow-hidden bg-[#09090b] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-20 md:pb-28 flex items-center">
      <GridBackground />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/5 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8 md:space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase">
              TECH STACK <span className="text-white/30">&</span> EXPERTISE
            </h2>
          </div>
          <p className="text-white/40 text-xs md:text-sm font-mono max-w-xs md:text-right">
            Sistem utilitas, core engine, dan kecerdasan buatan dalam satu dasbor terintegrasi.
          </p>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* SISI KIRI: CORE LANGUAGES & FRAMEWORKS */}
          <div className="lg:col-span-8 bg-neutral-900/[0.2] border border-neutral-900 p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-neutral-400 font-sans text-xs tracking-wider font-semibold uppercase border-b border-neutral-900 pb-4 mb-6">
                <Code2 className="w-4 h-4 text-neutral-500" /> Languages & Frameworks
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.core.map((tech) => (
                  <div 
                    key={tech.name} 
                    onMouseEnter={() => setActiveTech({ name: tech.name, type: tech.type, desc: tech.desc, icon: tech.icon })}
                    onMouseLeave={() => setActiveTech({ name: "SYSTEM_READY", type: "AWAITING_INPUT", desc: "Arahkan kursor ke salah satu ikon teknologi untuk melihat detail kapabilitas teknis...", icon: "" })}
                    className={`group/item flex flex-col items-center justify-center bg-neutral-900/40 border border-neutral-900 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.01] ${tech.color}`}
                  >
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-neutral-900 mb-3 transition-all duration-300 group-hover/item:scale-105 group-hover/item:border-current hover:${tech.glow} shadow-[0_0_20px_rgba(0,0,0,0)]`}>
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300" />
                    </div>
                    <h4 className="text-xs md:text-sm font-medium text-neutral-400 group-hover/item:text-neutral-200 transition-colors tracking-wide">{tech.name}</h4>
                  </div>
                ))}

                {/* SLOT KE-8: STAT QUALITY CARD */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900/20 to-neutral-950/40 border border-neutral-900/80 rounded-2xl p-5 md:p-6 text-center select-none group/stat">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center mb-3">
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-white bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent group-hover/stat:from-emerald-400 group-hover/stat:to-teal-500 transition-all duration-500">
                      99%
                    </span>
                    <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest mt-0.5">Uptime</span>
                  </div>
                  <h4 className="text-xs font-medium text-neutral-500 group-hover/stat:text-neutral-400 transition-colors tracking-wide">Clean Code</h4>
                </div>
              </div>
            </div>

            {/* Current Focus Box */}
            <div className="mt-8 pt-6 border-t border-neutral-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-neutral-200 tracking-wide">Current Focus</p>
                  <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Active learning & building</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium hover:border-yellow-500/30 transition-colors cursor-default flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-yellow-400" /> React
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium hover:border-blue-500/30 transition-colors cursor-default flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-400" /> Laravel
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium hover:border-emerald-500/30 transition-colors cursor-default flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" /> AI Integrations
                </span>
              </div>
            </div>
          </div>

        {/* SISI KANAN: INTEGRATED TOOLS & ARCHITECTURE CONTAINER (Logo Diperbesar) */}
<div className="lg:col-span-4 bg-neutral-900/[0.2] border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between space-y-6">
  
  {/* Kategori 1: Databases */}
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-neutral-400 text-xs tracking-wider font-semibold uppercase border-b border-neutral-900 pb-2">
      <Database className="w-3.5 h-3.5 text-blue-400" /> Databases
    </div>
    <div className="grid grid-cols-2 gap-3">
      {techStack.databases.map((tech) => (
        <div key={tech.name} className="group/node flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-900/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all text-center">
          {/* UKURAN DIPERBESAR: w-14 h-14 & Gambar w-8 h-8 */}
          <div className={`w-14 h-14 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center shrink-0 transition-all ${tech.glow}`}>
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="mt-2 text-xs font-medium text-neutral-400 group-hover/node:text-blue-400 transition-colors">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Kategori 2: AI Assistants */}
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-neutral-400 text-xs tracking-wider font-semibold uppercase border-b border-neutral-900 pb-2">
      <Cpu className="w-3.5 h-3.5 text-emerald-400" /> AI Assistants
    </div>
    <div className="grid grid-cols-3 gap-2.5">
      {techStack.aiTools.map((tech) => (
        <div key={tech.name} className="group/node flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-900/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all text-center">
          {/* UKURAN DIPERBESAR: w-14 h-14 & Gambar w-8 h-8 */}
          <div className={`w-14 h-14 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center transition-all ${tech.glow}`}>
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="mt-2 text-[11px] font-medium text-neutral-400 group-hover/node:text-emerald-400 transition-colors truncate w-full">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Kategori 3: Workspaces */}
  <div className="space-y-3">
    <div className="flex items-center gap-2 text-neutral-400 text-xs tracking-wider font-semibold uppercase border-b border-neutral-900 pb-2">
      <Wrench className="w-3.5 h-3.5 text-cyan-400" /> Workspaces
    </div>
    <div className="grid grid-cols-3 gap-2.5">
      {techStack.workspaces.map((tech) => (
        <div key={tech.name} className="group/node flex flex-col items-center justify-center p-2 rounded-xl border border-neutral-900/60 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all text-center">
          {/* UKURAN DIPERBESAR: w-14 h-14 & Gambar w-8 h-8 */}
          <div className={`w-14 h-14 rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center transition-all ${tech.glow}`}>
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          </div>
          <span className="mt-2 text-[11px] font-medium text-neutral-400 group-hover/node:text-cyan-400 transition-colors truncate w-full">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>

</div>

        </div>
      </div>   
    </section>
  )
}