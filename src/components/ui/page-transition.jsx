                        import React from "react"
import { motion } from "framer-motion"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
}

export function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Variante para transições mais suaves
export function SmoothPageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Variante para transições com fade
export function FadePageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Variante para transições laterais sofisticadas
export function LateralPageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        x: 30,
        scale: 0.95
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        scale: 1
      }}
      exit={{
        opacity: 0,
        x: -20,
        scale: 1.02
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.3 },
        x: { duration: 0.4 },
        scale: { duration: 0.35 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Variante para surgimento de serviços (dropdown)
export function ServiceAppearTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: -10,
        scale: 0.9,
        filter: "blur(2px)"
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      exit={{
        opacity: 0,
        y: -5,
        scale: 0.95,
        filter: "blur(1px)"
      }}
      transition={{
        duration: 0.25,
        ease: [0.23, 1, 0.32, 1],
        opacity: { duration: 0.2 },
        y: { duration: 0.25 },
        scale: { duration: 0.25 },
        filter: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
