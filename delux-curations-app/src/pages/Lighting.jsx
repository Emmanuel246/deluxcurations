import { Link } from 'react-router-dom'
import { Zap, CheckCircle, ArrowRight } from 'lucide-react'

const Lighting = () => {
  return (
    <div className="lighting-page">
      <div className="container">
        <section className="page-header">
          <Zap size={64} />
          <h1>Professional Lighting</h1>
          <p>Transform your venue with stunning lighting design and state-of-the-art equipment</p>
        </section>

        <section className="lighting-services">
          <div className="lighting-grid">
            <div className="lighting-card">
              <h3>LED Uplighting</h3>
              <p>Create ambiance and highlight architectural features with our wireless LED uplighting systems.</p>
              <ul>
                <li><CheckCircle size={16} /> Wireless battery-powered units</li>
                <li><CheckCircle size={16} /> Full color spectrum control</li>
                <li><CheckCircle size={16} /> Remote programming</li>
                <li><CheckCircle size={16} /> No cables or power requirements</li>
              </ul>
            </div>

            <div className="lighting-card">
              <h3>Intelligent Moving Lights</h3>
              <p>Dynamic lighting effects that move, change colors, and create stunning visual displays.</p>
              <ul>
                <li><CheckCircle size={16} /> Automated movement patterns</li>
                <li><CheckCircle size={16} /> Gobo projection capabilities</li>
                <li><CheckCircle size={16} /> Sound-activated modes</li>
                <li><CheckCircle size={16} /> Professional DMX control</li>
              </ul>
            </div>

            <div className="lighting-card">
              <h3>Dance Floor Lighting</h3>
              <p>Energize your dance floor with exciting lighting effects that sync with the music.</p>
              <ul>
                <li><CheckCircle size={16} /> Laser light shows</li>
                <li><CheckCircle size={16} /> Strobe and effect lighting</li>
                <li><CheckCircle size={16} /> Music synchronization</li>
                <li><CheckCircle size={16} /> Fog and haze machines</li>
              </ul>
            </div>

            <div className="lighting-card">
              <h3>Architectural Lighting</h3>
              <p>Highlight your venue's best features with strategic architectural lighting placement.</p>
              <ul>
                <li><CheckCircle size={16} /> Building facade lighting</li>
                <li><CheckCircle size={16} /> Landscape illumination</li>
                <li><CheckCircle size={16} /> Feature highlighting</li>
                <li><CheckCircle size={16} /> Custom color schemes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="lighting-design">
          <h2>Custom Lighting Design</h2>
          <div className="design-process">
            <div className="design-step">
              <h4>Site Survey</h4>
              <p>We visit your venue to assess the space and understand your vision.</p>
            </div>
            <div className="design-step">
              <h4>Design Proposal</h4>
              <p>Our team creates a detailed lighting plan with 3D visualizations.</p>
            </div>
            <div className="design-step">
              <h4>Installation</h4>
              <p>Professional setup and programming by our certified technicians.</p>
            </div>
            <div className="design-step">
              <h4>Operation</h4>
              <p>On-site lighting operator to ensure perfect execution throughout your event.</p>
            </div>
          </div>
        </section>

        <section className="lighting-benefits">
          <h2>Why Professional Lighting Matters</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h4>Atmosphere Creation</h4>
              <p>Set the perfect mood for any moment of your event.</p>
            </div>
            <div className="benefit">
              <h4>Photography Enhancement</h4>
              <p>Ensure your photos and videos look stunning with proper lighting.</p>
            </div>
            <div className="benefit">
              <h4>Venue Transformation</h4>
              <p>Turn any space into a magical environment.</p>
            </div>
            <div className="benefit">
              <h4>Guest Experience</h4>
              <p>Create memorable moments that your guests will never forget.</p>
            </div>
          </div>
        </section>

        <section className="lighting-cta">
          <h2>Illuminate Your Event</h2>
          <p>Let our lighting experts create the perfect ambiance for your special occasion.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Lighting Quote <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Lighting
