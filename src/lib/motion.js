export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
}

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
    },
  },
}