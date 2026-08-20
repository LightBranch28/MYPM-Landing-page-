import {
  BrainCircuit,
  CalendarRange,
  CheckCheck,
  LineChart,
} from 'lucide-react'
import solutionImage from '../../../Design Images/IMG-20260820-WA0010.jpg'

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-guided priorities',
    text: 'Turn noise into clear recommendations so teams know what matters most at any moment.',
  },
  {
    icon: CalendarRange,
    title: 'Shared execution rhythm',
    text: 'Keep milestones, owners, and handoffs connected in one operating view.',
  },
  {
    icon: LineChart,
    title: 'Live project visibility',
    text: 'Spot blockers early with clean performance snapshots and delivery signals.',
  },
  {
    icon: CheckCheck,
    title: 'Coordinated decisions',
    text: 'Align strategy and execution with decisions anchored to real context and progress.',
  },
]

function Solution() {
  return (
    <section className="landing-section solution-section" id="product" aria-labelledby="solution-title">
      <div className="section-inner">
        <div className="solution-heading-wrap">
          <div className="section-heading align-left">
            <p className="eyebrow">The solution</p>
            <h2 id="solution-title">A single command center for momentum.</h2>
          </div>
          <img className="solution-image" src={solutionImage} alt="MY-PM brand system and product identity" />
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
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

export default Solution
