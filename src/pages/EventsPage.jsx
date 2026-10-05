import React from 'react';
import { motion } from 'framer-motion';

const EventsPage = () => {
  const pastEvents = [
    {
      id: 1,
      title: "SHINEKGP",
      description: "SHINEKGP was a campus-wide competition that encouraged students to take pride in their personal living spaces by maintaining clean and positive environments. Recognizing that a tidy room fosters clarity, calm, and productivity, the initiative promoted a healthier campus lifestyle. To celebrate these efforts, students who maintained the absolute cleanest rooms across the halls were recognized and awarded for uplifting their surroundings.",
      image: "/shinekgp.jpeg"
    },
    {
      id: 2,
      title: "Recharge Zone",
      description: "Introduced during the stressful placement season, the 24/7 Recharge Zones at the Nalanda Classroom Complex provided students with a dedicated space to relax and refocus. These calm, cozy sanctuaries offered various stress-relieving activities, including yoga, clay modeling, doodling, darts, and table tennis. They served as the perfect drop-in retreat for anyone needing to step back, slow down, and recharge their mind.",
      image: "/rehargezone.jpeg"
    },
    {
      id: 3,
      title: "Wellbeing Day",
      description: "The first-ever Wellbeing Day was a two-day initiative hosted to foster relaxation, connection, and meaningful conversations among students. The event featured a vibrant arena with food, music, and games, alongside enriching workshops, panel discussions, and mentorship sessions. It provided a much-needed break from routine, successfully bringing the campus community together to prioritize holistic mental and physical health.",
      image: "/wellbeingday.jpeg"
    },
    {
      id: 4,
      title: "Induction Programme",
      description: "An interactive orientation designed for incoming freshers to smoothly transition into campus life. This programme familiarizes new students with the vast array of support services, mentorship networks, and wellness facilities available to them from day one.",
      image: "/induction-programme.jpeg"
    },
    {
      id: 5,
      title: "Wellbeing Courses",
      description: "As a core academic initiative, IIT Kharagpur introduced the Life Skills and Joy and Success courses to actively promote student wellbeing and emotional resilience. The foundational Life Skills program equips students with emotional intelligence to navigate campus life, while the Joy and Success elective guides them in balancing ambition with personal happiness. Ultimately, this initiative empowers the student community to manage stress, build empathy, and find true fulfillment alongside their academic achievements.",
      image: "/wellbeing-courses.avif"
    },
    {
      id: 6,
      title: "Lantern Night",
      description: "Lantern Night brought the campus community together for a spectacular evening under a breathtaking sky illuminated by thousands of glowing lanterns. The event served as a vibrant celebration of new beginnings, togetherness, and the enduring KGPian spirit. Accompanied by live music and radiant lights, students shared a magical atmosphere that helped forge lasting friendships and unforgettable college memories.",
      image: "/lantern-night.jpeg"
    }
  ];

  return (
    <div className="page-wrapper" style={{ background: 'var(--bg-main)' }}>
      {/* Page Header */}
      <div className="page-header events-page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Events & Initiatives
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A look back at the impactful events and intitiatives we've hosted to foster wellbeing.
        </motion.p>
      </div>

      {/* Alternating Zigzag Layout */}
      <div style={{ overflow: 'hidden' }}>
        {pastEvents.map((event, index) => {
          const isEven = index % 2 !== 0;
          
          return (
            <section
              key={event.id}
              className="event-section"
              style={{ background: isEven ? 'var(--bg-alt)' : 'var(--bg-main)' }}
            >
              <div className="container" style={{ maxWidth: '1200px' }}>
                <div className={`event-row ${isEven ? 'event-row-reverse' : ''}`}>
                  
                  {/* Image Container */}
                  <motion.div 
                    className="event-image-container"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="event-image-frame">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      {/* Stylistic overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)',
                        pointerEvents: 'none'
                      }} />
                    </div>
                  </motion.div>

                  {/* Text Container */}
                  <motion.div 
                    className="event-copy"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <h2 className="event-title">
                      {event.title}
                    </h2>
                    
                    <div style={{ 
                      width: '60px', 
                      height: '6px', 
                      background: 'var(--accent)', 
                      borderRadius: '3px', 
                      marginBottom: '32px' 
                    }} />
                    
                    <p className="event-description">
                      {event.description}
                    </p>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;
