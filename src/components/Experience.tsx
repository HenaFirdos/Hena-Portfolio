import { motion } from 'framer-motion'
import { Check, CodeXml } from 'lucide-react'
import { SectionHeader } from './ui/SectionHeader'

const highlights = [
  'Built 5+ C++ applications using OOP, file handling, and modular design',
  'Applied data structures and algorithms to resolve 15+ logic and debugging issues',
  'Completed 10+ peer code reviews while collaborating with Git',
]

export function Experience() {
  return (
    <section id="experience" className="section-wrap experience-section">
      <SectionHeader index="02" eyebrow="Experience" title="Learning by building in the real world." description="Internship experience focused on C++ development, debugging, code reviews, and structured engineering habits." />
      <motion.div className="timeline" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="timeline-rail"><motion.i initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ duration: 1 }} /><span /></div>
        <span className="timeline-date">Nov 2024 - Feb 2025</span>
        <article className="experience-card glass-card">
          <div className="experience-top"><div className="company-mark">C<span>z</span></div><div><span className="card-label">Cognifyz Technologies</span><h3>C++ Development Intern</h3></div><CodeXml /></div>
          <div className="experience-body"><p>Worked remotely as a C++ Development Intern, turning core programming concepts into working applications while practicing reliable team workflows.</p><div>{highlights.map(highlight => <span key={highlight}><i><Check /></i>{highlight}</span>)}</div></div>
          <div className="experience-tags"><span>C++</span><span>OOP</span><span>DSA</span><span>Git</span><span>Code Review</span></div>
        </article>
      </motion.div>
    </section>
  )
}
