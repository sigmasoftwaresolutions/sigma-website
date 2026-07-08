import { useState } from "react";
import { Mail, Phone, User, Building2, Send } from "lucide-react";

const Enquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page section">
      <div className="container contact-page-container">
        <div className="contact-copy">
          <span className="section-tag">Enquiry</span>
          <h1 className="section-heading">Request a Consultation</h1>
          <p className="section-description">
            Share your details and our team will get back to you for consultation,
            technology solutions, and business discussions.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Name</span>
            <div className="input-wrap">
              <User size={20} />
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>
          </label>

          <label className="form-field">
            <span>Email ID</span>
            <div className="input-wrap">
              <Mail size={20} />
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
          </label>

          <label className="form-field">
            <span>Mobile Number</span>
            <div className="input-wrap">
              <Phone size={20} />
              <input type="tel" name="mobile" placeholder="Enter mobile number" required />
            </div>
          </label>

          <label className="form-field">
            <span>Company Name</span>
            <div className="input-wrap">
              <Building2 size={20} />
              <input type="text" name="company" placeholder="Enter company name" required />
            </div>
          </label>

          <button className="primary-btn contact-submit" type="submit">
            <Send size={18} />
            <span>Submit</span>
          </button>

          {submitted && (
            <p className="form-success">
              Thank you. Your enquiry details are ready for the Sigma Consultants team.
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Enquiry;
