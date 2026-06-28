import { useState } from "react"
import GridBackground from "../effects/GridBackground"
import { Mail, Send } from "lucide-react"
import Card from "../ui/card"
import Input from "../ui/input"
import Button from "../ui/button"

function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.994 10.125 11.854v-8.385H7.078v-3.47h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.96h-1.514c-1.491 0-1.956.93-1.956 1.885v2.268h3.328l-.532 3.47h-2.796v8.385C19.612 23.067 24 18.092 24 12.073z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9.5 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()

    data.append(
      "access_key",
      "f5d51f04-3286-462a-a233-494b4d0a87d5"
    )

    data.append(
      "subject",
      "New Message From Portfolio"
    )

    data.append("name", form.name)
    data.append("email", form.email)
    data.append("message", form.message)

    try {
      const res = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      )

      const result = await res.json()

      if (result.success) {
        alert("Pesan berhasil dikirim!")

        setForm({
          name: "",
          email: "",
          message: "",
        })
      } else {
        alert("Gagal mengirim pesan.")
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan.")
      console.error(error)
    }
  }

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-[#09090b] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-16 pb-20 md:pt-20 md:pb-28 flex items-center">

      {/* Grid Background Tetap Dipertahankan untuk Tekstur Halus */}
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER - Dibuat Lebih Rapat & Bersih */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-6 rounded-full bg-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Communication Terminal
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 items-start">

       <Card className="p-8 border border-neutral-800/60 bg-neutral-900/20 backdrop-blur-md rounded-2xl">

  <div className="space-y-6">

    <div>
      <h3 className="text-3xl font-bold">
        Let's Connect
      </h3>

      <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
        Feel free to reach out through my social platforms or send me
        a message using the contact form.
      </p>
    </div>

    <div className="space-y-3">

      {/* Facebook */}
<a
  href="https://facebook.com/Asya Fattah"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-blue-500/30 transition-all"
>
  <FacebookIcon className="w-5 h-5 text-blue-400" />

  <div>
    <p className="text-xs text-neutral-500 uppercase">
      Facebook
    </p>

    <h4 className="text-sm font-semibold">
      Asya Fattah
    </h4>
  </div>
</a>

{/* Instagram */}
<a
  href="https://instagram.com/ras_ya215"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-pink-500/30 transition-all"
>
  <InstagramIcon className="w-5 h-5 text-pink-400" />

  <div>
    <p className="text-xs text-neutral-500 uppercase">
      Instagram
    </p>

    <h4 className="text-sm font-semibold">
      @ras_ya215
    </h4>
  </div>
</a>

      {/* Email */}
      <a
        href="mailto:rasyafattah2021@gmail.com"
        className="flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-yellow-400/30 transition-all"
      >
        <Mail className="w-5 h-5 text-yellow-400" />

        <div>
          <p className="text-xs text-neutral-500 uppercase">
            Email
          </p>

          <h4 className="text-sm font-semibold">
            rasyafattah2021@gmail.com
          </h4>
        </div>
      </a>

    </div>

  </div>

</Card>

<Card className="h-full p-8 border border-neutral-800/60 bg-neutral-900/20 backdrop-blur-xl rounded-2xl">

 <form
  onSubmit={handleSubmit}
  className="h-full flex flex-col"
>

    {/* Web3Forms Config */}
    <input
      type="hidden"
      name="access_key"
      value="f5d51f04-3286-462a-a233-494b4d0a87d5"
    />

    <input
      type="hidden"
      name="subject"
      value="New Message From Portfolio"
    />

    <input
      type="hidden"
      name="from_name"
      value="Rasya Portfolio"
    />

    {/* Anti Bot */}
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: "none" }}
    />

    {/* Header */}
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-white">
        Send Me A Message
      </h3>

      <p className="mt-2 text-sm text-neutral-400">
        Have a project or just want to say hello? Feel free to contact me.
      </p>
    </div>

    {/* Name & Email */}
    <div className="grid sm:grid-cols-2 gap-4 mb-4">

      <Input
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Your Name"
  required
/>

    <Input
  name="email"
  type="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Your Email"
  required
/>

    </div>

   <textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  placeholder="Tell me about your project..."
  required
  className="
    w-full
    min-h-45
    rounded-2xl
    border
    border-neutral-800/80
    bg-linear-to-b
    from-neutral-950/80
    to-neutral-900/50
    backdrop-blur-sm
    px-5
    py-4
    text-sm
    text-neutral-200
    placeholder:text-neutral-500
    resize-none
    outline-none
    transition-all
    duration-300
    hover:border-neutral-700
    focus:border-yellow-400/30
    focus:ring-2
    focus:ring-yellow-400/10
  "
/>

    {/* Submit */}
    <Button
      type="submit"
      className="
        mt-6
        h-12
        w-full
        rounded-xl
        bg-white
        text-black
        font-medium
        hover:bg-neutral-200
        flex
        items-center
        justify-center
        gap-2
      "
    >
      Send Message
      <Send size={16} />
    </Button>

  </form>

</Card>

        </div>

      </div>
    </section>
    </>
  )
}
   
