import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to the Students' Welfare Committee</h1>
          <p className="hero-description">
            The Students' Welfare Committee at IIT Kharagpur is dedicated to ensuring the holistic development, well-being, and academic success of the student community. Explore our initiatives, mentorship programs, and resources below.
          </p>
          <div className="hero-buttons">
            <Link to="/initiatives" className="btn btn-primary">
              View Initiatives <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src="/mainbuilding.png"
            alt="University Campus" 
            className="hero-img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
