const certificates = [
  {
    name: 'Sertifikat Kompetensi BNSP',
    issuer: 'SMK PPLG',
    year: '2025',
  },
  {
    name: 'Dasar Pemrograman Web',
    issuer: 'Dicoding',
    year: '2025',
  },
  {
    name: 'Membuat Aplikasi Laravel',
    issuer: 'Udemy',
    year: '2024',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_25%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Sertifikasi</p>
          <h2 className="mt-4 text-4xl font-black text-white">Pengakuan & Sertifikat</h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Daftar sertifikat kompetensi dan kursus online yang mendukung perjalanan saya menjadi full-stack web developer.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.name} className="rounded-4xl border border-white/10 bg-white/5 p-7 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.3)] backdrop-blur-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
                {cert.year}
              </div>
              <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}