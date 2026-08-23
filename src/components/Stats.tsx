import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Counter({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: latest => setDisplay(latest) })
    return controls.stop
  }, [inView, value])
  return <span ref={ref}>{display.toFixed(decimals)}{suffix}</span>
}

export function Stats() {
  return (
    <section className="section-wrap stats-section" aria-label="Engineering statistics">
      {[{label:'Academic CGPA',value:8.42,decimals:2},{label:'GitHub repositories',value:30,suffix:'+'},{label:'AI product builds',value:2,suffix:'+'},{label:'Python rating',value:5,suffix:' star'}].map((stat,index)=><motion.div key={stat.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}><small>0{index+1}</small><strong><Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals}/></strong><span>{stat.label}</span></motion.div>)}
    </section>
  )
}
