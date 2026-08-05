import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Target, HeartHandshake, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Hero />
      
      {/* Quick Highlights Section */}
      <section className="section alt-bg">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore SWB</h2>
          </div>
          
          <div className="grid-container">
            <div className="card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Us" className="card-image" style={{margin: 0, marginBottom: '24px'}} />
              </div>
              <h3>About Us</h3>
              <p>Discover our mission, vision, and values that drive the student community forward at IIT Kharagpur.</p>
              <div style={{marginTop: '20px'}}>
                <Link to="/about" className="btn btn-secondary">Read More</Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Initiatives" className="card-image" style={{margin: 0, marginBottom: '24px'}} />
              </div>
              <h3>Our Initiatives</h3>
              <p>From Mentorship programs to Financial Aid, explore the programs designed to support you.</p>
              <div style={{marginTop: '20px'}}>
                <Link to="/initiatives" className="btn btn-secondary">Explore</Link>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Resources" className="card-image" style={{margin: 0, marginBottom: '24px'}} />
              </div>
              <h3>Student Resources</h3>
              <p>Quick access to essential forms, portals, counseling services, and hostel management.</p>
              <div style={{marginTop: '20px'}}>
                <Link to="/resources" className="btn btn-secondary">View Resources</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
