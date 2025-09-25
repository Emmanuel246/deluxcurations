import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Calendar, Zap, Sparkles, Award, Clock, Play, CheckCircle, Tent, Video, Camera, Heart, Trophy, Shield } from 'lucide-react'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-background-overlay"></div>
        <div className="container">
          <div className="hero-container-modern">
            <div className="hero-content-modern">
              <div className="hero-badge">
                <Star size={16} />
                <span>Premium Event Specialists Since 2020</span>
              </div>
              <h1 className="hero-title-modern">
                Create <span className="gradient-text">Unforgettable</span><br />
                Event Experiences
              </h1>
              <p className="hero-subtitle-modern">
                From luxury marquee rentals to cutting-edge 360° videobooth technology,
                we transform ordinary moments into extraordinary memories that last a lifetime.
              </p>
              <div className="hero-buttons-modern">
                <Link to="/book-marquee" className="btn-hero-primary">
                  <Tent size={20} />
                  <span>Book Marquee</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/book-videobooth" className="btn-hero-secondary">
                  <Play size={20} />
                  <span>360° Videobooth</span>
                </Link>
              </div>
              <div className="hero-features">
                <div className="hero-feature">
                  <CheckCircle size={16} />
                  <span>Professional Setup</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle size={16} />
                  <span>Premium Quality</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle size={16} />
                  <span>Full Service Support</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-modern">
              <div className="hero-cards-grid">
                <div className="hero-service-card hero-card-1">
                  <div className="hero-card-icon">
                    <Tent size={32} />
                  </div>
                  <h4>Luxury Marquees</h4>
                  <p>Premium weather-resistant marquees for any occasion</p>
                  <div className="card-glow"></div>
                </div>
                <div className="hero-service-card hero-card-2">
                  <div className="hero-card-icon">
                    <Video size={32} />
                  </div>
                  <h4>360° Videobooth</h4>
                  <p>Cutting-edge video technology for memorable moments</p>
                  <div className="card-glow"></div>
                </div>
                <div className="hero-service-card hero-card-3">
                  <div className="hero-card-icon">
                    <Zap size={32} />
                  </div>
                  <h4>Professional Lighting</h4>
                  <p>Transform your event atmosphere with expert lighting</p>
                  <div className="card-glow"></div>
                </div>
              </div>

              <div className="hero-stats-modern">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Successful Events</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Discover More</span>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="services-showcase">
        <div className="container">
          <div className="section-header-modern">
            <div className="section-badge">
              <Sparkles size={16} />
              <span>Our Services</span>
            </div>
            <h2>Premium Event Solutions</h2>
            <p>Comprehensive services designed to make your event extraordinary</p>
          </div>

          <div className="services-grid-modern">
            <div className="service-card-modern service-card-primary">
              <div className="service-card-header">
                <div className="service-icon-modern">
                  <Tent size={40} />
                </div>
                <div className="service-badge">Most Popular</div>
              </div>
              <h3>Luxury Marquee Rentals</h3>
              <p>Premium weather-resistant marquees perfect for weddings, corporate events, and outdoor celebrations. Professional setup and takedown included.</p>
              <ul className="service-features">
                <li><CheckCircle size={16} /> Weather-resistant materials</li>
                <li><CheckCircle size={16} /> Professional installation</li>
                <li><CheckCircle size={16} /> Multiple sizes available</li>
                <li><CheckCircle size={16} /> Same-day setup</li>
              </ul>
              <Link to="/book-marquee" className="service-cta-primary">
                Book Now <ArrowRight size={18} />
              </Link>
            </div>

            <div className="service-card-modern">
              <div className="service-card-header">
                <div className="service-icon-modern">
                  <Video size={40} />
                </div>
              </div>
              <h3>360° Videobooth Experience</h3>
              <p>Cutting-edge 360° video technology that captures unforgettable moments from every angle. Perfect for creating viral-worthy content.</p>
              <ul className="service-features">
                <li><CheckCircle size={16} /> 4K video quality</li>
                <li><CheckCircle size={16} /> Instant social sharing</li>
                <li><CheckCircle size={16} /> Custom branding options</li>
                <li><CheckCircle size={16} /> Professional operator</li>
              </ul>
              <Link to="/book-videobooth" className="service-cta">
                Book Now <ArrowRight size={18} />
              </Link>
            </div>

            <div className="service-card-modern">
              <div className="service-card-header">
                <div className="service-icon-modern">
                  <Zap size={40} />
                </div>
              </div>
              <h3>Professional Lighting</h3>
              <p>Transform your venue atmosphere with our expert lighting design and state-of-the-art equipment for any mood or theme.</p>
              <ul className="service-features">
                <li><CheckCircle size={16} /> Custom lighting design</li>
                <li><CheckCircle size={16} /> LED technology</li>
                <li><CheckCircle size={16} /> Wireless control</li>
                <li><CheckCircle size={16} /> Expert technicians</li>
              </ul>
              <Link to="/lighting" className="service-cta">
                Learn More <ArrowRight size={18} />
              </Link>
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
