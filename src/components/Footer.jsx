import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-bsw" id="contact">
      <div className="container footer-content-bsw">
        <div className="footer-col">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <img 
                src="/logo.png" 
                alt="SWC Logo" 
                style={{ height: '50px', width: 'auto', flexShrink: 0 }} 
              />
              <h6 style={{ fontSize: '1rem', margin: 0 }}>STUDENTS' WELFARE COMMITTEE</h6>
            </div>
            <p>
              Students' Welfare Committee is primarily a student body consisting of dedicated representatives and faculty members, working together to foster a supportive ecosystem at IIT Kharagpur.
            </p>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Welfare</h4>
          <ul>
            <li><a href="#">Academic Portal</a></li>
            <li><a href="#">Mental Health</a></li>
            <li><a href="#">Career Services</a></li>
            <li><a href="#">Language Mentorship</a></li>
            <li><a href="#">Alumni Mentorship</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Events</a></li>
            <li><a href="#">Operations</a></li>
            <li><a href="#">Technical Team</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Emergency Contacts</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Institute</h4>
          <ul className="contact-info">
            <li><MapPin size={18} style={{flexShrink: 0}} /> <span>Office of the Dean (SA), IIT Kharagpur, West Bengal 721302</span></li>
            <li><Mail size={18} style={{flexShrink: 0}} /> <span>deansa@hijli.iitkgp.ac.in</span></li>
            <li><Phone size={18} style={{flexShrink: 0}} /> <span>+91-3222-282033</span></li>
          </ul>
        </div>
      </div>
      
      {/* Watermark text */}
      <div className="footer-watermark">
        WELFARE
      </div>
      
    </footer>
  );
};

export default Footer;