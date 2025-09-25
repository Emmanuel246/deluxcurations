import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import EventRentals from './pages/EventRentals'
import Lighting from './pages/Lighting'
import SpinBooth from './pages/SpinBooth'
import Contact from './pages/Contact'
import BookMarquee from './pages/BookMarquee'
import BookVideobooth from './pages/BookVideobooth'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/event-rentals" element={<EventRentals />} />
            <Route path="/lighting" element={<Lighting />} />
            <Route path="/spin-booth" element={<SpinBooth />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-marquee" element={<BookMarquee />} />
            <Route path="/book-videobooth" element={<BookVideobooth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
