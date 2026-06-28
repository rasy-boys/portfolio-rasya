const experiences = [
  {
    title: 'Magang Web Developer',
    company: 'SMK Industri / Industri Mitra',
    period: 'Jul 2025 - Des 2025',
    description: 'Melakukan praktik pengembangan web menggunakan Laravel untuk backend dan React untuk antar muka pengguna. Bertanggung jawab atas modul peminjaman, manajemen data siswa, dan optimasi tampilan responsif.',
  },
  {
    title: 'Asisten Proyek Digital',
    company: 'Tim Riset SMK',
    period: 'Jan 2025 - Jun 2025',
    description: 'Mendampingi pengembangan website sekolah dan dokumentasi teknis. Mempelajari alur deployment, Git collaboration, serta integrasi API sederhana.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Pengalaman</p>
          <h2 className="mt-4 text-4xl font-black text-white">Pengalaman Praktik Kerja</h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Rekam jejak magang dan praktik kerja lapangan yang mendukung kemampuan saya dalam pengembangan web dan kolaborasi tim.
          </p>
        </div>
        <div className="relative border-l border-emerald-400/20 pl-8">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-400/80 to-transparent" />
          <div className="space-y-10">
            {experiences.map((item) => (
              <div key={item.title} className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.35)] backdrop-blur-2xl">
                <div className="absolute -left-6 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-100">
                  <span className="text-sm font-semibold">PKL</span>
                </div>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">{item.period}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-emerald-200">{item.company}</p>
                <p className="mt-5 text-zinc-300 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}