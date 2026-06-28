export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),transparent_30%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Pendidikan</p>
          <h2 className="mt-4 text-4xl font-black text-white">Riwayat Pendidikan</h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Perjalanan saya di SMK jurusan PPLG berfokus pada pengembangan web, framework Laravel, serta praktik rekayasa perangkat lunak yang modern.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.5)] backdrop-blur-2xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              SMK Negeri • PPLG
            </div>
            <h3 className="text-2xl font-bold text-white">Pengembangan Perangkat Lunak dan Gim</h3>
            <p className="mt-4 text-zinc-300 leading-8">
              Saya mempelajari dasar-dasar pemrograman, sistem basis data, dan siklus hidup perangkat lunak melalui proyek web serta pengembangan aplikasi sekolah.
            </p>
            <ul className="mt-6 space-y-4 text-zinc-300">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                Fokus pada HTML, CSS, JavaScript, PHP, dan pola arsitektur MVC.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                Latihan menggunakan Laravel untuk backend, MySQL untuk database, dan React untuk antarmuka interaktif.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                Presentasi proyek dan kolaborasi tim sebagai persiapan dunia kerja TI.
              </li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.3)] backdrop-blur-2xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Fokus Kursus
            </div>
            <div className="space-y-5 text-zinc-300">
              <div>
                <h4 className="text-xl font-semibold text-white">Web Development</h4>
                <p className="mt-2 leading-7">Dokumentasi, API, dan pengembangan aplikasi responsif dengan React, Tailwind, dan Laravel.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">Rekayasa Perangkat Lunak</h4>
                <p className="mt-2 leading-7">Penggunaan model waterfall, UML sederhana, dan dokumentasi teknis untuk proyek sekolah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}