import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Lenis from "lenis"

import App from "./App.jsx"
import "./index.css"

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: true,
})

window.lenis = lenis

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)