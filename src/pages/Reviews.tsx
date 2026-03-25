import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sabir Malik',
    text: "Excellent experience at Adil Zafar Motor! Their team is knowledgeable, friendly, and helped me find the perfect Suzuki model. The showroom is well-maintained, and the after-sales support is top-notch. Highly recommend visiting them for all your Suzuki needs!",
    rating: 5,
    date: '2 months ago'
  },
  {
    name: 'Rana Hannan Ghaffar',
    text: "One of my Suzuki gets its regular maintenance from here and they make sure to resolve every issue identified and mentioned. Moreover, if a part needs replacement, they only have original parts which are a bit expensive but run for a longer period. Recommended for regular maintenance.!",
    rating: 5,
    date: '3 months ago'
  },
  {
    name: 'Ahmed Khan',
    text: "I have 3 years service experience at Suzuki Adil Zafar Motors. Great Experience!",
    rating: 4,
    date: '5 months ago'
  },
  {
    name: 'Shehzad Anjum',
    text: "Great service and excellent vehicle quality. Highly recommended!",
    rating: 5,
    date: '1 year ago'
  },
  {
    name: 'Sara Malik',
    text: "Staff were very helpful and the financing process was smooth.",
    rating: 5,
    date: '1 year ago'
  },
  {
    name: 'Imran Ali',
    text: "I love my Suzuki Carry for business — reliable and affordable.",
    rating: 4,
    date: '1.5 years ago'
  }
];

export default function Reviews() {
  return (
    <div className="reviews-page animate-fade-in-up">
      <div className="page-header bg-reviews">
        <div className="container">
          <h1 className="page-title">Customer <span className="text-red">Reviews</span></h1>
          <p className="page-subtitle">Don't just take our word for it. See what our valued customers have to say about their experience with Suzuki Adil Zafar Motors.</p>
        </div>
      </div>

      <div className="container reviews-content">
        <div className="reviews-stats glass-card">
          <div className="stat-item">
            <h3>4.8</h3>
            <div className="stars">
              <Star fill="currentColor" color="#FFB800" size={24} />
              <Star fill="currentColor" color="#FFB800" size={24} />
              <Star fill="currentColor" color="#FFB800" size={24} />
              <Star fill="currentColor" color="#FFB800" size={24} />
              <Star fill="currentColor" color="#FFB800" size={24} />
            </div>
            <p>Average Rating</p>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Customers Reviewed</p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card glass-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <Quote className="quote-icon" size={40} />
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill={i < review.rating ? "#FFB800" : "none"} 
                    color={i < review.rating ? "#FFB800" : "#cbd5e1"} 
                    size={16} 
                  />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="author-avatar">{review.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
