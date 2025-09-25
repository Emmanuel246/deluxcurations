import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookDropdownOpen, setIsBookDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path
  const isBookActive = () => location.pathname === '/book-marquee' || location.pathname === '/book-videobooth'

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Delux Curations</h1>
            <span className="tagline">Premium Event Experiences</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</Link></li>

              {/* Book Dropdown */}
              <li className="nav-dropdown">
                <button
                  className={`nav-dropdown-toggle ${isBookActive() ? 'active' : ''}`}
                  onClick={() => setIsBookDropdownOpen(!isBookDropdownOpen)}
                >
                  Book
                  <ChevronDown size={16} className={`chevron ${isBookDropdownOpen ? 'rotated' : ''}`} />
                </button>
                <div className={`dropdown-menu ${isBookDropdownOpen ? 'show' : ''}`}>
                  <Link
                    to="/book-marquee"
                    className="dropdown-link"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsBookDropdownOpen(false);
                    }}
                  >
                    Marquee
                  </Link>
                  <Link
                    to="/book-videobooth"
                    className="dropdown-link"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsBookDropdownOpen(false);
                    }}
                  >
                    360° Videobooth
                  </Link>
                </div>
              </li>

              <li><Link to="/lighting" className={isActive('/lighting') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Lighting</Link></li>
              <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          <div className="header-contact">
            <a href="tel:+13334445555" className="contact-link">
              <Phone size={18} />
              <span>+1-333-444-5555</span>
            </a>
            <a href="mailto:info@deluxcurations.com" className="contact-link">
              <Mail size={18} />
              <span>info@deluxcurations.com</span>
            </a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
