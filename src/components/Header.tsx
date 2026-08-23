import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

export function Header({ onCommand }: { onCommand: () => void }) {
  const [open, setOpen] = useState(false)
  const ids = ['about', 'skills', 'projects', 'ai', 'contact']
  const active = useScrollSpy(ids)

  return (
    <>
      <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15 }}>
        <a className="brand" href="#home" aria-label="Hena Firdos, home">HF<span>.</span></a>
        <nav aria-label="Primary navigation">
          {navItems.map(item => <a className={active === item.href.slice(1) ? 'active' : ''} key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="command-trigger" onClick={onCommand} aria-label="Open command palette"><span>Quick jump</span><kbd>⌘ K</kbd></button>
          <a className="availability" href="#contact"><i />Available</a>
          <button className="mobile-menu" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && <motion.div className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
          {navItems.map((item, index) => <motion.a key={item.href} href={item.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }}>{item.label}</motion.a>)}
        </motion.div>}
      </AnimatePresence>
      <aside className="scroll-indicator" aria-label="Section position">
        {ids.map(id => <a href={`#${id}`} key={id} className={active === id ? 'active' : ''}><span>{id}</span></a>)}
      </aside>
    </>
  )
}
