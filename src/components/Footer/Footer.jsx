import Button from '../Button/Button.jsx'
import logoImage from '../../../Design Images/MyPM logo.jpg'

const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Vision', href: '#vision' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
]

function Footer() {
  return (
    <footer className="site-footer" id="community">
      <div className="section-inner footer-inner">
        <div className="footer-brand-wrap">
          <a className="brand" href="#home" aria-label="MY-PM home">
            <img className="brand-image" src={logoImage} alt="" />
            <span>MY<span className="brand-accent">-PM</span></span>
          </a>
          <p>Operational clarity for modern teams building what comes next.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <Button href="#waitlist" showArrow variant="secondary">Join the waitlist</Button>
      </div>

      <div className="section-inner footer-meta">
        <span>© 2026 MY-PM</span>
        <span>Built for ambitious teams.</span>
      </div>
    </footer>
  )
}

export default Footer
