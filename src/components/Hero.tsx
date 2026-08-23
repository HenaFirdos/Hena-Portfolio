import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { roleWords, socials, techOrbit } from '../data/portfolio'
import { Button } from './ui/Button'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex(index => (index + 1) % roleWords.length), 2600)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.div className="status-pill" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}><i /> Available for software engineering roles <span>↗</span></motion.div>
        <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.32 }}>Full-stack developer · AI/ML learner</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: .7 }}>Hena Firdos<span>.</span></motion.h1>
        <div className="role-line">
          <span>I design and ship as a</span>
          <AnimatePresence mode="wait">
            <motion.strong key={roleWords[roleIndex]} initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0)' }} exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }} transition={{ duration: .38 }}>{roleWords[roleIndex]}</motion.strong>
          </AnimatePresence>
        </div>
        <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>I build LLM-powered applications with Python, FastAPI, React, LangChain, and practical full-stack engineering.</motion.p>
        <motion.div className="hero-buttons" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.75 }}>
          <Button href="#projects">View projects <ArrowRight /></Button>
          <Button href="/Hena-Firdos-Resume.pdf" download variant="secondary">Resume <Download /></Button>
          <Button href="#contact" variant="ghost">Contact me</Button>
        </motion.div>
        <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }}>
          <span>Find me online</span><i />
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:officialhenafirdos01@gmail.com" aria-label="Email"><Mail /></a>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.35, duration: .85 }} aria-hidden="true">
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        <motion.div className="core-card" animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="core-top"><span>engineer.ts</span><i /><i /><i /></div>
          <div className="code-lines">
            <p><em>const</em> engineer = {'{'}</p>
            <p>&nbsp;&nbsp;name: <b>'Hena'</b>,</p>
            <p>&nbsp;&nbsp;focus: [<b>'scale'</b>, <b>'AI'</b>],</p>
            <p>&nbsp;&nbsp;mindset: <b>'ship & learn'</b>,</p>
            <p>{'}'}</p>
          </div>
          <div className="core-status"><i /> systems operational <span>100%</span></div>
        </motion.div>
        {techOrbit.map(item => <motion.div key={item.label} className="tech-float" style={{ left: item.x, top: item.y }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: item.delay }}>{item.label}</motion.div>)}
      </motion.div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown /></a>
    </section>
  )
}
