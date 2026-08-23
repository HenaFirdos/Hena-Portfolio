import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { socials } from '../data/portfolio'

export function Footer() {
  return (
    <footer><div><a className="brand" href="#home">HF<span>.</span></a><p>Designed & developed by <strong>Hena Firdos</strong></p></div><span>© {new Date().getFullYear()} · Built with intent and a little caffeine.</span><div className="footer-actions"><a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href="#home" className="to-top" aria-label="Scroll to top"><ArrowUp/></a></div></footer>
  )
}
