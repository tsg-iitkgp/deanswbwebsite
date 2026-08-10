import React from 'react';
import { motion } from 'framer-motion';

const ResourcesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Resources
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
        <div className="grid-container">
          {/* Placeholder for Resources */}
          <motion.div 
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Student Handbook</h3>
            <p>Complete guide to policies, procedures, and resources at IIT KGP.</p>
            <button className="btn btn-primary" style={{marginTop: 'auto'}}>Download PDF</button>
          </motion.div>
          <motion.div 
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Wellness Worksheets</h3>
            <p>Self-guided exercises for managing stress and time effectively.</p>
            <button className="btn btn-primary" style={{marginTop: 'auto'}}>View Worksheets</button>
          </motion.div>
          <motion.div 
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Campus Map (Safe Zones)</h3>
            <p>Interactive map highlighting quiet areas and wellness centers.</p>
            <button className="btn btn-primary" style={{marginTop: 'auto'}}>Open Map</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
