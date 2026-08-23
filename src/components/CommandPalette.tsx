import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { quickActions } from '../data/portfolio'

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  }, [onClose])
  const filtered = quickActions.filter(action => action.label.toLowerCase().includes(query.toLowerCase()))
  return (
    <AnimatePresence>
      {open && <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
        <motion.div className="command-palette" initial={{ opacity: 0, scale: .96, y: -12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .97, y: -8 }} onMouseDown={event => event.stopPropagation()}>
          <div className="command-search"><Search /><input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Where would you like to go?" /><button onClick={onClose}><X /></button></div>
          <div className="command-results">
            <span className="command-label">Navigate</span>
            {filtered.map(action => <a key={action.label} href={action.href} target={action.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={onClose}><action.icon /><span>{action.label}</span><ArrowUpRight /></a>)}
            {!filtered.length && <p>No matching shortcuts.</p>}
          </div>
          <div className="command-footer"><span>↵ to open</span><span>esc to close</span></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}
