import { Calendar, MapPin, Clock } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const EventsPage = () => {
  useReveal();

  const events = [
    {
      id: 1,
      title: "Annual Welcoming Orientation",
      date: "August 15, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Netaji Auditorium",
      image: "https://images.unsplash.com/photo-1523580494112-071dcb849a1d?q=80&w=2070&auto=format&fit=crop",
      description: "Join us for the grand welcoming ceremony for the incoming batch. Get to know the campus, faculty, and the Student Welfare Board initiatives."
    },
    {
      id: 2,
      title: "Mental Health Awareness Week",
      date: "September 5 - 10, 2026",
      time: "Various Timings",
      location: "Student Activity Center (SAC)",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
      description: "A week-long series of workshops, interactive sessions, and professional counseling camps aimed at breaking the stigma around mental health."
    },
    {
      id: 3,
      title: "Career & Alumni Mentorship Mixer",
      date: "October 12, 2026",
      time: "4:00 PM - 7:00 PM",
      location: "Nalanda Complex",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      description: "Connect with distinguished alumni from various industries. A perfect opportunity for career guidance and networking."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title reveal">Upcoming Events</h1>
          <p className="page-subtitle reveal" style={{transitionDelay: '0.1s'}}>
            Stay updated with the latest workshops, seminars, and community gatherings organized by the SWB.
          </p>
        </div>
      </div>

      {/* Events List Section */}
      <div className="section">
        <div className="container">
          <div className="grid-container">
            {events.map((event, index) => (
              <div 
                key={event.id} 
                className="card reveal" 
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <img src={event.image} alt={event.title} className="card-image" />
                <h3 style={{marginBottom: '16px'}}>{event.title}</h3>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                    <Calendar size={16} color="var(--accent-green)" />
                    <span>{event.date}</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                    <Clock size={16} color="var(--accent-green)" />
                    <span>{event.time}</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                    <MapPin size={16} color="var(--accent-green)" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p style={{marginBottom: '24px'}}>{event.description}</p>
                
                <button className="btn btn-secondary" style={{width: '100%', marginTop: 'auto'}}>
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
