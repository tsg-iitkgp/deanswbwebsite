import React from 'react';
import { motion } from 'framer-motion';

const EventsPage = () => {
  const pastEvents = [
    {
      id: 1,
      title: "ShineKGP",
      description: "A transformative week-long series of workshops and talks focused on breaking the stigma around mental health. We brought together students, faculty, and renowned psychologists to engage in open dialogues, share personal journeys, and build a stronger, more empathetic campus community.",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Recharge Zone",
      description: "An intensive, hands-on session where students learned practical techniques to manage academic stress. The masterclass covered mindfulness exercises, time management strategies, and cognitive reframing to help students navigate the high-pressure environment of mid-semester examinations.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "Wellbeing Day",
      description: "A full day of outdoor activities designed to help students disconnect from their screens and reconnect with themselves. From guided morning meditation on the campus grounds to group therapy sessions and healthy nutritional workshops, this retreat served as a vital recharge before finals.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 4,
      title: "Induction Programme",
      description: "An interactive orientation designed for incoming freshers to smoothly transition into campus life. This programme familiarizes new students with the vast array of support services, mentorship networks, and wellness facilities available to them from day one.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 5,
      title: "Wellbeing Courses",
      description: "A series of credit and non-credit courses integrated into the academic curriculum, focusing on emotional intelligence, resilience, and interpersonal skills. These classes empower students with the theoretical and practical knowledge needed to thrive both personally and professionally.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 6,
      title: "Lantern Night",
      description: "A magical evening where the entire student body gathers to light and release eco-friendly lanterns, symbolizing the release of academic stress and the sharing of collective hope. It stands as one of the most visually stunning and emotionally unifying events of the academic year.",
      image: "https://images.unsplash.com/photo-1517260739337-6799d239ce83?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="page-wrapper" style={{ background: 'var(--bg-main)' }}>
      {/* Page Header */}
      <div className="page-header" style={{ background: 'var(--bg-alt)', padding: '100px 0 80px 0' }}>
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '3.5rem' }}
        >
          Our Events
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A look back at the impactful events and workshops we've hosted to foster wellbeing.
        </motion.p>
      </div>

      {/* Alternating Zigzag Layout */}
      <div style={{ overflow: 'hidden' }}>
        {pastEvents.map((event, index) => {
          const isEven = index % 2 !== 0;
          
          return (
            <section 
              key={event.id} 
              style={{ 
                padding: '80px 0', 
                background: isEven ? 'var(--bg-alt)' : 'var(--bg-main)' 
              }}
            >
              <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row-reverse' : 'row',
                  alignItems: 'center',
                  gap: '60px',
                  flexWrap: 'wrap'
                }}>
                  
                  {/* Image Container */}
                  <motion.div 
                    style={{ flex: '0 0 350px', position: 'relative' }}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div style={{
                      position: 'relative',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                      aspectRatio: '4/3'
                    }}>
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
                    style={{ flex: '1 1 500px' }}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <h2 style={{ 
                      fontSize: 'clamp(2rem, 4vw, 3rem)', 
                      fontWeight: 800, 
                      color: 'var(--text-header)',
                      marginBottom: '24px',
                      lineHeight: 1.1,
                      letterSpacing: '-0.03em'
                    }}>
                      {event.title}
                    </h2>
                    
                    <div style={{ 
                      width: '60px', 
                      height: '6px', 
                      background: 'var(--accent)', 
                      borderRadius: '3px', 
                      marginBottom: '32px' 
                    }} />
                    
                    <p style={{ 
                      fontSize: '1.15rem', 
                      color: 'var(--text-main)', 
                      lineHeight: 1.8 
                    }}>
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