import { Car, RefreshCcw, Landmark, PenTool, Settings, Wrench, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: Car,
    title: 'Vehicle Sales',
    description: 'We offer a complete range of new and certified used Suzuki vehicles to fit every lifestyle and budget.'
  },
  {
    icon: RefreshCcw,
    title: 'Used Cars Sales',
    description: 'Easily exchange your old car with a brand new Suzuki. We offer competitive valuations and a seamless process.'
  },
  {
    icon: Landmark,
    title: 'Financing Assistance',
    description: 'Get help with easy financing and loans. We partner with major banks to provide flexible payment plans.'
  },
  {
    icon: PenTool,
    title: 'Maintenance & Repairs',
    description: 'Expert servicing and repairs by certified Suzuki technicians to keep your vehicle running like new.'
  },
  {
    icon: Settings,
    title: 'Genuine Spare Parts',
    description: '100% original Suzuki spare parts available with warranty and perfect fitment guarantee.'
  },
  {
    icon: Wrench,
    title: 'Professional Equipment',
    description: 'Our workshop is equipped with state-of-the-art diagnostic and repair tools for precise maintenance.'
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated After-Sales',
    description: 'We treat our customers like family. Enjoy priority support and long-term care for valued customers.'
  }
];

export default function Services() {
  return (
    <div className="services-page animate-fade-in-up">
      <div className="page-header bg-services">
        <div className="container">
          <h1 className="page-title">Our <span className="text-red">Services</span></h1>
          <p className="page-subtitle">Experience the difference of a full-fledged 7S Authorized Dealership. We are committed to providing exceptional service.</p>
        </div>
      </div>

      <div className="container services-content">
        <div className="services-intro text-center">
          <h2 className="section-heading">Comprehensive 7S <span className="text-red">Care</span></h2>
          <p className="section-desc">At Suzuki Adil Zafar Motors, we guide you through every step of your automotive journey. Whether purchasing a new vehicle or maintaining your current one, our expert team is here to assist.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon-wrapper">
                  <Icon size={32} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="service-cta glass-card">
          <div className="cta-content">
            <h2>Ready to experience premium service?</h2>
            <p>Book your appointment today and let our certified technicians take care of your Suzuki.</p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">Book an Appointment</Link>
        </div>
      </div>
    </div>
  );
}
