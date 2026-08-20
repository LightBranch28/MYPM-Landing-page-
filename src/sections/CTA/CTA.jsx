import Button from '../../components/Button/Button.jsx'
import ctaImage from '../../../Design Images/IMG-20260820-WA0004.jpg'

function CTA() {
  return (
    <section className="landing-section cta-section" id="waitlist" aria-labelledby="cta-title">
      <div className="section-inner cta-card" style={{ '--section-image': `url("${ctaImage}")` }}>
        <div>
          <p className="eyebrow">Join the community</p>
          <h2 id="cta-title">See the future of project work before it goes mainstream.</h2>
        </div>

        <div className="cta-actions">
          <Button href="#home" showArrow>Get early access</Button>
          <Button href="#product" variant="secondary">Learn more</Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
