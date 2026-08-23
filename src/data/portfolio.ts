import {
  Braces, BrainCircuit, Cloud, Code2, Database, Github, Globe2,
  KeyRound, Layers3, ServerCog, Sparkles, TerminalSquare, Workflow,
  type LucideIcon,
} from 'lucide-react'

export type SkillGroup = {
  title: string
  description: string
  icon: LucideIcon
  tone: 'violet' | 'cyan' | 'blue'
  skills: string[]
  strength: number
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'AI Lab', href: '#ai' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', description: 'Core languages for product engineering and problem solving.', icon: Braces, tone: 'violet', strength: 88, skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Frontend', description: 'Responsive interfaces with clear state and polished interactions.', icon: Layers3, tone: 'cyan', strength: 86, skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', description: 'Secure APIs, authentication, and service architecture.', icon: ServerCog, tone: 'blue', strength: 85, skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT'] },
  { title: 'Database', description: 'Practical data modeling for relational and document stores.', icon: Database, tone: 'violet', strength: 82, skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Vector Databases'] },
  { title: 'AI / GenAI', description: 'LLM applications with prompt pipelines, retrieval, and embeddings.', icon: BrainCircuit, tone: 'cyan', strength: 88, skills: ['LLMs', 'Prompt Engineering', 'LangChain', 'RAG', 'Embeddings', 'OpenAI API'] },
  { title: 'Tools & CS', description: 'Engineering fundamentals and tooling for reliable delivery.', icon: Cloud, tone: 'blue', strength: 83, skills: ['Git', 'GitHub', 'Docker', 'DSA', 'OOP', 'DBMS', 'SDLC'] },
]

export type Project = {
  number: string
  title: string
  eyebrow: string
  description: string
  tech: string[]
  features: string[]
  github: string
  live?: string
  kind: 'ats' | 'health' | 'review'
}

export const projects: Project[] = [
  {
    number: '01', title: 'HireLens', eyebrow: 'GenAI Job Preparation Platform', kind: 'ats',
    description: 'A full-stack AI platform that parses resumes, scores ATS compatibility, and generates tailored interview questions for each target role.',
    tech: ['React.js', 'TypeScript', 'FastAPI', 'LangChain', 'Docker'],
    features: ['Resume parsing', 'ATS scoring', '10+ questions per role', 'Personalized feedback'],
    github: 'https://github.com/HenaFirdos/GenAI-Job-Preparation-Platform',
    live: 'https://hire-lens-ai-resume-jd-analyzer.vercel.app',
  },
  {
    number: '02', title: 'ReviewAI', eyebrow: 'AI-Powered Code Reviewer', kind: 'review',
    description: 'A full-stack AI code review tool that analyzes submitted code and returns bug flags plus quality suggestions in under 3 seconds per file.',
    tech: ['React.js', 'TypeScript', 'FastAPI', 'LangChain', 'JWT', 'Docker'],
    features: ['50+ snippets tested', 'Vector embeddings', 'Semantic search', 'JWT sessions'],
    github: 'https://github.com/HenaFirdos/AI-code-reviewer',
  },
  {
    number: '03', title: 'CardioPredict', eyebrow: 'Heart Attack Risk Prediction', kind: 'health',
    description: 'A machine-learning system that predicts heart-attack risk from clinical features through a clear, reproducible inference pipeline.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    features: ['Data preprocessing', 'Model evaluation', 'Feature engineering', 'Prediction pipeline'],
    github: 'https://github.com/HenaFirdos/Heart-attack-prediction-project',
  },
]

export const certifications = [
  { title: 'Generative AI Professional', issuer: 'Oracle', icon: Sparkles, code: 'GEN AI' },
  { title: 'AI Foundations Associate', issuer: 'Oracle', icon: BrainCircuit, code: 'AI / ML' },
  { title: 'Software Engineering Simulation', issuer: 'JPMorgan Chase · Forage', icon: Workflow, code: 'SWE' },
  { title: '5-star Python Rating', issuer: 'HackerRank', icon: TerminalSquare, code: 'PYTHON' },
]

export const foundations = [
  { label: 'Data Structures & Algorithms', icon: Code2 },
  { label: 'Object-Oriented Programming', icon: Layers3 },
  { label: 'Database Management Systems', icon: Database },
  { label: 'Operating Systems', icon: TerminalSquare },
  { label: 'Computer Networks', icon: Globe2 },
]

export const aiExpertise = [
  { name: 'Generative AI', icon: Sparkles }, { name: 'Prompt Engineering', icon: TerminalSquare },
  { name: 'LangChain', icon: Workflow }, { name: 'RAG Systems', icon: BrainCircuit },
  { name: 'Vector Search', icon: Layers3 }, { name: 'LLM Applications', icon: KeyRound },
]

export const socials = { github: 'https://github.com/HenaFirdos', linkedin: 'https://www.linkedin.com/in/hena-firdos-71521228a/' }

export const roleWords = ['Full Stack Engineer', 'Backend Engineer', 'GenAI Engineer', 'Software Engineer']

export const techOrbit = [
  { label: 'React', x: '12%', y: '24%', delay: 0 }, { label: 'FastAPI', x: '78%', y: '17%', delay: .7 },
  { label: 'LangChain', x: '78%', y: '67%', delay: 1.4 }, { label: 'Python', x: '13%', y: '72%', delay: 2.1 },
  { label: 'RAG', x: '49%', y: '8%', delay: 2.8 },
]

export const quickActions = [
  { label: 'View selected work', href: '#projects', icon: Code2 },
  { label: 'Explore skills', href: '#skills', icon: Layers3 },
  { label: 'Open GitHub', href: socials.github, icon: Github },
  { label: 'Send an email', href: 'mailto:officialhenafirdos01@gmail.com', icon: Sparkles },
]
