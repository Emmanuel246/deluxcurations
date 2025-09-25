import { Link } from 'react-router-dom'
import { Calendar, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>Our Premium Services</h1>
            <p>Comprehensive event solutions designed to exceed your expectations and create unforgettable experiences</p>
          </div>
        </div>
      </section>

      <div className="container">

        {/* Services Grid */}
        <section className="services-detailed">
          <div className="service-detail-card">
            <div className="service-detail-header">
              <Calendar size={48} />
              <h2>Event Rentals</h2>
            </div>
            <p>Complete rental solutions for weddings, corporate events, parties, and special occasions.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> Premium furniture and seating</li>
              <li><CheckCircle size={16} /> Elegant table settings and linens</li>
              <li><CheckCircle size={16} /> Decorative elements and centerpieces</li>
              <li><CheckCircle size={16} /> Audio/visual equipment</li>
              <li><CheckCircle size={16} /> Tent and canopy rentals</li>
            </ul>
            <Link to="/event-rentals" className="btn btn-primary">
              View Details <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-header">
              <Zap size={48} />
              <h2>Professional Lighting</h2>
            </div>
            <p>Transform your venue with our state-of-the-art lighting systems and expert design services.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> LED uplighting and mood lighting</li>
              <li><CheckCircle size={16} /> Intelligent moving lights</li>
              <li><CheckCircle size={16} /> Custom lighting design</li>
              <li><CheckCircle size={16} /> Dance floor lighting</li>
              <li><CheckCircle size={16} /> Architectural lighting</li>
            </ul>
            <Link to="/lighting" className="btn btn-primary">
              View Details <ArrowRight size={16} />
            </Link>
          </div>

          <div className="service-detail-card">
            <div className="service-detail-header">
              <Users size={48} />
              <h2>360° Spin Video Booth</h2>
            </div>
            <p>Capture unforgettable moments with our cutting-edge 360° spin video booth technology.</p>
            <ul className="service-features">
              <li><CheckCircle size={16} /> High-quality 360° video capture</li>
              <li><CheckCircle size={16} /> Instant social media sharing</li>
              <li><CheckCircle size={16} /> Custom branding options</li>
              <li><CheckCircle size={16} /> Professional attendant included</li>
              <li><CheckCircle size={16} /> Props and accessories provided</li>
            </ul>
            <Link to="/spin-booth" className="btn btn-primary">
              View Details <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We discuss your vision, requirements, and budget to create the perfect plan.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Our team designs a comprehensive solution tailored to your specific needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Setup</h3>
              <p>Professional installation and setup on the day of your event.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Support</h3>
              <p>On-site support throughout your event to ensure everything runs smoothly.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="services-cta">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a personalized quote and consultation.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Your Quote <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Services
