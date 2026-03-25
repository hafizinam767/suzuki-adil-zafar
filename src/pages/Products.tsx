import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 'swift',
    name: 'Suzuki Swift',
    price: 'Starting From PKR 4,460,160',
    description: 'Dynamic performance wrapped in a sporty design. Experience the thrill of driving with advanced features and exceptional fuel efficiency.',
    image: '/cars/swift.png',
    tags: ['Hatchback', '1200cc', 'Automatic/Manual']
  },
  {
    id: 'cultus',
    name: 'Suzuki Cultus',
    price: 'Starting From PKR 4,089,490',
    description: 'The perfect family car with a spacious interior and smooth ride. Modern style meets practical functionality.',
    image: '/cars/cultus.png',
    tags: ['Hatchback', '1000cc', 'Automatic/Manual']
  },
  {
    id: 'alto',
    name: 'Suzuki Alto',
    price: 'Starting From PKR 2,994,861',
    description: 'The most fuel-efficient choice for city commuting. Compact outside, surprisingly spacious inside.',
    image: '/cars/alto.jpg',
    tags: ['Hatchback', '660cc', 'Automatic/Manual']
  },
  {
    id: 'every',
    name: 'Suzuki Every',
    price: 'Contact for Price',
    description: 'Versatile and roomy, perfect for both family trips and business deliveries. Reliable utility in every journey.',
    image: '/cars/every.png',
    tags: ['Minivan', '660cc', 'Automatic']
  },
  {
    id: 'fronx',
    name: 'Suzuki Fronx',
    price: 'Contact for Price',
    description: 'Combining sportiness with SUV styling, Fronx brings a new level of presence to the road.',
    image: '/cars/fronx.jpg',
    tags: ['Compact SUV', '1500cc', 'Automatic']
  }
];

export default function Products() {
  return (
    <div className="products-page animate-fade-in-up">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Explore Our <span className="text-red">Vehicles</span></h1>
          <p className="page-subtitle">Discover the perfect Suzuki for your journey. From fuel-efficient city cars to spacious family vehicles, we have it all.</p>
        </div>
      </div>
      
      <div className="container products-container">
        <div className="products-grid">
          {products.map((car) => (
            <div key={car.id} className="product-card glass-card">
              <div className="product-image-container">
                <div className="product-tags">
                  {car.tags.map(tag => (
                    <span key={tag} className="product-tag">{tag}</span>
                  ))}
                </div>
                <img src={car.image} alt={car.name} className="product-image" />
              </div>
              <div className="product-info">
                <h2>{car.name}</h2>
                <div className="product-price">{car.price}</div>
                <p className="product-desc">{car.description}</p>
                <div className="product-actions">
                  <Link to={`/contact?inquire=${car.id}`} className="btn btn-primary product-btn">
                    Inquire Now <ArrowRight size={18} />
                  </Link>
                  <button className="btn btn-outline product-btn-icon" aria-label="More Info">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
