import { Target, Eye, HeartHandshake } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon size={40} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Who We Are</h2>
        </div>
        
        <div className="grid-container">
          <AboutCard 
            icon={Target} 
            title="Our Mission" 
            description="To ensure the holistic development of students by providing academic support, personal counseling, and opportunities for extracurricular excellence."
          />
          <AboutCard 
            icon={Eye} 
            title="Our Vision" 
            description="Creating a vibrant student community where every individual is empowered to achieve their maximum potential in a safe, inclusive campus."
          />
          <AboutCard 
            icon={HeartHandshake} 
            title="Our Values" 
            description="Empathy, Excellence, Inclusivity, and Integrity form the cornerstone of all policies and initiatives driven by the Student Welfare Board."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
