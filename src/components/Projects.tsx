import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Github } from 'lucide-react'
import { projects } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader } from './ui/SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="section-wrap projects-section">
      <SectionHeader index="04" eyebrow="Selected work" title="Products, not just projects." description="Each build starts with a real problem and ends with something people can actually use." />
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={project.title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .65 }}>
            <div className="project-copy"><div className="project-number"><span>{project.number}</span><i/></div><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}<span>.</span></h3><p>{project.description}</p>
              <div className="project-features">{project.features.map(feature => <span key={feature}><i><Check/></i>{feature}</span>)}</div>
              <div className="project-tech">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                {project.live && <a className="project-primary" href={project.live} target="_blank" rel="noreferrer">View live product <ArrowUpRight/></a>}
                <a className="project-secondary" href={project.github} target="_blank" rel="noreferrer"><Github/> Source code <ArrowUpRight/></a>
              </div>
            </div>
            <ProjectVisual kind={project.kind}/>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
