import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ComplaintModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.target;
    const formData = new FormData(form);
    // Convert formData to a plain object for our JSON API
    const payload = Object.fromEntries(formData.entries());

    try {
      const templateParams = {
        name: payload.name,
        rollNumber: payload.rollNumber,
        complaint: payload.description
      };

      await emailjs.send(
        "service_m9cndz3",
        "template_ai6ibhr",
        templateParams,
        "EcgKRlUdYA_kv3rkk"
      );

      setIsSuccess(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("An error occurred while submitting your complaint. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Reset state when closing so they can submit again later
    setTimeout(() => {
      setIsSuccess(false);
      setError('');
    }, 300);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={handleClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={handleClose}>
            <X size={24} />
          </button>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 20px auto' }} />
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: 'var(--text-header)' }}>
                Complaint Submitted Successfully
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Your complaint has been securely forwarded to our team. We will review it shortly.
              </p>
              <button className="btn btn-primary" onClick={handleClose}>
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px', color: 'var(--text-header)' }}>
                Register a Complaint
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Please fill out the form below. Your complaint will be sent securely and directly to the administration.
              </p>

              {error && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '12px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#dc2626' }}>
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" name="name" className="form-input" required placeholder="Enter your full name" />
                </div>

                <div className="form-group">
                  <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                  <input type="text" id="rollNumber" name="rollNumber" className="form-input" required placeholder="Enter your roll number" />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Complaint Description</label>
                  <textarea id="description" name="description" className="form-textarea" required placeholder="Describe your issue in detail..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ComplaintModal;
