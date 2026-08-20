import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from '../Button/Button.jsx'
import './navbar.css'
import logoImage from '../../../Design Images/MyPM logo.jpg'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#product' },
  { label: 'Vision', href: '#vision' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="MY-PM home">
          <img className="brand-image" src={logoImage} alt="" />
          <span>MY<span className="brand-accent">-PM</span></span>
        </a>

        <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
          <Button href="#waitlist" showArrow>Join waitlist</Button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar