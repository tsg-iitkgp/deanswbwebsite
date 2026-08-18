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
      
      <div className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="card"
              style={{ 
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 30px',
                background: '#fff',
                borderColor: 'var(--border-color)',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 300px' }}>
                <div style={{ background: 'var(--bg-mint)', padding: '16px', borderRadius: '16px', flexShrink: 0 }}>
                  {contact.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '4px', color: 'var(--text-header)' }}>
                    {contact.title}
                  </h3>
                  {contact.subtitle && (
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
                      {contact.subtitle}
                    </p>
                  )}
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', flex: '1 1 auto', justifyContent: 'flex-end' }}>
                {contact.numbers.map((num, i) => (
                  <a 
                    key={i}
                    href={`tel:${num}`} 
                    className="btn btn-secondary"
                    style={{ 
                      padding: '8px 16px', 
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .card > div:last-child {
            justify-content: flex-start !important;
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default EmergencyContactsPage;
