import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const AboutPage = () => {
  const topMember = {
    name: "Prof. Arun Chakraborty",
    role: "Dean, Student Wellbeing",
    image: "/profarun.webp",
    description: "Leading the initiative to create a healthier, more supportive campus environment."
  };

  const team = [
    {
      name: "Prof. Indrani Sen",
      role: "Associate Dean, Student Wellbeing",
      image: "/profindrani.png",
      description: "Leading the initiative to create a healthier, more supportive campus environment."
    },
    {
      name: "Prof. Debarghya Chakraborty",
      role: "Associate Dean, Student Wellbeing",
      image: "/profdc.png",
      description: "Dedicated to providing professional mental health support to all students."
    },
    {
      name: "Rahul Verma",
      role: "Secretary to Dean, Student Wellbeing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      description: "Bridging the gap between the administration and the student body."
    }
  ];

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      <style>{`
        .mission-full-width {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background-color: #ffffff;
          padding: 48px 0 0 0;
          text-align: center;
        }

        .mission-content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Section size kept compact at 340px */
        .mission-image-wrapper {
          width: 100%;
          height: 340px;
          margin-top: 20px;
          position: relative;
          overflow: hidden;
        }

        .top-card-container {
          max-width: 850px;
          margin: 0 auto 70px auto;
          position: relative;
          padding: 20px 20px 0 0;
        }

        .top-card-white {
          position: relative;
          z-index: 2;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          clip-path: polygon(0 0, 68% 0, 100% 100%, 0 100%);
          padding: 48px 240px 48px 48px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #222;
        }

        .top-card-img-box {
          position: absolute;
          top: -15px;
          right: 15px;
          width: 42%;
          height: calc(100% - 10px);
          z-index: 3;
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
          box-shadow: -5px 5px 15px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .mission-image-wrapper {
            height: 240px;
          }
          .top-card-container {
            padding: 0;
            margin-bottom: 50px;
          }
          .top-card-white {
            clip-path: none !important;
            padding: 24px !important;
            min-height: auto !important;
            align-items: center;
            text-align: center;
          }
          .top-card-img-box {
            position: relative !important;
            top: 0 !important;
            right: 0 !important;
            width: 100% !important;
            height: 240px !important;
            clip-path: none !important;
            border-radius: 16px;
            margin-bottom: 20px;
          }
        }
      `}</style>

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
      <section className="section" style={{ paddingBottom: 0, paddingTop: 0 }}>
        <div className="mission-full-width">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 800 }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
              At the Office of the Dean of Student Wellbeing, our mission is to foster a campus culture where every student feels supported, valued, and empowered. We are committed to providing comprehensive resources, proactive mental health support, and engaging initiatives that promote holistic personal development.
            </p>
          </motion.div>

          {/* Compact Wrapper with Image Shifted Down */}
          <div className="mission-image-wrapper">
            <img
              src="/about.jpg"
              alt="Our Mission"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top 20%',
                display: 'block'
              }}
            />
            {/* Top Gradient Blend */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '45px',
                background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%)',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section alt-bg" style={{ paddingTop: '50px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px', fontWeight: 800 }}>
            Meet The Team
          </h2>

          {/* Asymmetric Top Featured Card */}
          <motion.div
            className="top-card-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Layered Background Frame */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: '15px',
                left: '25px',
                backgroundColor: '#a3b8c8',
                borderRadius: '24px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                zIndex: 1
              }}
            />

            {/* Asymmetric Overlapping Image Container */}
            <div className="top-card-img-box">
              <img
                src={topMember.image}
                alt={topMember.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Main White Card */}
            <div className="top-card-white">
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 4px 0', lineHeight: 1.2 }}>
                {topMember.name}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#555', margin: '0 0 16px 0' }}>
                {topMember.role}
              </p>
              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: '0 0 16px 0', maxWidth: '320px' }}>
                {topMember.description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#444', fontSize: '0.9rem', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={16} color="var(--accent)" /> <span>deanswb@adm.iitkgp.ac.in</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={16} color="var(--accent)" /> <span>+91-3222-282055</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom 3 Cards */}
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