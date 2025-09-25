import { Link } from 'react-router-dom'
import { Users, CheckCircle, ArrowRight, Camera, Share2, Sparkles } from 'lucide-react'

const SpinBooth = () => {
  return (
    <div className="spin-booth-page">
      <div className="container">
        <section className="page-header">
          <Users size={64} />
          <h1>360° Spin Video Booth</h1>
          <p>Capture unforgettable moments with cutting-edge 360° video technology</p>
        </section>

        <section className="booth-features">
          <div className="feature-highlight">
            <div className="feature-content">
              <h2>The Ultimate Event Experience</h2>
              <p>Our 360° spin video booth creates stunning slow-motion videos that capture every angle of your guests' excitement. Perfect for weddings, parties, corporate events, and special celebrations.</p>
            </div>
            <div className="feature-visual">
              <div className="booth-placeholder">
                <Camera size={80} />
                <p>360° Video Magic</p>
              </div>
            </div>
          </div>
        </section>

        <section className="booth-specs">
          <h2>What's Included</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <Camera size={32} />
              <h3>Professional Equipment</h3>
              <ul>
                <li><CheckCircle size={16} /> High-resolution 360° camera system</li>
                <li><CheckCircle size={16} /> Professional lighting setup</li>
                <li><CheckCircle size={16} /> Sturdy rotating platform</li>
                <li><CheckCircle size={16} /> Backdrop and props</li>
              </ul>
            </div>

            <div className="spec-card">
              <Share2 size={32} />
              <h3>Instant Sharing</h3>
              <ul>
                <li><CheckCircle size={16} /> Immediate video processing</li>
                <li><CheckCircle size={16} /> QR code for instant download</li>
                <li><CheckCircle size={16} /> Social media integration</li>
                <li><CheckCircle size={16} /> Email delivery option</li>
              </ul>
            </div>

            <div className="spec-card">
              <Sparkles size={32} />
              <h3>Customization</h3>
              <ul>
                <li><CheckCircle size={16} /> Custom branding overlay</li>
                <li><CheckCircle size={16} /> Personalized music selection</li>
                <li><CheckCircle size={16} /> Event-themed props</li>
                <li><CheckCircle size={16} /> Custom backdrop options</li>
              </ul>
            </div>

            <div className="spec-card">
              <Users size={32} />
              <h3>Professional Service</h3>
              <ul>
                <li><CheckCircle size={16} /> Dedicated booth attendant</li>
                <li><CheckCircle size={16} /> Setup and breakdown included</li>
                <li><CheckCircle size={16} /> Technical support throughout event</li>
                <li><CheckCircle size={16} /> Guest instruction and assistance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="booth-process">
          <h2>How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">1</div>
              <h4>Step On</h4>
              <p>Guests step onto the platform and strike their pose</p>
            </div>
            <div className="process-step">
              <div className="step-icon">2</div>
              <h4>Spin & Capture</h4>
              <p>The camera rotates 360° capturing stunning slow-motion video</p>
            </div>
            <div className="process-step">
              <div className="step-icon">3</div>
              <h4>Instant Processing</h4>
              <p>Video is processed and enhanced with music and effects</p>
            </div>
            <div className="process-step">
              <div className="step-icon">4</div>
              <h4>Share & Enjoy</h4>
              <p>Guests receive their video instantly via QR code or email</p>
            </div>
          </div>
        </section>

        <section className="booth-events">
          <h2>Perfect For</h2>
          <div className="events-grid">
            <div className="event-card">
              <h4>Weddings</h4>
              <p>Create magical memories for the bride, groom, and all their guests.</p>
            </div>
            <div className="event-card">
              <h4>Corporate Events</h4>
              <p>Add excitement to product launches, conferences, and company parties.</p>
            </div>
            <div className="event-card">
              <h4>Birthday Parties</h4>
              <p>Make milestone birthdays unforgettable with 360° video memories.</p>
            </div>
            <div className="event-card">
              <h4>Special Celebrations</h4>
              <p>Perfect for graduations, anniversaries, and holiday parties.</p>
            </div>
          </div>
        </section>

        <section className="booth-cta">
          <h2>Ready to Spin?</h2>
          <p>Book our 360° spin video booth and give your guests an experience they'll never forget.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Book Spin Booth <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default SpinBooth
