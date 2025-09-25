import { useState } from 'react'
import { Tent, Calendar, MapPin, Phone, Mail, Clock, DollarSign } from 'lucide-react'

const BookMarquee = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    event: '',
    eventDate: '',
    budget: '',
    phoneNumber: '',
    clientIntakeCall: '',
    bestTimeToCall: '',
    numberOfMarquees: '1',
    venueAddress: '',
    isResidence: '',
    deliveryMode: '',
    parkingFees: '',
    entryRestrictions: '',
    dropOffTime: '',
    pickUpTime: '',
    setupLocation: '',
    powerOutlets: '',
    hearAboutUs: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Marquee booking form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your marquee booking inquiry! We will contact you soon.')
  }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="booking-page">
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <Tent size={64} />
            <h1>Marquee Rental Inquiry Form</h1>
            <p>Book our premium marquees for your special event</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="booking-content">
          <div className="booking-info">
            <h2>Why Choose Our Marquees?</h2>
            <div className="info-grid">
              <div className="info-item">
                <Tent size={24} />
                <h4>Premium Quality</h4>
                <p>High-quality, weather-resistant marquees for any event</p>
              </div>
              <div className="info-item">
                <Calendar size={24} />
                <h4>Flexible Booking</h4>
                <p>Available for events of all sizes and durations</p>
              </div>
              <div className="info-item">
                <MapPin size={24} />
                <h4>Setup Service</h4>
                <p>Professional setup and takedown included</p>
              </div>
            </div>
            
            <div className="contact-help">
              <h3>Need Help?</h3>
              <p>Call us at <strong>+1-333-444-5555</strong> for immediate assistance</p>
            </div>
          </div>

          <div className="booking-form-section">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="event">Event *</label>
                  <input
                    type="text"
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    min={today}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">What is your budget? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="budget"
                      value="$75 - $600"
                      checked={formData.budget === '$75 - $600'}
                      onChange={handleInputChange}
                      required
                    />
                    $75 - $600
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="budget"
                      value="> $600"
                      checked={formData.budget === '> $600'}
                      onChange={handleInputChange}
                      required
                    />
                    &gt; $600
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Would you like to receive a client intake call? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="clientIntakeCall"
                      value="Yes"
                      checked={formData.clientIntakeCall === 'Yes'}
                      onChange={handleInputChange}
                      required
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="clientIntakeCall"
                      value="No"
                      checked={formData.clientIntakeCall === 'No'}
                      onChange={handleInputChange}
                      required
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.clientIntakeCall === 'Yes' && (
                <div className="form-group">
                  <label>When is the best time to call you?</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bestTimeToCall"
                        value="Morning"
                        checked={formData.bestTimeToCall === 'Morning'}
                        onChange={handleInputChange}
                      />
                      Morning
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bestTimeToCall"
                        value="Afternoon"
                        checked={formData.bestTimeToCall === 'Afternoon'}
                        onChange={handleInputChange}
                      />
                      Afternoon
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="bestTimeToCall"
                        value="Evening"
                        checked={formData.bestTimeToCall === 'Evening'}
                        onChange={handleInputChange}
                      />
                      Evening
                    </label>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="numberOfMarquees">Select Number of Marquees *</label>
                <select
                  id="numberOfMarquees"
                  name="numberOfMarquees"
                  value={formData.numberOfMarquees}
                  onChange={handleInputChange}
                  required
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="venueAddress">What is the venue name and address? *</label>
                <textarea
                  id="venueAddress"
                  name="venueAddress"
                  value={formData.venueAddress}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Is this a Residence? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="isResidence"
                      value="Yes"
                      checked={formData.isResidence === 'Yes'}
                      onChange={handleInputChange}
                      required
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="isResidence"
                      value="No"
                      checked={formData.isResidence === 'No'}
                      onChange={handleInputChange}
                      required
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Mode of delivery *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="deliveryMode"
                      value="Client Pick-up"
                      checked={formData.deliveryMode === 'Client Pick-up'}
                      onChange={handleInputChange}
                      required
                    />
                    Client Pick-up
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="deliveryMode"
                      value="Vendor Drop-off"
                      checked={formData.deliveryMode === 'Vendor Drop-off'}
                      onChange={handleInputChange}
                      required
                    />
                    Vendor Drop-off
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="parkingFees">Are there any parking fees or toll fees? Please explain</label>
                <textarea
                  id="parkingFees"
                  name="parkingFees"
                  value={formData.parkingFees}
                  onChange={handleInputChange}
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label htmlFor="entryRestrictions">Are there any stairs or entry restrictions at the venue?</label>
                <textarea
                  id="entryRestrictions"
                  name="entryRestrictions"
                  value={formData.entryRestrictions}
                  onChange={handleInputChange}
                  rows="2"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dropOffTime">What time can we drop off the Marquee?</label>
                  <input
                    type="time"
                    id="dropOffTime"
                    name="dropOffTime"
                    value={formData.dropOffTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pickUpTime">What time can we pick up the Marquee?</label>
                  <input
                    type="time"
                    id="pickUpTime"
                    name="pickUpTime"
                    value={formData.pickUpTime}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Where will the Marquee be set-up?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupLocation"
                      value="Inside event space"
                      checked={formData.setupLocation === 'Inside event space'}
                      onChange={handleInputChange}
                    />
                    Inside event space
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupLocation"
                      value="Lobby area"
                      checked={formData.setupLocation === 'Lobby area'}
                      onChange={handleInputChange}
                    />
                    Lobby area
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupLocation"
                      value="Other"
                      checked={formData.setupLocation === 'Other'}
                      onChange={handleInputChange}
                    />
                    Other
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupLocation"
                      value="Not Applicable"
                      checked={formData.setupLocation === 'Not Applicable'}
                      onChange={handleInputChange}
                    />
                    Not Applicable
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Are power outlets available by the designated location?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="powerOutlets"
                      value="Yes"
                      checked={formData.powerOutlets === 'Yes'}
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="powerOutlets"
                      value="No"
                      checked={formData.powerOutlets === 'No'}
                      onChange={handleInputChange}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>How did you hear about us?</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="Instagram"
                      checked={formData.hearAboutUs === 'Instagram'}
                      onChange={handleInputChange}
                    />
                    Instagram
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="Facebook"
                      checked={formData.hearAboutUs === 'Facebook'}
                      onChange={handleInputChange}
                    />
                    Facebook
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="Friends or Family"
                      checked={formData.hearAboutUs === 'Friends or Family'}
                      onChange={handleInputChange}
                    />
                    Friends or Family
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="Google"
                      checked={formData.hearAboutUs === 'Google'}
                      onChange={handleInputChange}
                    />
                    Google
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="Other"
                      checked={formData.hearAboutUs === 'Other'}
                      onChange={handleInputChange}
                    />
                    Other
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-primary btn-large">
                Submit Marquee Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookMarquee
