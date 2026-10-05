import React from 'react';
import { ShieldAlert, Phone, Flame, HeartPulse, Building2, UserCircle } from 'lucide-react';

const EmergencyContactsPage = () => {
  const contacts = [
    {
      title: "Security Control Room",
      numbers: ["03222282751", "03222281002", "03222281001"],
      icon: <ShieldAlert size={32} color="var(--accent)" />
    },
    {
      title: "Quick Response Room",
      numbers: ["03222281002", "03222281003"],
      icon: <Phone size={32} color="var(--accent)" />
    },
    {
      title: "Fire Emergency",
      numbers: ["03222255709"],
      icon: <Flame size={32} color="var(--accent)" />
    },
    {
      title: "Medical Emergency",
      subtitle: "(B.C. Roy Help Desk)",
      numbers: ["03222281008"],
      icon: <HeartPulse size={32} color="var(--accent)" />
    },
    {
      title: "Local Police",
      subtitle: "(Hijli Town Outpost)",
      numbers: ["03222288060"],
      icon: <Building2 size={32} color="var(--accent)" />
    },
    {
      title: "24x7 Women Helpline",
      numbers: ["03222281010"],
      icon: <UserCircle size={32} color="var(--accent)" />
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1 className="page-title">
          Emergency Contacts
        </h1>
        <p className="page-subtitle">
          Immediate assistance is available 24/7. Save these numbers for quick access in times of need.
        </p>
      </div>
      
      <div className="section container emergency-section">
        <div className="emergency-contacts-list">
          
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="card emergency-contact-card"
            >
              <div className="emergency-contact-details">
                <div className="emergency-contact-icon">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="emergency-contact-title">
                    {contact.title}
                  </h3>
                  {contact.subtitle && (
                    <p className="emergency-contact-subtitle">
                      {contact.subtitle}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="emergency-contact-numbers">
                {contact.numbers.map((num, i) => (
                  <a 
                    key={i}
                    href={`tel:${num}`} 
                    className="btn btn-secondary emergency-phone-link"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;
