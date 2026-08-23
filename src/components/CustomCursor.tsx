import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { damping: 28, stiffness: 400, mass: .4 })
  const smoothY = useSpring(y, { damping: 28, stiffness: 400, mass: .4 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY) }
    const over = (event: MouseEvent) => setHovering(Boolean((event.target as HTMLElement).closest('a, button, [data-cursor]')))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over) }
  }, [x, y])

  return <motion.div className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`} style={{ x: smoothX, y: smoothY }} aria-hidden="true"><span /></motion.div>
}
