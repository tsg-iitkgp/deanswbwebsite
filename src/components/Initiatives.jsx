import { CheckCircle2 } from 'lucide-react';

const InitiativeItem = ({ title, description, features, image }) => {
  return (
    <div className="initiative-item">
      <div className="initiative-image">
        <img src={image} alt={title} />
      </div>
      <div className="initiative-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="feature-list">
          {features.map((feature, idx) => (
            <li key={idx}>
              {feature}
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-secondary" style={{ marginTop: '10px' }}>
          Learn More
        </a>
      </div>
    </div>
  );
};

const Initiatives = () => {
  return (
    <section className="initiatives section alt-bg" id="initiatives">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Initiatives</h2>
        </div>

        <div className="initiatives-list">
          <InitiativeItem 
            title="Student Mentorship Program (SMP)"
            description="A flagship program ensuring a smooth transition for freshers. Senior students act as mentors, guiding juniors through academic challenges and campus life."
            features={['1-on-1 Guidance', 'Academic Support', 'Mental Health Awareness']}
            image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />

          <InitiativeItem 
            title="Financial Support & Loans"
            description="We ensure that no student's education is hindered by financial constraints. The DSW offers various scholarships, emergency loans, and fee waivers."
            features={['MCM Scholarships', 'Emergency Student Loans', 'Earn While You Learn Scheme']}
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
