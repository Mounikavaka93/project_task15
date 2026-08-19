import { motion, useReducedMotion } from 'framer-motion'

export function FadeIn({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

export function MotionItem({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
