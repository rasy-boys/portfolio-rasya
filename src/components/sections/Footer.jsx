import { ArrowUpRight } from "lucide-react"
import GridBackground from "../effects/GridBackground"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#09090b]
        border-t border-white/10
        px-6 md:px-12 lg:px-20
        py-16
        text-white
      "
    >
      <GridBackground />

      {/* GLOW */}

      <div
        className="
          absolute left-1/2 top-0
          -translate-x-1/2
          w-125 h-50
          bg-yellow-400/10
          blur-[120px]
        "
      />

      {/* WATERMARK */}

      <div
        className="
          absolute inset-0
          flex items-center justify-center
          pointer-events-none
          opacity-[0.03]
          font-black
          text-[120px] md:text-[180px]
          tracking-[0.3em]
          select-none
        "
      >
        RASYA
      </div>

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
        "
      >
        {/* TOP */}

        <div
          className="
            flex flex-col lg:flex-row
            justify-between
            gap-12
            pb-12
            border-b border-white/10
          "
        >
          {/* LEFT */}

          <div className="max-w-xl">
            <span
              className="
                text-yellow-400
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
             Junior Web Developer
            </span>

            <h2
              className="
                mt-4
                text-4xl md:text-5xl
                font-black
              "
            >
              Rasya Fattah
            </h2>

            <p
              className="
                mt-5
                text-white/50
                leading-8
              "
            >
            Web Developer passionate about building
            modern, responsive, and user-friendly
            web applications.
            </p>

            {/* QUICK LINKS */}

            <div
              className="
                flex flex-wrap
                gap-6
                mt-8
                text-sm
                text-white/50
              "
            >
              <a
                href="#about"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                About
              </a>

               <a
                href="#skills"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Skills
              </a>
              <a
                href="#projects"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Projects
              </a>

              <a
                href="#contact"
                className="
                  hover:text-yellow-400
                  transition
                "
              >
                Contact
              </a>
            </div>
          </div>

          {/* SOCIAL */}

         <div className="grid grid-cols-2 gap-4 lg:w-[320px]">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <p className="text-xs text-white/40 uppercase">
      Experience
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      2+
    </h3>

    <p className="text-sm text-white/50">
      Years Learning
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <p className="text-xs text-white/40 uppercase">
      Projects
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      7+
    </h3>

    <p className="text-sm text-white/50">
      Completed
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 col-span-2">
    <p className="text-xs text-white/40 uppercase">
      Current Stack
    </p>

    <p className="mt-2 text-white/80">
      React • Laravel • Tailwind CSS
    </p>
  </div>
</div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            pt-10
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-6
          "
        >
          <p className="text-white/40">
            © 2026 Rasya Fattah — All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="
              flex items-center
              gap-3
              px-6 py-3
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-yellow-400
              hover:bg-yellow-400/10
              transition
            "
          >
            Back To Top

            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}