import Button from '../../components/Button/Button.jsx'
import { CheckCircle2, Sparkles } from 'lucide-react'
import previewImage from '../../../Design Images/IMG-20260820-WA0009.jpg'

const featurePills = ['Roadmaps', 'AI briefings', 'Milestones', 'Delivery health']

function ProductPreview() {
  return (
    <section className="landing-section preview-section" aria-labelledby="preview-title">
      <div className="section-inner preview-shell">
        <div className="section-heading align-left">
          <p className="eyebrow">Product preview</p>
          <h2 id="preview-title">Execution gets visible, aligned, and easier to trust.</h2>
        </div>

        <div className="preview-board">
          <img className="preview-image" src={previewImage} alt="MY-PM project dashboard across tablet, phone, and desktop" />
          <div className="board-panel board-sidebar">
            <span className="board-label">Project pulse</span>
            <div className="board-list">
              <div className="board-item active">
                <span className="status-indicator" />
                <div>
                  <strong>Launch sprint</strong>
                  <small>On track</small>
                </div>
              </div>
              <div className="board-item">
                <span className="status-indicator muted" />
                <div>
                  <strong>Board review</strong>
                  <small>Needs input</small>
                </div>
              </div>
            </div>
          </div>

          <div className="board-panel board-main">
            <div className="board-header">
              <div>
                <span className="board-label">Current focus</span>
                <h3>Q3 launch plan</h3>
              </div>
              <div className="board-sync">
                <Sparkles size={14} />
                AI summary
              </div>
            </div>

            <div className="timeline-row">
              <span>Discovery</span>
              <div className="timeline-track"><span style={{ width: '100%' }} /></div>
              <strong>Complete</strong>
            </div>
            <div className="timeline-row">
              <span>Build</span>
              <div className="timeline-track"><span style={{ width: '76%' }} /></div>
              <strong>76%</strong>
            </div>
            <div className="timeline-row">
              <span>QA</span>
              <div className="timeline-track"><span style={{ width: '42%' }} /></div>
              <strong>42%</strong>
            </div>

            <div className="board-badges">
              {featurePills.map((pill) => (
                <span key={pill}>{pill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="preview-footer">
          <div className="preview-checks">
            {['Shared context', 'Fast decisions', 'Clear execution'].map((item) => (
              <span key={item}><CheckCircle2 size={16} /> {item}</span>
            ))}
          </div>
          <Button href="#waitlist" showArrow>See the product vision</Button>
        </div>
      </div>
    </section>
  )
}

export default ProductPreview
