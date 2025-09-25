import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Delux Curations</h3>
            <p>Creating unforgettable experiences with premium event rentals, professional lighting, and cutting-edge 360° spin video booths.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/event-rentals">Event Rentals</Link></li>
              <li><Link to="/lighting">Professional Lighting</Link></li>
              <li><Link to="/spin-booth">360° Spin Booth</Link></li>
              <li><Link to="/services">All Services</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@deluxcurations.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Event Street, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Delux Curations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
