import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo-original.png" alt="Adil Zafar Motors Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              Your Journey, Our Drive! Since 2001, we have been rewriting the standards of automobile dealerships as a full-fledged 7S Authorized Dealership.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/adilzafarmotorssuzuki/" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-header">Quick Links</h4>
            <ul>
              <li><Link to="/products">Explore Vehicles</Link></li>
              <li><Link to="/services">Book a Service</Link></li>
              <li><Link to="/reviews">Customer Reviews</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-header">Contact Info</h4>
            <ul>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>10KM Main Multan Road, Near Hanjarwal Station Lahore, Pakistan</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+92 42 35421544, 0321-3084000</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>suzuki3sadilzafarmotors@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Suzuki Adil Zafar Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
