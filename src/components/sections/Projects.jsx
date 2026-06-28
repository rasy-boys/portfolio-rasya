import GridBackground from "../effects/GridBackground"
import { useState } from "react"
export default function Project() {
  


  // Data 7 Project Anda dengan path gambar dari folder public/project/
  const projects = [
    {
      title: "PinjamBuku Platform",
      desc: "Sistem aplikasi manajemen dan peminjaman buku digital serta inventaris peralatan berbasis web.",
      image: "/project/pinjamin.png",
      tech: ["Laravel", "React JS", "Tailwind"],
      github: "https://github.com/rasy-boys/pinjamin-frontend.git",
      demo: "#",
      size: "lg:col-span-7",
      accent: "group-hover:border-cyan-500/30 shadow-cyan-500/5"
    },
    {
      title: "Toko Pintar",
      desc: "Sistem informasi manajemen toko berbasis web yang menyediakan fitur pengelolaan produk, transaksi kasir, dan hak akses admin untuk membantu proses operasional bisnis menjadi lebih efektif dan terorganisir.",
      image: "/project/tokopintar.png",
      tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
      github: "https://github.com/rasy-boys/toko-pintar",
      demo: "#",
      size: "lg:col-span-5",
      accent: "group-hover:border-emerald-500/30 shadow-emerald-500/5"
    },
    {
    title: "Simple E-Commerce",
    desc: "Website e-commerce sederhana yang dibuat untuk Uji Level kelas 10 dengan fitur katalog produk, keranjang belanja, dan pemesanan langsung melalui WhatsApp.",
    image: "/project/ujilevelkelas10.png",
    tech: ["Laravel", "MySQL", "CSS"],
    github: "https://github.com/rasy-boys/projek-uji-level-kelas-10",
    demo: "#",
    size: "lg:col-span-4",
    accent: "group-hover:border-red-500/30 shadow-red-500/5"
  },
    {
      title: "Teka Teki Suki",
      desc: "Aplikasi mobile hiburan berisi kumpulan teka-teki dan tebak-tebakan lucu yang dikembangkan secara kolaboratif oleh tim beranggotakan 4 orang sebagai proyek pengembangan aplikasi mobile pertama.",
      image: "/project/tekatekisuki.jpg",
      tech: ["Flutter", "Dart", "SQLite"],
      github: "https://github.com/rasy-boys/teka-teki-suki",
      demo: "#",
      size: "lg:col-span-4",
      accent: "group-hover:border-yellow-500/30 shadow-yellow-500/5"
    },
    {
    title: "Kalkulator Cinta",
    desc: "Website hiburan sederhana yang memungkinkan pengguna memasukkan nama pasangan untuk menghasilkan persentase kecocokan cinta secara acak dengan tampilan yang interaktif dan menarik.",
    image: "/project/kalkulatorcinta.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rasy-boys/kalkulator-cinta.git",
    demo: "#",
    size: "lg:col-span-4",
    accent: "group-hover:border-blue-500/30 shadow-blue-500/5"
  },
    {
    title: "GIS Indonesia Company Profile",
    desc: "Website company profile modern untuk GIS Indonesia yang menampilkan informasi perusahaan, layanan, dan kontak dengan desain responsif dan antarmuka yang profesional.",
    image: "/project/gis.png",
    tech: ["Laravel", "PHP", "Tailwind CSS"],
    github: "https://github.com/rasy-boys/gis-indonesia",
    demo: "#",
    size: "lg:col-span-5",
    accent: "group-hover:border-indigo-500/30 shadow-indigo-500/5"
  },
{
  title: "Sistem Dinamik",
  desc: "Website company profile berbasis Laravel yang dikembangkan dengan fitur pengelolaan konten dinamis, galeri, informasi layanan, dan antarmuka responsif untuk memberikan pengalaman pengguna yang modern dan profesional.",
  image: "/project/sistemdinamik.png",
  tech: ["Laravel", "PHP", "Tailwind CSS", "JavaScript"],
  github: "https://github.com/rasy-boys/sistemdinamik",
  demo: "#",
  size: "lg:col-span-7",
  accent: "group-hover:border-purple-500/30 shadow-purple-500/5"
}


  ]
  const featuredProject = projects[0]
const archiveProjects = projects.slice(1)

  return (
   <section id="projects" className="relative overflow-hidden bg-[#09090b] text-neutral-200 px-4 sm:px-6 md:px-12 lg:px-20 pt-2 pb-24 md:pb-12 flex flex-col justify-start">
      {/* Jika Anda menggunakan GridBackground bawaan, silakan import kembali secara terpisah */}
      <GridBackground />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/5 blur-[100px] md:blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-900 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Selected Archive
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Featured <span className="text-neutral-600">&</span> Projects
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs font-sans leading-relaxed md:text-right">
            Koleksi aplikasi dan sistem digital hasil eksperimen serta pengerjaan logika arsitektur web penuh.
          </p>
        </div>

     {/* ================= FEATURED PROJECT (MINIMALIST MODERN) ================= */}
<div className="space-y-6">

  {/* Header Label yang Simpel & Clean */}
  <div className="flex items-center gap-3">
    <div className="h-1 w-6 rounded-full bg-yellow-400" />
    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
      Featured Project
    </span>
  </div>

  {/* Main Card */}
  <div
    className="
    group
    overflow-hidden
    rounded-2xl
    border border-neutral-800
    bg-neutral-900/40
    backdrop-blur-md
    transition-all
    duration-300
    hover:border-neutral-700
    hover:bg-neutral-900/60
    "
  >
    <div className="grid lg:grid-cols-2">

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden bg-neutral-950 border-b lg:border-b-0 lg:border-r border-neutral-800/60">
        
        {/* Minimalist Browser Window Dots */}
        <div className="absolute top-4 left-4 z-20 flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
        </div>

        <img
          src={featuredProject.image}
          alt={featuredProject.title}
          className="w-full h-full min-h-[320px] object-cover transition-transform duration-500 group-hover:scale-102"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-8 md:p-10 flex flex-col justify-between">

        <div className="space-y-5">
          
          {/* Badge Minimalis */}
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold font-mono tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              BEST PROJECT
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              {featuredProject.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {featuredProject.desc}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {featuredProject.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-neutral-800/80 text-neutral-300 text-xs font-mono border border-neutral-700/40"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Action Button dengan Logo GitHub */}
        <div className="flex mt-8">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noreferrer"
            className="
            inline-flex
            items-center
            gap-2.5
            px-5
            py-2.5
            rounded-xl
            bg-white
            text-black
            text-sm
            font-semibold
            transition-all
            hover:bg-neutral-200
            active:scale-98
            "
          >
            {/* SVG Logo GitHub */}
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.068.069-.068 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
              />
            </svg>
            GitHub
          </a>
        </div>

      </div>

    </div>

  </div>
</div>


{/* ================= ARCHIVE (MINIMALIST GRID WITH GITHUB) ================= */}
<div className="space-y-6 pt-12">

  {/* Header Label */}
  <div className="flex items-center gap-3">
    <div className="h-1 w-6 rounded-full bg-neutral-700" />
    <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
      Project Archive
    </span>
  </div>

  {/* Responsive Grid */}
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    {archiveProjects.map((project, index) => (
      <div
        key={index}
        className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border 
        border-neutral-800/60
        bg-neutral-900/30
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-neutral-700
        hover:bg-neutral-900/60
        "
      >
        {/* IMAGE & FLOATING GITHUB BUTTON */}
        <div className="relative overflow-hidden aspect-video bg-neutral-950 border-b border-neutral-800/40">
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />

          {/* Overlay Gelap Halus */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />

          {/* Floating GitHub Icon Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            title="View Repository"
            className="
            absolute 
            top-3 
            right-3 
            z-20 
            p-2.5 
            rounded-xl 
            bg-neutral-900/80 
            backdrop-blur-md 
            text-neutral-400 
            border 
            border-neutral-800 
            transition-all 
            duration-200 
            hover:bg-white 
            hover:text-black 
            hover:border-white
            shadow-lg
            "
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.068.069-.068 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* CONTENT INFO */}
        <div className="p-5 space-y-3.5">
          
          <div className="space-y-1.5">
            {/* Judul dengan Ikon Folder Estetik */}
            <h3 className="flex items-center gap-2 text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
              <svg className="w-4 h-4 text-neutral-500 group-hover:text-yellow-400/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              {project.title}
            </h3>

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              {project.desc}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="
                px-2
                py-0.5
                rounded-md
                bg-neutral-800/50
                text-neutral-400
                text-[10px]
                font-mono
                border
                border-neutral-800/30
                "
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    ))}
  </div>
</div>

      </div>   
    </section>
  )
}