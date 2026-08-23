import { motion } from 'framer-motion'
import { GraduationCap, MapPin, MoveUpRight } from 'lucide-react'
import { foundations } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

export function About() {
  return (
    <section id="about" className="section-wrap about-section">
      <SectionHeader index="01" eyebrow="About" title="Engineer by training.\nBuilder by instinct." description="I care about the full journey from understanding a problem to designing the system and polishing the final interaction." />
      <div className="about-grid">
        <motion.article className="education-card glass-card" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="card-icon"><GraduationCap /></div><span className="card-label">Education</span>
          <h3>B.Tech · Computer Science<br/><span>Artificial Intelligence & ML</span></h3>
          <p>Final year student building a strong bridge between software engineering fundamentals and applied intelligence.</p>
          <div className="education-meta"><div><strong>8.42</strong><span>CGPA</span></div><div><strong>2026</strong><span>Graduation</span></div><div><MapPin/><span>Bhopal, MP</span></div></div>
          <div className="card-corner"><MoveUpRight /></div>
        </motion.article>
        <motion.article className="foundation-card glass-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .12 }}>
          <div className="foundation-heading"><div><span className="card-label">Core foundation</span><h3>Fundamentals that scale</h3></div><span>05 disciplines</span></div>
          <div className="foundation-list">
            {foundations.map((item, index) => <motion.div key={item.label} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 + index * .07 }}><span>0{index + 1}</span><item.icon/><strong>{item.label}</strong><MoveUpRight /></motion.div>)}
          </div>
        </motion.article>
      </div>
    </section>
  )
}
