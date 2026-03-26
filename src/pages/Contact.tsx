import { MapPin, Phone, Mail, Clock, Send, Facebook } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in-up">
      <div className="page-header bg-contact">
        <div className="container">
          <h1 className="page-title">Get in <span className="text-red">Touch</span></h1>
          <p className="page-subtitle">Whether you're looking for a new car, need service, or have a question, our team is ready to help you.</p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-grid">
          {/* Contact Information Form */}
          <div className="contact-info-section">
            <h2 className="section-heading mb-4">Contact Information</h2>
            <p className="contact-intro">Visit our 7S Authorized Dealership or reach out to us via phone or email. We are always here for you!</p>
            
            <div className="info-cards">
              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <MapPin className="info-icon" size={24} />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>10KM Main Multan Road, Near Hanjarwal Station Lahore, Pakistan</p>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <Phone className="info-icon" size={24} />
                </div>
                <div className="info-content">
                  <h4>Phone Numbers</h4>
                  <p>+92 42 35421544</p>
                  <p>0321-3084000, 0300-4170375</p>
                  <p>0300-8101079, 0333-4764744</p>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <Mail className="info-icon" size={24} />
                </div>
                <div className="info-content">
                  <h4>Email Address</h4>
                  <p>suzuki3sadilzafarmotors@yahoo.com</p>
                </div>
              </div>

              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <Clock className="info-icon" size={24} />
                </div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon-wrapper">
                  <Facebook className="info-icon" size={24} />
                </div>
                <div className="info-content">
                  <h4>Follow Us</h4>
                  <a 
                    href="https://www.facebook.com/adilzafarmotorssuzuki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-text"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section glass-card">
            <h2 className="form-heading">Send us a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" placeholder="+92 300 1234567" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" className="form-control">
                  <option value="sales">Vehicle Purchase/Inquiry</option>
                  <option value="service">Book a Service</option>
                  <option value="parts">Spare Parts Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} className="form-control" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
