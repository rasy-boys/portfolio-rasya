const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Tailwind CSS v4', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & DB',
    items: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),transparent_25%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Keahlian</p>
          <h2 className="mt-4 text-4xl font-black text-white">Skill Set</h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            Keahlian saya terbagi menjadi area frontend, backend, dan tools yang sering digunakan saat bekerja dengan proyek web dan aplikasi.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.4)] backdrop-blur-2xl">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-6 grid gap-3">
                {group.items.map((skill) => (
                  <span key={skill} className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}