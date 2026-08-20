import { ArrowRight, Bot, CircleDashed, Layers2, Rocket } from 'lucide-react'
import workflowImage from '../../../Design Images/IMG-20260820-WA0007.jpg'

const steps = [
  {
    icon: CircleDashed,
    title: 'Map the mission',
    text: 'Capture goals, priorities, and constraints in one structured workspace.',
  },
  {
    icon: Layers2,
    title: 'Coordinate the work',
    text: 'Break delivery into clear owners, milestones, and dependencies.',
  },
  {
    icon: Bot,
    title: 'Use AI as a partner',
    text: 'Surface summaries, answer friction points, and identify next moves.',
  },
  {
    icon: Rocket,
    title: 'Launch with momentum',
    text: 'Keep the plan moving with live status, quick decisions, and fast follow-through.',
  },
]

function Workflow() {
  return (
    <section className="landing-section workflow-section" id="workflow" aria-labelledby="workflow-title" style={{ '--section-image': `url("${workflowImage}")` }}>
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2 id="workflow-title">How MY-PM keeps execution moving.</h2>
        </div>

        <div className="workflow-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="workflow-step">
              <div className="workflow-topline">
                <span className="step-index">0{index + 1}</span>
                <ArrowRight size={15} />
              </div>
              <div className="workflow-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow
