import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Resume from "../components/sections/Resume"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import Footer from "../components/sections/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}