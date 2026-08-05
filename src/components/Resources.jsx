import { FileText, Building2, Stethoscope, Bed } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <Icon size={40} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Resources = () => {
  return (
    <section className="resources section" id="resources">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Resources</h2>
        </div>

        <div className="grid-container">
          <ResourceCard 
            icon={FileText} 
            title="Leave Application Form" 
            description="Download the official format for medical and personal leaves." 
          />
          <ResourceCard 
            icon={Building2} 
            title="ERP Portal" 
            description="Direct link to the IIT KGP academic and fee management portal." 
          />
          <ResourceCard 
            icon={Stethoscope} 
            title="Counseling Centre" 
            description="Book a confidential session with professional campus counselors." 
          />
          <ResourceCard 
            icon={Bed} 
            title="Hostel Management" 
            description="Rules, regulations, and Hall Management Centre details." 
          />
        </div>
      </div>
    </section>
  );
};

export default Resources;
