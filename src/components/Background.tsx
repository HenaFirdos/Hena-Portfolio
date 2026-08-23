import { motion, useScroll, useTransform } from 'framer-motion'

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 97}%`,
  top: `${(index * 53) % 91}%`,
  size: 1 + (index % 3),
  duration: 8 + (index % 7),
}))

export function Background() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  return (
    <div className="ambient" aria-hidden="true">
      <motion.div className="blob blob-one" style={{ y }} />
      <motion.div className="blob blob-two" animate={{ x: [0, 80, -30, 0], y: [0, -45, 30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="noise" />
      <div className="grid-mask" />
      {particles.map(particle => (
        <motion.span key={particle.id} className="particle" style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ opacity: [.08, .55, .08], y: [0, -30, 0] }} transition={{ duration: particle.duration, repeat: Infinity, delay: particle.id * .13 }} />
      ))}
    </div>
  )
}
