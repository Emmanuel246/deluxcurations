import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Calendar, Zap, Sparkles, Award, Clock } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Luxury Event Experiences with <span className="highlight">Delux Curations</span>
              </h1>
              <p className="hero-subtitle">
                Transform your special moments with premium marquee rentals, professional lighting,
                and cutting-edge 360° videobooth technology. Creating unforgettable memories for
                weddings, corporate events, and celebrations.
              </p>
              <div className="hero-buttons">
                <Link to="/book-marquee" className="btn btn-primary btn-large">
                  Book Marquee <ArrowRight size={20} />
                </Link>
                <Link to="/book-videobooth" className="btn btn-secondary btn-large">
                  Book 360° Videobooth
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">500+</span>
                  <span className="hero-stat-label">Events</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">50+</span>
                  <span className="hero-stat-label">Venues</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">5★</span>
                  <span className="hero-stat-label">Rating</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-container">
                <div className="hero-placeholder">
                  <Sparkles size={80} />
                  <p>Premium Event Experience</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="hero-floating-card hero-floating-card-1">
                <div className="floating-card-content">
                  <div className="floating-card-icon">
                    <Award size={20} />
                  </div>
                  <div>
                    <div style={{fontSize: '0.75rem', color: 'var(--neutral-500)'}}>Premium Quality</div>
                    <div>5-Star Service</div>
                  </div>
                </div>
              </div>

              <div className="hero-floating-card hero-floating-card-2">
                <div className="floating-card-content">
                  <div className="floating-card-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{fontSize: '0.75rem', color: 'var(--neutral-500)'}}>Quick Setup</div>
                    <div>Same Day Service</div>
                  </div>
                </div>
              </div>

              <div className="hero-floating-card hero-floating-card-3">
                <div className="floating-card-content">
                  <div className="floating-card-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div style={{fontSize: '0.75rem', color: 'var(--neutral-500)'}}>Latest Tech</div>
                    <div>360° Video Booth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Discover our comprehensive range of premium event services designed to create unforgettable experiences
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-content">
                <div className="service-icon">
                  <Calendar size={40} />
                </div>
                <h3>Event Rentals</h3>
                <p>Complete event rental solutions including premium furniture, elegant decor, and professional equipment for any occasion.</p>
                <Link to="/event-rentals" className="btn btn-outline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-content">
                <div className="service-icon">
                  <Zap size={40} />
                </div>
                <h3>Professional Lighting</h3>
                <p>Transform your venue with our state-of-the-art lighting systems, intelligent controls, and expert design services.</p>
                <Link to="/lighting" className="btn btn-outline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-content">
                <div className="service-icon">
                  <Users size={40} />
                </div>
                <h3>360° Spin Booth</h3>
                <p>Capture unforgettable moments with our cutting-edge 360° spin video booth technology and instant sharing capabilities.</p>
                <Link to="/spin-booth" className="btn btn-outline">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Delux Curations?</h2>
          <p className="section-subtitle">
            Experience the difference with our commitment to excellence, innovation, and unparalleled service quality
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-content">
                <Star size={32} />
                <h4>Premium Quality</h4>
                <p>Only the finest equipment and materials sourced from industry-leading suppliers for your special events.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <Users size={32} />
                <h4>Expert Team</h4>
                <p>Professional staff with years of experience in event production, design, and technical execution.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <Zap size={32} />
                <h4>Cutting-Edge Tech</h4>
                <p>Latest technology including 360° video booths, intelligent lighting systems, and wireless solutions.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-content">
                <Calendar size={32} />
                <h4>Full Service</h4>
                <p>From initial planning to final execution, we handle every detail to ensure your event is flawless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Amazing?</h2>
            <p>Let's discuss your vision and bring it to life with our premium services and expert team.</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
