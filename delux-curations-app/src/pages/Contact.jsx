import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll get back to you soon.')
  }

  return (
    <div className="contact-page">
      <div className="container">
        <section className="page-header">
          <h1>Contact Us</h1>
          <p>Ready to create something amazing? Let's discuss your vision.</p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We'd love to hear about your upcoming event and how we can help make it extraordinary.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>info@deluxcurations.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin size={24} />
                <div>
                  <h4>Address</h4>
                  <p>123 Event Street<br />City, State 12345</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Clock size={24} />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                     Saturday: 10:00 AM - 4:00 PM<br />
                     Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Request a Quote</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventType">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your event *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your event, services needed, guest count, venue, and any special requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
