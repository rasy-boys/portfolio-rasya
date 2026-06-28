import { Menu } from "lucide-react"
import Button from "../ui/button"

const navItems = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
]

export default function Navbar() {
const scrollToSection = (id) => {
  const section = document.getElementById(id)

  if (section) {
    window.lenis.scrollTo(section, {
      offset: -120,
      duration: 1.5,
    })
  }
}

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-5">

      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl px-5 md:px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.03)]">

        {/* LOGO */}
        <div>
          <h1 className="text-white font-black text-xl tracking-[0.3em]">
            RASYA
          </h1>

          <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase">
            Portfolio
          </p>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/60 hover:text-yellow-400 transition duration-300 text-sm tracking-wide"
            >
              {item.name}
            </button>
          ))}

        </div>

        {/* BUTTON */}
        <Button className="hidden md:flex">
          Hire Me
        </Button>

        {/* MOBILE */}
        <button className="md:hidden text-white">
          <Menu />
        </button>

      </nav>

    </header>
  )
}