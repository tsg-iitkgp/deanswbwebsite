import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Map, ExternalLink } from 'lucide-react';

const QuickLinksPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Other Links
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Valuable materials and guides to help you navigate campus life.
        </motion.p>
      </div>
      
      <div className="section container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
          
          <motion.div 
            className="card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', padding: '30px' }}
          >
            <div style={{ background: 'var(--bg-mint)', padding: '20px', borderRadius: '20px' }}>
              <Book size={40} color="var(--accent)" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Apna IIT KGP</h3>
              <p style={{ color: 'var(--text-muted)' }}>The central portal for all student welfare activities, resources, and updates at IIT Kharagpur.</p>
            </div>
            <a 
              href="https://apna.iitkgp.ac.in/web/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              style={{ flexShrink: 0, alignSelf: 'center', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <ExternalLink size={18} />
              Visit Apna IIT KGP website
            </a>
          </motion.div>

          <motion.div 
            className="card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', padding: '30px' }}
          >
            <div style={{ background: 'var(--bg-mint)', padding: '20px', borderRadius: '20px' }}>
              <FileText size={40} color="var(--accent)" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Wellbeing Policy</h3>
              <p style={{ color: 'var(--text-muted)' }}>Important guidelines and framework for student welfare at IIT KGP.</p>
            </div>
            <button className="btn btn-primary" style={{ flexShrink: 0, alignSelf: 'center' }}>View Wellbeing policy</button>
          </motion.div>

          {/*<motion.div 
            className="card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', padding: '30px' }}
          >
            <div style={{ background: 'var(--bg-mint)', padding: '20px', borderRadius: '20px' }}>
              <Map size={40} color="var(--accent)" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Campus Map (Safe Zones)</h3>
              <p style={{ color: 'var(--text-muted)' }}>Interactive map highlighting quiet areas and wellness centers.</p>
            </div>
            <button className="btn btn-primary" style={{ flexShrink: 0 }}>Open Map</button>
          </motion.div>*/}
          
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .card {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default QuickLinksPage;
