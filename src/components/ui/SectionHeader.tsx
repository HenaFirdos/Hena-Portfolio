import { motion } from 'framer-motion'

export function SectionHeader({ index, eyebrow, title, description, align = 'left' }: {
  index: string; eyebrow: string; title: string; description?: string; align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: .65 }} className={`section-header ${align === 'center' ? 'section-header-center' : ''}`}
    >
      <div className="eyebrow"><span>{index}</span>{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
