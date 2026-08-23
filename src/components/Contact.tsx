import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { socials } from '../data/portfolio'

const contacts = [
  { label: 'Email', value: 'officialhenafirdos01@gmail.com', href: 'mailto:officialhenafirdos01@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 9039181430', href: 'tel:+919039181430', icon: Phone },
  { label: 'LinkedIn', value: 'hena-firdos-71521228a', href: socials.linkedin, icon: Linkedin },
  { label: 'GitHub', value: '@HenaFirdos', href: socials.github, icon: Github },
]

export function Contact() {
  return (
    <section id="contact" className="section-wrap contact-section">
      <motion.div className="contact-intro" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><div className="eyebrow"><span>07</span>Let’s connect</div><h2>Have a hard problem?<br/><em>Let’s build the answer.</em></h2><p>I’m seeking Software Engineer and AI Engineer roles where scalable systems, user-facing products, and practical GenAI come together.</p><a className="contact-cta" href="mailto:officialhenafirdos01@gmail.com"><span><Mail/>Start a conversation</span><ArrowUpRight/></a><div className="location"><MapPin/><span>Bangalore, Karnataka</span><i/>Open to opportunities</div></motion.div>
      <motion.div className="contact-list" initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <div className="contact-list-head"><span>Direct channels</span><Send/></div>
        {contacts.map((contact,index)=><a key={contact.label} href={contact.href} target={contact.href.startsWith('http')?'_blank':undefined} rel="noreferrer"><small>0{index+1}</small><i><contact.icon/></i><div><span>{contact.label}</span><strong>{contact.value}</strong></div><ArrowUpRight/></a>)}
      </motion.div>
    </section>
  )
}
