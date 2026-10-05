import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-bsw" id="contact">
      <div className="container footer-content-bsw">
        <div className="footer-col">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg" 
                alt="IIT KGP Logo" 
                style={{ height: '50px', width: 'auto', flexShrink: 0, objectFit: 'contain' }} 
              />
              <h6 style={{ fontSize: '1rem', margin: 0 }}>DEAN STUDENT WELLBEING</h6>
            </div>
            <p>
              The Office of the Dean Student Wellbeing works to foster a supportive ecosystem at IIT Kharagpur by bringing together dedicated faculty and student representatives to ensure the holistic development of every student.
            </p>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Welfare</h4>
          <ul>
            <li><a href="https://www.iitkgp.ac.in/student-brotherhood-fund">Student Brotherhood Fund</a></li>
            <li><a href="https://setuatcc.iitkgp.ac.in/">SETU IIT KGP</a></li>
            <li><a href="https://yourdost.com/">YourDOST</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events & Inititatives</Link></li>
            <li><Link to="/support">Support Services</Link></li> 
            <li><Link to="/quick-links">Other Links</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        
        {/*<div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Events</a></li>
            <li><a href="#">Operations</a></li>
            <li><a href="#">Technical Team</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Emergency Contacts</a></li>
          </ul>
        </div>*/}
        
        <div className="footer-col">
          <h4>Institute</h4>
          <ul className="contact-info">
            <li><MapPin size={18} style={{flexShrink: 0}} /> <span>Office of the Dean (SWB), IIT Kharagpur, West Bengal 721302</span></li>
            <li><Mail size={18} style={{flexShrink: 0}} /> <span>deanswb@adm.iitkgp.ac.in</span></li>
            <li><Phone size={18} style={{flexShrink: 0}} /> <span>+91-3222-282055</span></li>
          </ul>
        </div>
      </div>
      
      {/* Watermark text */}
      <div className="footer-watermark">
        <div className="footer-watermark-track">
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
          <span>WELLBEING</span>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;