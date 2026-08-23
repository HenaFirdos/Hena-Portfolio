import { motion } from 'framer-motion'
import { Activity, Check, Code2, FileSearch, Gauge, HeartPulse, Sparkles } from 'lucide-react'

export function ProjectVisual({ kind }: { kind: 'ats' | 'health' | 'review' }) {
  if (kind === 'health') return (
    <div className="project-visual health-visual">
      <div className="mock-window"><div className="mock-bar"><i/><i/><i/><span>CardioPredict / analytics</span></div>
        <div className="health-grid"><div className="risk-panel"><span>Risk assessment</span><motion.div className="risk-ring" initial={{ rotate: -30 }} whileInView={{ rotate: 0 }}><strong>Low</strong><small>18%</small></motion.div><p><Check/> Model confidence <b>94.2%</b></p></div>
        <div className="vitals"><span>Clinical signals</span>{[['Heart rate','72 bpm'],['Cholesterol','Normal'],['Blood pressure','118 / 78']].map(row=><div key={row[0]}><i/><span>{row[0]}</span><b>{row[1]}</b></div>)}<motion.svg viewBox="0 0 300 75" preserveAspectRatio="none"><motion.path d="M0 47 L48 47 L60 38 L72 56 L88 8 L108 66 L125 47 L170 47 L180 39 L194 55 L207 19 L225 59 L240 47 L300 47" fill="none" stroke="currentColor" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.6 }}/></motion.svg></div></div>
      </div><div className="visual-stamp"><HeartPulse/> ML prediction pipeline</div>
    </div>
  )
  if (kind === 'review') return (
    <div className="project-visual review-visual">
      <div className="mock-window"><div className="mock-bar"><i/><i/><i/><span>review-ai / pull-request #42</span></div>
        <div className="review-grid"><div className="code-pane"><small>auth.service.js</small><p><span>14</span><em>async function</em> validateToken(token) {'{'}</p><p><span>15</span>&nbsp; <em>const</em> user = await db.find(token)</p><p className="line-warn"><span>16</span>&nbsp; return user.password</p><p><span>17</span>{'}'}</p></div><div className="review-note"><span><Sparkles/> AI Review</span><strong>Security issue found</strong><p>Avoid returning password data from the user record. Select only the fields the caller needs.</p><button><Check/> Apply suggestion</button></div></div>
      </div><div className="visual-stamp"><Code2/> Thoughtful reviews, faster</div>
    </div>
  )
  return (
    <div className="project-visual ats-visual">
      <div className="mock-window"><div className="mock-bar"><i/><i/><i/><span>HireLens / resume-intelligence</span></div>
        <div className="ats-layout"><aside><div className="mini-logo">H</div>{[FileSearch, Gauge, Sparkles, Activity].map((Icon,index)=><span key={index} className={index===0?'selected':''}><Icon/></span>)}</aside><main><div className="ats-head"><div><small>Resume analysis</small><strong>Senior Software Engineer</strong></div><span>Analysis complete <Check/></span></div><div className="ats-content"><div className="score-card"><span>ATS readiness</span><div className="score-ring"><strong>86</strong><small>/ 100</small></div><p>Strong match for this role</p></div><div className="gap-card"><span>Top skill gaps</span>{[['System design','72%'],['Cloud platforms','58%'],['CI / CD','41%']].map(item=><div key={item[0]}><p>{item[0]}<b>{item[1]}</b></p><i><motion.em initial={{width:0}} whileInView={{width:item[1]}} transition={{duration:1}}/></i></div>)}</div></div></main></div>
      </div><div className="visual-stamp"><Sparkles/> LangChain + RAG</div>
    </div>
  )
}
