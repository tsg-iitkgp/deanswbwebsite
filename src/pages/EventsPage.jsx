import React from 'react';
import { motion } from 'framer-motion';

const EventsPage = () => {
  const pastEvents = [
    {
      id: 1,
      title: "SHINEKGP",
      description: "Presented by the Students' Welfare Committee, Technology Students' Gymkhana, and the Office of the Dean of Students' Wellbeing, SHINEKGP is an exciting competition celebrating clean and positive living spaces. This initiative encourages IIT Kharagpur students to take pride in their rooms, recognizing that a tidy environment fosters clarity, calm, and personal care. Because our personal spaces are where we think, rest, and grow, keeping them organized directly enhances both productivity and peace of mind. The event promotes a healthier campus lifestyle by inspiring everyone to uplift their daily surroundings. To celebrate and encourage these efforts, the students with the absolute cleanest rooms will be specially awarded.",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Recharge Zone",
      description: "To support students through the pressures of placement season, we introduced 24/7 Recharge Zones at the Nalanda Classroom Complex. These dedicated spaces are designed to help you relax, reset, and refocus. Students can drop in at any time to unwind with a variety of stress-relieving activities, including yoga, clay modelling, doodling, and darts. For a more active break, table tennis and other grounding exercises are also available to help clear your head. Whenever things feel a bit overwhelming, these calm and cozy zones offer the perfect sanctuary to step back, slow down, and recharge your mind.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "Wellbeing Day",
      description: "The Office of the Dean of Students' Wellbeing and the Students’ Welfare Committee hosted the first-ever Wellbeing Day, a two-day celebration dedicated entirely to relaxation and connection. The event provided the perfect opportunity for students to unwind, recharge, and engage in meaningful conversations away from their usual routines. The campus came alive with a vibrant Arena featuring delicious food stalls, music, and interactive games. Beyond the fun, attendees participated in enriching workshops, insightful panel discussions, competitive events, and valuable mentorship sessions. It was a refreshing break that successfully brought the community together to prioritize holistic wellbeing.",
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
      description: "The journey at IIT Kharagpur begins with unforgettable memories, and Lantern Night offers the perfect starting point. This spectacular evening brings students together under a breathtaking sky illuminated by thousands of glowing lanterns. It is a vibrant celebration of new beginnings, campus community, and the enduring KGPian spirit. Attendees can look forward to a magical atmosphere filled with live music, radiant lights, and the chance to forge lasting friendships. Join us in creating a beautiful kickoff to your college chapter that you will cherish for years to come.",
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