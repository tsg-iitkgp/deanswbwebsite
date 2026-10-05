import React from 'react';
import { motion } from 'framer-motion';

const SupportServicesPage = () => {
  return (
    <div className="page-wrapper" style={{ background: 'var(--bg-main)' }}>
      <div className="page-header support-page-header">
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
      
      <div className="section container support-section">
        <div className="support-services-list">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="support-service-card support-service-card-mitra"
          >
            <h3 className="support-service-title support-service-title-accent">
              MITRA: Faculty Mentor Initiative
            </h3>
            <p className="support-service-description">
              The MITRA initiative is a faculty-driven, early-detection program where faculty members act as non-evaluative "guardian-friends" to small groups of undergraduate students. Through mandatory monthly informal meetings and periodic dinners, mentors check in on their students' academic and emotional wellbeing. These observations are quickly logged into a structured ERP module, which automatically flags emerging distress signals directly to the Counselling Centre within 24 hours. This system ensures that vulnerable students receive proactive, professional help long before a situation escalates into a crisis.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="support-service-card support-service-card-saarthi"
          >
            <h3 className="support-service-title">
              SAARTHI: Wing Representative Program
            </h3>
            <p className="support-service-description">
              The SAARTHI initiative establishes a structured, residential peer-support network by transforming the traditional Wing Representative role into a formally trained gatekeeper position. These student representatives conduct monthly check-ins within their hostel wings to identify early signs of social isolation, academic withdrawal, or emotional distress among their peers. Using the digital SETU platform, they securely log welfare interactions and can immediately escalate any acute safety concerns to hall administration and clinical professionals. To ensure commitment without adding academic pressure, participating students are evaluated on a risk-free basis and can earn academic credits for their efforts.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SupportServicesPage;
