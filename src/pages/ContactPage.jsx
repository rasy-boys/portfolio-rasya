import Button from "../components/ui/button"

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          Contact
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Let's Work Together
        </h1>

        <p className="mt-8 text-white/60 text-lg">
          Open for freelance projects, collaborations,
          and futuristic digital experiences.
        </p>

        <div className="mt-10">
          <Button>
            Contact Me
          </Button>
        </div>

      </div>

    </section>
  )
}