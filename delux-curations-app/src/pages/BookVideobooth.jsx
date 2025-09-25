import { useState } from 'react'
import { Video, Calendar, MapPin, Phone, Mail, Clock, DollarSign, Sparkles } from 'lucide-react'

const BookVideobooth = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    event: '',
    eventDate: '',
    budget: '',
    phoneNumber: '',
    clientIntakeCall: '',
    bestTimeToCall: '',
    venueAddress: '',
    isResidence: '',
    parkingFees: '',
    entryRestrictions: '',
    serviceStartTime: '',
    serviceEndTime: '',
    package: '',
    songChoice: '',
    addOns: [],
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

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target
    if (name === 'addOns') {
      setFormData(prev => ({
        ...prev,
        addOns: checked 
          ? [...prev.addOns, value]
          : prev.addOns.filter(item => item !== value)
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('360° Videobooth booking form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your 360° Videobooth booking inquiry! We will contact you soon.')
  }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="booking-page">
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <Video size={64} />
            <h1>360° VideoBooth Rental Inquiry Form</h1>
            <p>Book our cutting-edge 360° video booth for unforgettable memories</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="booking-content">
          <div className="booking-info">
            <h2>Why Choose Our 360° VideoBooth?</h2>
            <div className="info-grid">
              <div className="info-item">
                <Video size={24} />
                <h4>360° Technology</h4>
                <p>State-of-the-art 360° video capture technology</p>
              </div>
              <div className="info-item">
                <Sparkles size={24} />
                <h4>Premium Packages</h4>
                <p>Delight ($250/hr) and Deluxe VIP ($300/hr) packages available</p>
              </div>
              <div className="info-item">
                <MapPin size={24} />
                <h4>Full Service</h4>
                <p>Professional setup, operation, and takedown included</p>
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
                      value="$500 - $600"
                      checked={formData.budget === '$500 - $600'}
                      onChange={handleInputChange}
                      required
                    />
                    $500 - $600
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="budget"
                      value=">= $600"
                      checked={formData.budget === '>= $600'}
                      onChange={handleInputChange}
                      required
                    />
                    &gt;= $600
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

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceStartTime">Service Start Time *</label>
                  <input
                    type="time"
                    id="serviceStartTime"
                    name="serviceStartTime"
                    value={formData.serviceStartTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceEndTime">Service End Time *</label>
                  <input
                    type="time"
                    id="serviceEndTime"
                    name="serviceEndTime"
                    value={formData.serviceEndTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Which 360 Video Booth Package would you like? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="package"
                      value="Delight ($250/hr - Minimum of 2 hours)"
                      checked={formData.package === 'Delight ($250/hr - Minimum of 2 hours)'}
                      onChange={handleInputChange}
                      required
                    />
                    Delight ($250/hr - Minimum of 2 hours)
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="package"
                      value="Deluxe VIP ($300/hr - Minimum of 2 hours)"
                      checked={formData.package === 'Deluxe VIP ($300/hr - Minimum of 2 hours)'}
                      onChange={handleInputChange}
                      required
                    />
                    Deluxe VIP ($300/hr - Minimum of 2 hours)
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

              <div className="form-group">
                <label htmlFor="songChoice">What is your song of choice for the 360 Video?</label>
                <input
                  type="text"
                  id="songChoice"
                  name="songChoice"
                  value={formData.songChoice}
                  onChange={handleInputChange}
                  placeholder="Enter song title and artist"
                />
              </div>

              <div className="form-group">
                <label>Select add-ons (additional costs apply)</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="addOns"
                      value="LED Lights"
                      checked={formData.addOns.includes('LED Lights')}
                      onChange={handleCheckboxChange}
                    />
                    LED Lights
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="addOns"
                      value="Backdrops"
                      checked={formData.addOns.includes('Backdrops')}
                      onChange={handleCheckboxChange}
                    />
                    Backdrops
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="addOns"
                      value="Fun Props"
                      checked={formData.addOns.includes('Fun Props')}
                      onChange={handleCheckboxChange}
                    />
                    Fun Props
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="addOns"
                      value="Customized Overlay"
                      checked={formData.addOns.includes('Customized Overlay')}
                      onChange={handleCheckboxChange}
                    />
                    Customized Overlay
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="addOns"
                      value="Customized 360 Floor Decal"
                      checked={formData.addOns.includes('Customized 360 Floor Decal')}
                      onChange={handleCheckboxChange}
                    />
                    Customized 360 Floor Decal
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Where will the 360 be set-up?</label>
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
                Submit 360° VideoBooth Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookVideobooth
