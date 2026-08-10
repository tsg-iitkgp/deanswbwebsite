import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Users, BookOpen } from 'lucide-react';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Random images from the web
  const galleryImages = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
  ];

  const features = [
    { icon: <Heart size={32} />, title: "Support Services", desc: "Counseling and mental health resources", link: "/support" },
    { icon: <Calendar size={32} />, title: "Upcoming Events", desc: "Workshops, seminars, and retreats", link: "/events" },
    { icon: <BookOpen size={32} />, title: "Resources", desc: "Guides, handbooks, and policies", link: "/resources" },
    { icon: <Users size={32} />, title: "About Us", desc: "Meet our dedicated support team", link: "/about" },
  ];

  return (
    <div className="home-wrapper" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        padding: '80px 5%', /* Reduced height to remove empty space */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-gradient)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: 'var(--text-header)',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.03em'
            }}
          >
            Welcome to the office of <br/>
            <span style={{ 
              background: 'linear-gradient(90deg, var(--accent), #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Dean Student Wellbeing
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-main)',
              maxWidth: '750px',
              margin: '0 auto 30px auto',
              lineHeight: 1.6
            }}
          >
            Empowering students to thrive personally, socially, and academically. 
            We are here to support your holistic development throughout your journey at IIT Kharagpur.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/support" className="btn btn-primary">
              Explore Support Services
            </Link>
            <Link to="/events" className="btn btn-secondary">
              View Upcoming Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links / Features Section to fill space */}
      <section className="section" style={{ padding: '40px 0', marginTop: '-30px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
              >
                <Link to={item.link} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  background: '#fff',
                  padding: '30px 20px',
                  borderRadius: '16px',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-color)',
                  height: '100%'
                }}
                className="card-hover"
                >
                  <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-header)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Marquee Image Gallery (Reverted from scroll-driven) */}
      <section style={{ padding: '40px 0', background: 'var(--bg-alt)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: '200%' }}>
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '30px', paddingRight: '30px' }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} style={{ 
                width: '450px', 
                height: '300px', 
                borderRadius: '20px',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: 'var(--card-shadow)'
              }}>
                <img src={img} alt="Campus Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History / About Department Section */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '50px',
            alignItems: 'center' 
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
                Our History & Mission
              </h2>
              <div style={{ width: '60px', height: '5px', background: 'var(--accent)', borderRadius: '3px', marginBottom: '24px' }} />
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '16px' }}>
                Established with a vision to nurture the holistic development of students, the Office of the Dean of Student Wellbeing has been a cornerstone of campus life at IIT Kharagpur for decades. 
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '24px' }}>
                We believe that true academic excellence is built on a foundation of mental, physical, and emotional wellbeing. Our dedicated team works tirelessly to create a safe, inclusive, and enriching environment for all.
              </p>
              <Link to="/about" className="btn btn-secondary">Read More About Us</Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/10',
                background: 'url(https://picsum.photos/800/500?random=10) center/cover',
                borderRadius: '24px',
                boxShadow: 'var(--card-shadow)'
              }} />
              <motion.div 
                style={{ y }}
                className="glass-panel"
                sx={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  padding: '20px',
                  borderRadius: '16px',
                  maxWidth: '220px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '4px' }}>20+</h3>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>Years of dedicated student support.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style for inline hover effects not covered by generic classes */}
      <style>{`
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: var(--card-shadow-hover);
          border-color: var(--accent);
        }
      `}</style>
    </div>
  );
};

export default Home;
