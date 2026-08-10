import React from 'react';
import { motion } from 'framer-motion';

const SupportServicesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support Services
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive care and resources dedicated to your wellbeing.
        </motion.p>
      </div>
      
      <div className="section container">
        <div className="grid-container">
          {/* Placeholder for Support Services Cards */}
          <motion.div 
            className="card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Counseling Centre</h3>
            <p>Professional counseling services tailored to students' personal and academic challenges.</p>
          </motion.div>
          <motion.div 
            className="card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Peer Support</h3>
            <p>Connect with trained student mentors who understand campus life.</p>
          </motion.div>
          <motion.div 
            className="card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>Mental Health Crisis</h3>
            <p>24/7 helpline and immediate assistance for urgent mental health situations.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupportServicesPage;
