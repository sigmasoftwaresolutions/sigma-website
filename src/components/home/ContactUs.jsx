import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <main id="contactus" className="contact-info-page section">
      <div className="container contact-info-container">
        <div className="contact-copy">
          <span className="section-tag">Contact Us</span>
          <h1 className="section-heading">Reach Sigma Consultants</h1>
          <p className="section-description">
            Use these company contact details for calls, email, and business communication.
            For the office address and map, visit the Locate Us section.
          </p>
        </div>

        <div className="contact-info-card">
          <a href="tel:+919845021606" className="contact-info-item">
            <span className="contact-info-icon"><Phone size={24} /></span>
            <span>
              <strong>Phone</strong>
              <small>+91 9845021606</small>
            </span>
          </a>

          <a href="tel:+919741778096" className="contact-info-item">
            <span className="contact-info-icon"><Phone size={24} /></span>
            <span>
              <strong>Alternate Phone</strong>
              <small>+91 9741778096</small>
            </span>
          </a>

          <a href="mailto:sigma.soft@yahoo.co.in" className="contact-info-item">
            <span className="contact-info-icon"><Mail size={24} /></span>
            <span>
              <strong>Email ID</strong>
              <small>sigma.soft@yahoo.co.in</small>
            </span>
          </a>

          <a href="/#locateus" className="secondary-btn contact-location-link">
            <MapPin size={18} />
            <span>View Address & Map</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;