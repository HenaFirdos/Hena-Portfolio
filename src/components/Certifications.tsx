import { motion } from 'framer-motion'
import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

export function Certifications() {
  return (
    <section id="certifications" className="section-wrap certification-section">
      <SectionHeader index="05" eyebrow="Credentials" title="Validated learning. Applied curiosity." />
      <div className="certificate-grid">
        {certifications.map((certificate, index) => <motion.a href="https://github.com/HenaFirdos/certificates" target="_blank" rel="noreferrer" className="certificate-card glass-card" key={certificate.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -7 }} viewport={{ once: true }} transition={{ delay: index * .06 }}>
          <div className="certificate-code"><certificate.icon/><span>{certificate.code}</span></div><BadgeCheck className="verified"/><small>{certificate.issuer}</small><h3>{certificate.title}</h3><div><span>View credential</span><ArrowUpRight/></div>
          <Award className="award-watermark"/>
        </motion.a>)}
      </div>
    </section>
  )
}
