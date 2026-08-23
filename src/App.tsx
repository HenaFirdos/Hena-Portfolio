import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { Background } from './components/Background'
import { Certifications } from './components/Certifications'
import { CommandPalette } from './components/CommandPalette'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { GenAI } from './components/GenAI'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [commandOpen, setCommandOpen] = useState(false)
  const closeCommand = useCallback(() => setCommandOpen(false), [])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    const keyboard = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setCommandOpen(value => !value)
      }
    }
    window.addEventListener('keydown', keyboard)
    return () => { window.clearTimeout(timer); window.removeEventListener('keydown', keyboard) }
  }, [])

  return (
    <>
      <LoadingScreen visible={loading}/>
      <Background/>
      <CustomCursor/>
      <Header onCommand={() => setCommandOpen(true)}/>
      <main><Hero/><About/><Experience/><Skills/><Projects/><Certifications/><GenAI/><Stats/><Contact/></main>
      <Footer/>
      <CommandPalette open={commandOpen} onClose={closeCommand}/>
    </>
  )
}
