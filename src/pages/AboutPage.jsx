import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn about our mission, vision, and the core values that drive the Student Welfare Board.</p>
        </div>
      </div>
      <About />
      
      <section className="section alt-bg">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students Team" 
                className="hero-img" 
              />
            </div>
            <div className="hero-text">
              <h2 className="section-title" style={{textAlign: 'left', marginBottom: '20px'}}>Our Team</h2>
              <p className="hero-description" style={{color: 'var(--text-muted)'}}>
                The Student Welfare Board is composed of dedicated faculty and enthusiastic student representatives working together. Our team represents the diverse voices of the IIT Kharagpur campus, ensuring that policies are inclusive, supportive, and effectively address the needs of every student.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
