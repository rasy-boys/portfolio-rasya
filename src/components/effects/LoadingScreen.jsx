import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        delay: 2.4,
        duration: 1,
      }}
      className="
        fixed inset-0
        z-999
        flex items-center justify-center
        overflow-hidden
        bg-[#09090b]
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          w-125 h-125
          rounded-full
          bg-yellow-400/10
          blur-[150px]
        "
      />

      {/* GRID */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)]
          bg-size-[5rem_5rem]
          opacity-30
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 text-center">

        {/* STATUS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="
            inline-flex items-center gap-3
            px-5 py-2 rounded-full
            border border-yellow-400/20
            bg-yellow-400/10
            text-yellow-300 text-sm
            mb-10
            backdrop-blur-xl
          "
        >

          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

          SYSTEM INITIALIZING

        </motion.div>

        {/* NAME */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
            letterSpacing: "-0.2em",
          }}

          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.15em",
          }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

          className="
            text-6xl md:text-8xl
            font-black
            text-white
          "
        >
          RASYA
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.6,
            duration: 0.8,
          }}

          className="
            mt-8
            text-white/40
            tracking-[0.4em]
            uppercase
            text-sm
          "
        >
          FUTURISTIC DASHBOARD EXPERIENCE
        </motion.p>

        {/* LOADING BAR */}

        <div
          className="
            mt-14
            w-70 h-2
            rounded-full
            bg-white/5
            overflow-hidden
            mx-auto
          "
        >

          <motion.div
            initial={{
              width: 0,
            }}

            animate={{
              width: "100%",
            }}

            transition={{
              duration: 2,
              ease: "easeInOut",
            }}

            className="
              h-full rounded-full
              bg-linear-to-r
              from-yellow-400
              to-amber-500
            "
          />

        </div>

      </div>

    </motion.div>
  )
}