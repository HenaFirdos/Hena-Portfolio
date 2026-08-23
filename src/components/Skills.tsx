import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

export function Skills() {
  return (
    <section id="skills" className="section-wrap skills-section">
      <SectionHeader index="03" eyebrow="Capabilities" title="A practical stack for ambitious products." description="Broad enough to own the product. Deep enough to make the architecture count." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article key={group.title} className={`skill-card glass-card tone-${group.tone}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} viewport={{ once: true, margin: '-30px' }} transition={{ delay: (index % 3) * .08, duration: .45 }}>
            <div className="skill-card-top"><div className="skill-icon"><group.icon /></div><span>0{index + 1}</span><ArrowUpRight /></div>
            <h3>{group.title}</h3><p>{group.description}</p>
            <div className="skill-chips">{group.skills.map(skill => <motion.span whileHover={{ scale: 1.05 }} key={skill}>{skill}</motion.span>)}</div>
            <div className="skill-meter"><div><span>Working proficiency</span><strong>{group.strength}%</strong></div><i><motion.b initial={{ width: 0 }} whileInView={{ width: `${group.strength}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: .15 }} /></i></div>
          </motion.article>
        ))}
      </div>
      <motion.div className="toolbelt" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <span>Current toolbelt</span><div>{['React', 'TypeScript', 'FastAPI', 'LangChain', 'Python', 'PostgreSQL', 'Docker', 'Git'].map(tool => <strong key={tool}>{tool}</strong>)}</div>
      </motion.div>
    </section>
  )
}
