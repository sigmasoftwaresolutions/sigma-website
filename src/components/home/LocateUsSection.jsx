import { MapPin, Navigation } from "lucide-react";

const LocateUsSection = () => {
  return (
    <section id="locateus" className="locate-us section">
      <div className="container">

        <span className="section-tag">Locate Us</span>

        <h2 className="section-heading">
          Visit Our Office
        </h2>

        <p className="section-description">
          Visit our office for consultations, technology solutions, and business discussions.
        </p>

        {/* New Wrapper */}
        <div className="location-container">

          <div className="office-card">

            <div className="office-icon">
              <MapPin />
            </div>

            <h3>Sigma Consultants</h3>

            <p>
              No.142, 2nd Floor, 7th Cross, 3rd Main,
              Thalacauvery Layout, Basavanagar,
              Bengaluru – 560037, Karnataka, India
            </p>

            <a
              href="https://maps.google.com/?q=12.966567999209289,77.67908726955494"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </a>

          </div>

          <div className="map-card">

            <iframe
              title="Sigma Consultants Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d972.0206428533094!2d77.67908726955494!3d12.966567999209289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzU5LjYiTiA3N8KwNDAnNDcuMCJF!5e0!3m2!1sen!2sin!4v1783421877589!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocateUsSection;