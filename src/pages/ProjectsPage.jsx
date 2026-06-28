export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Projects
        </p>

        <h1 className="text-6xl font-bold mb-10">
          All Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              Robotics Portfolio
            </h2>

            <p className="text-white/60">
              Futuristic robotics website built with React.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold mb-4">
              AI Dashboard
            </h2>

            <p className="text-white/60">
              Cyberpunk-inspired analytics dashboard.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}