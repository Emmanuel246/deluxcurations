import { Link } from 'react-router-dom'
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react'

const EventRentals = () => {
  return (
    <div className="event-rentals-page">
      <div className="container">
        <section className="page-header">
          <Calendar size={64} />
          <h1>Event Rentals</h1>
          <p>Premium furniture, decor, and equipment for unforgettable events</p>
        </section>

        <section className="rental-categories">
          <div className="category-grid">
            <div className="category-card">
              <h3>Furniture & Seating</h3>
              <ul>
                <li><CheckCircle size={16} /> Elegant chairs and tables</li>
                <li><CheckCircle size={16} /> Lounge furniture</li>
                <li><CheckCircle size={16} /> Bar stools and cocktail tables</li>
                <li><CheckCircle size={16} /> Specialty seating options</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Linens & Decor</h3>
              <ul>
                <li><CheckCircle size={16} /> Premium table linens</li>
                <li><CheckCircle size={16} /> Chair covers and sashes</li>
                <li><CheckCircle size={16} /> Centerpieces and florals</li>
                <li><CheckCircle size={16} /> Decorative lighting</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Tents & Structures</h3>
              <ul>
                <li><CheckCircle size={16} /> Wedding tents</li>
                <li><CheckCircle size={16} /> Party canopies</li>
                <li><CheckCircle size={16} /> Market umbrellas</li>
                <li><CheckCircle size={16} /> Sidewalls and flooring</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Audio/Visual</h3>
              <ul>
                <li><CheckCircle size={16} /> Sound systems</li>
                <li><CheckCircle size={16} /> Microphones</li>
                <li><CheckCircle size={16} /> Projectors and screens</li>
                <li><CheckCircle size={16} /> DJ equipment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="event-types">
          <h2>Perfect for Any Event</h2>
          <div className="event-types-grid">
            <div className="event-type">
              <h4>Weddings</h4>
              <p>Create the perfect romantic atmosphere with our elegant rental collection.</p>
            </div>
            <div className="event-type">
              <h4>Corporate Events</h4>
              <p>Professional setups that reflect your company's brand and values.</p>
            </div>
            <div className="event-type">
              <h4>Private Parties</h4>
              <p>Celebrate in style with our versatile rental options for any occasion.</p>
            </div>
            <div className="event-type">
              <h4>Special Occasions</h4>
              <p>From birthdays to anniversaries, we have everything you need.</p>
            </div>
          </div>
        </section>

        <section className="rental-cta">
          <h2>Ready to Plan Your Event?</h2>
          <p>Contact us for a personalized rental package quote.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get Rental Quote <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  )
}

export default EventRentals
