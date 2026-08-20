import { AlertTriangle, Gauge, Layers3, MessageSquareWarning } from 'lucide-react'
import challengeImage from '../../../Design Images/IMG-20260820-WA0005.jpg'

const challenges = [
  {
    icon: Layers3,
    title: 'Work scattered across tools',
    text: 'Roadmaps, updates, and priorities live in different places, creating drift and duplicated effort.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Decisions made without context',
    text: 'Teams wait for status updates instead of seeing the full picture and acting in real time.',
  },
  {
    icon: Gauge,
    title: 'Momentum lost in handoffs',
    text: 'Projects stall when ownership, deadlines, and next steps are not easy to track together.',
  },
]

function Challenge() {
  return (
    <section className="landing-section challenge-section" id="vision" aria-labelledby="challenge-title">
      <div className="section-inner challenge-grid">
        <div className="section-copy">
          <p className="eyebrow">The challenge</p>
          <h2 id="challenge-title">Too many moving parts. Too little clarity.</h2>
          <p>
            High-velocity teams are constantly balancing strategy, delivery, and communication—yet the real blocker is often not lack of effort, but fragmented visibility.
          </p>
        </div>

        <div className="challenge-panel" style={{ '--section-image': `url("${challengeImage}")` }}>
          <div className="panel-header">
            <AlertTriangle size={18} />
            <span>What slows execution</span>
          </div>

          <div className="challenge-list">
            {challenges.map(({ icon: Icon, title, text }) => (
              <div key={title} className="challenge-item">
                <div className="icon-wrap">
                  <Icon size={18} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Challenge
