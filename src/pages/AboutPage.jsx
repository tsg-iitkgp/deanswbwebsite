import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const team = [
    {
      name: "Prof. Animesh Kumar",
      role: "Dean of Student Wellbeing",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
      description: "Leading the initiative to create a healthier, more supportive campus environment."
    },
    {
      name: "Dr. Sarah Mitchell",
      role: "Head Counselor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      description: "Dedicated to providing professional mental health support to all students."
    },
    {
      name: "Rahul Verma",
      role: "Student Coordinator",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      description: "Bridging the gap between the administration and the student body."
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet the dedicated team working behind the scenes to ensure your wellbeing.
        </motion.p>
      </div>

      {/* Mission Section */}
      <section className="section" style={{ paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 800 }}>Our Mission</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
              At the Office of the Dean of Student Wellbeing, our mission is to foster a campus culture where every student feels supported, valued, and empowered. We are committed to providing comprehensive resources, proactive mental health support, and engaging initiatives that promote holistic personal development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section alt-bg">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px', fontWeight: 800 }}>
            Meet The Team
          </h2>
          <div className="grid-container">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                style={{ textAlign: 'center', alignItems: 'center' }}
              >
                <div style={{ 
                  width: '150px', 
                  height: '150px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  marginBottom: '24px',
                  border: '4px solid var(--bg-mint)'
                }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{member.name}</h3>
                <h4 style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '16px' }}>{member.role}</h4>
                <p>{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
