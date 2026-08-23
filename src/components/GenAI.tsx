import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Cpu, Sparkles } from 'lucide-react'
import { aiExpertise } from '../data/portfolio'
import { Button } from './ui/Button'

export function GenAI() {
  return (
    <section id="ai" className="section-wrap ai-section">
      <motion.div className="ai-shell" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="ai-copy"><div className="eyebrow"><span>06</span>AI engineering</div><h2>Building LLM-powered<br/><em>products.</em></h2><p>Creating production-style AI applications with LangChain, RAG, vector search, prompt engineering, and full-stack product workflows.</p>
          <div className="ai-skills">{aiExpertise.map((item,index)=><motion.div key={item.name} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} transition={{delay:.1+index*.06}} viewport={{once:true}}><item.icon/><span>{item.name}</span><i>0{index+1}</i></motion.div>)}</div>
          <Button href="#projects" variant="secondary">See AI projects <ArrowRight/></Button>
        </div>
        <div className="ai-visual" aria-hidden="true">
          <div className="ai-grid"/>
          {[1,2,3].map(ring=><motion.div key={ring} className={`neural-ring ring-${ring}`} animate={{rotate:ring%2?360:-360}} transition={{duration:18+ring*5,repeat:Infinity,ease:'linear'}}>{Array.from({length:ring*3+3},(_,index)=><i key={index}/>)}</motion.div>)}
          <motion.div className="ai-core" animate={{scale:[1,1.06,1],boxShadow:['0 0 50px #8b5cf630','0 0 90px #06b6d455','0 0 50px #8b5cf630']}} transition={{duration:4,repeat:Infinity}}><BrainCircuit/><span>HENA / AI</span><small>intelligence layer</small></motion.div>
          <motion.div className="data-chip chip-one" animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity}}><Sparkles/><span>GENERATE</span></motion.div>
          <motion.div className="data-chip chip-two" animate={{y:[0,10,0]}} transition={{duration:5,repeat:Infinity}}><Cpu/><span>INFERENCE</span></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
