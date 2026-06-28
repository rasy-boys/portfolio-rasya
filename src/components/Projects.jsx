export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Proyek</p>
          <h2 className="mt-4 text-4xl font-black text-white">Proyek Utama</h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Contoh proyek proyek yang ambisius dan modern, dibangun dengan kombinasi Laravel, React, serta desain UI yang bersih.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-6">
          <article className="lg:col-span-4 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_-50px_rgba(16,185,129,0.5)] backdrop-blur-2xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              Aplikasi Sekolah</div>
            <h3 className="text-3xl font-black text-white">PinjamBuku</h3>
            <p className="mt-5 text-zinc-300 leading-8">
              PinjamBuku adalah aplikasi manajemen peminjaman buku dan inventaris sekolah berbasis Laravel & React. Sistem ini membantu siswa dan petugas memantau stok buku, riwayat peminjaman, serta laporan kehadiran inventaris.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <span className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100">Laravel</span>
              <span className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100">React</span>
              <span className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100">MySQL</span>
              <span className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100">Tailwind CSS</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                GitHub
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-white/10">
                Live Demo
              </a>
            </div>
          </article>
          <article className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.35)] backdrop-blur-2xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              Landing Page</div>
            <h3 className="text-2xl font-bold text-white">OnePage Edu</h3>
            <p className="mt-4 text-zinc-300 leading-7">
              Landing page promo pendidikan dengan layout modern, tombol CTA jelas, dan animasi halus untuk meningkatkan engagement pengguna.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-emerald-950/20 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Stack</p>
                <p className="mt-3 text-sm text-zinc-300">React, Tailwind CSS, Vite</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-white/10">
                Detail Proyek
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}