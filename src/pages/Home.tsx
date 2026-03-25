import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const HERO_BANNERS = [
  { id: 1, url: '/hero-swift.jpg', title: 'The All-New Swift', subtitle: 'Temptation Comes Alive!' },
  { id: 2, url: '/hero-banner1.png', title: 'Power & Excellence', subtitle: 'Experience the drive of a lifetime.' },
  { id: 3, url: '/hero-banner2.png', title: 'Innovation Redefined', subtitle: 'Leading the way in automotive excellence.' },
  { id: 4, url: '/hero-banner3.jpg', title: 'Adventure Awaits', subtitle: 'Explore the world with Suzuki.' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-carousel">
          {HERO_BANNERS.map((banner, index) => (
            <div 
              key={banner.id} 
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${banner.url})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}
          
          <div className="carousel-dots">
            {HERO_BANNERS.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Summary */}
      <section className="featured-section container">
        <div className="section-header">
          <h2>Featured Vehicles</h2>
          <Link to="/products" className="view-all-link">View All <ChevronRight size={18} /></Link>
        </div>
        <div className="grid grid-cols-3">
          {[
            { name: 'Suzuki Swift', price: 'PKR 4,460,160', image: '/cars/swift.png' },
            { name: 'Suzuki Cultus', price: 'PKR 4,089,490', image: '/cars/cultus.png' },
            { name: 'Suzuki Alto', price: 'PKR 2,994,861', image: '/cars/alto.jpg' }
          ].map((car) => (
            <div key={car.name} className="car-card glass-card">
              <div className="car-image-wrapper">
                <img src={car.image} alt={car.name} className="car-card-image" />
              </div>
              <div className="car-card-content">
                <h3>{car.name}</h3>
                <p className="car-price">Starting From {car.price}</p>
                <Link to="/contact" className="btn btn-outline mt-4">Inquire Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-text">
            <h2>About <span className="text-red">Adil Zafar Motors</span></h2>
            <p>
              Suzuki Adil Zafar Motors is not just a dealership — it’s a name of power, trust, and excellence. Since 2001, we have been rewriting the standards of automobile dealerships. What started as a 3S authorized Pak Suzuki dealership has now grown into a full-fledged 7S Authorized Dealership.
            </p>
            <div className="stats-grid">
              <div className="stat-box">
                <h4>20+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-box">
                <h4>7S</h4>
                <p>Dealership Status</p>
              </div>
              <div className="stat-box">
                <h4>10k+</h4>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper glass-card">
            <img src="/suzuki.webp" alt="Suzuki Adil Zafar Showroom" className="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
