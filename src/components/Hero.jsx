import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to the Student Welfare Board</h1>
          <p className="hero-description">
            The Student Welfare Board (SWB) at IIT Kharagpur is dedicated to ensuring the holistic development, well-being, and academic success of the student community. Explore our initiatives, mentorship programs, and resources below.
          </p>
          <div className="hero-buttons">
            <Link to="/initiatives" className="btn btn-primary">
              View Initiatives <ArrowRight size={18} />
            </Link>
            <Link to="/resources" className="btn btn-secondary">
              Student Resources
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="University Campus" 
            className="hero-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
