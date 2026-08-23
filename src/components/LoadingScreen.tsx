import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loader" exit={{ opacity: 0 }} transition={{ duration: .5 }}>
          <motion.div className="loader-mark" initial={{ scale: .75, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>HF<span>.</span></motion.div>
          <div className="loader-track"><motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.05, ease: [0.65, 0, 0.35, 1] }} /></div>
          <span>Building something thoughtful</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
