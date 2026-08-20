import Button from '../../components/Button/Button.jsx'
import { CheckCircle2 } from 'lucide-react'
import heroImage from '../../../Design Images/IMG-20260820-WA0008.jpg'

function Hero() {
  return (
    <section className="landing-section hero-section" id="home" aria-labelledby="hero-title">
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">The intelligent project partner</p>
          <h1 id="hero-title">From idea to <span>execution.</span></h1>
          <p className="hero-text">
            One focused workspace to turn ambitious ideas into clear, coordinated progress with AI by your side.
          </p>

          <div className="preview-actions">
            <Button href="#waitlist" showArrow>Join the founding community</Button>
            <Button href="#product" variant="secondary">Explore MY-PM</Button>
          </div>

          <ul className="hero-points" aria-label="Key benefits">
            <li><CheckCircle2 size={16} /> Driving clarity across every milestone</li>
            <li><CheckCircle2 size={16} /> Built for founders, PMs, and operators</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="MY-PM product preview">
          <img className="hero-image" src={heroImage} alt="MY-PM dashboard and connected devices" />
        </div>
      </div>
    </section>
  )
}

export default Hero
