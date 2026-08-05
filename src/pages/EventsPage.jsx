import React from 'react';

const EventItem = ({ title, description, features, image }) => {
  return (
    <div className="initiative-item">
      <div className="initiative-image">
        <img 
          src={image} 
          alt={title} 
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80";
          }}
        />
      </div>
      <div className="initiative-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {features && features.length > 0 && (
          <ul className="feature-list">
            {features.map((feature, idx) => (
              <li key={idx}>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Wellbeing Day",
      description: "A dedicated event promoting physical, mental, and emotional wellness across the IIT Kharagpur campus through interactive workshops and relaxing sessions.",
      features: ['Interactive Workshops', 'Stress Relief Sessions', 'Expert Guest Lectures'],
      image: "/wellbeing-day.jpg"
    },
    {
      id: 2,
      title: "World Suicide Prevention Day",
      description: "A crucial initiative focused on raising awareness, breaking mental health stigmas, and providing support systems to build a compassionate campus community.",
      features: ['Awareness Campaigns', 'Support Group Circles', 'Mental Health Seminars'],
      image: "/suicide-prevention-day.jpg"
    },
    {
      id: 3,
      title: "Mental Health Awareness Month",
      description: "A month-long campus-wide program bringing open discussions, wellness drives, and counseling resources to prioritize student mental health.",
      features: ['Campus Wellness Drives', 'Open Discussions', 'Counseling Outreach'],
      image: "/mental-health-month.jpg"
    }
  ];

  return (
    <section className="initiatives section alt-bg" id="events">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Events</h2>
          <p className="section-description" style={{ marginTop: '8px', color: '#555', fontSize: '1.1rem' }}>
            Explore the key welfare events, mental health awareness drives, and wellness initiatives organized by the Student Welfare Board at IIT Kharagpur.
          </p>
        </div>

        <div className="initiatives-list">
          {events.map((event) => (
            <EventItem 
              key={event.id}
              title={event.title}
              description={event.description}
              features={event.features}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;